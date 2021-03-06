import crypto from 'node:crypto';
import { NextApiRequest, NextApiResponse } from 'next';
import { hashPassword } from '../../util/auth';
import { createSerializedRegisterSessionTokenCookie } from '../../util/cookies';
import { verifyCsrfToken } from '../../util/csrf';
import {
  createSession,
  deleteExpiredSessions,
  getUserWithPasswordHashByUsername,
  insertUser,
  User,
} from '../../util/database';
import { Errors } from '../../util/types';

export type RegisterRequest = {
  username: string;
  password: string;
  email: string;
};

export type RegisterResponse = { errors: Errors } | { user: User };

export default async function registerHandler(
  req: NextApiRequest,
  res: NextApiResponse<RegisterResponse>,
) {
  if (!req.body.username || !req.body.password || !req.body.email) {
    res.status(400).send({
      errors: [
        { message: 'Request does not contain username, password and e-mail' },
      ],
    });
    return;
  }

  if (!req.body.csrfToken || !verifyCsrfToken(req.body.csrfToken)) {
    res.status(400).send({
      errors: [{ message: 'Request does not contain valid CSRF token' }],
    });
    return;
  }

  try {
    const username = req.body.username;
    const email = req.body.email;

    const existingUser = await getUserWithPasswordHashByUsername(username);

    if (existingUser) {
      res.status(400).send({
        errors: [{ message: 'Username already exists' }],
      });
      return;
    }

    const passwordHash = await hashPassword(req.body.password);

    const user = await insertUser({
      username: username,
      passwordHash: passwordHash,
      email: email,
    });

    // clean old sessions
    deleteExpiredSessions();

    if (!user) {
      res.status(500).send({ errors: [{ message: 'User not create' }] });
      return;
    }

    // Create the record in the sessions table with a new token

    // 1. create the token
    const token = crypto.randomBytes(64).toString('base64');

    // 2. do a DB query to add the session record
    const newSession = await createSession(token, user.id);

    // set the response to create the cookie in the browser

    const cookie = createSerializedRegisterSessionTokenCookie(newSession.token);

    res.status(200).setHeader('Set-Cookie', cookie).send({ user: user });
  } catch (err) {
    res.status(500).send({ errors: [{ message: (err as Error).message }] });
  }
}
