// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {
  deleteUserByUsername,
  getUser,
  getValidSessionByToken,
} from '../../../util/database';

export default async function handler(req, res) {
  const token = req.cookies.sessionToken;
  const session = await getValidSessionByToken(token);

  console.log('req', req.query.userId);

  console.log('session', session.userId);

  if (!session) {
    res.status(404).send({
      errors: [{ message: 'Not a valid Session' }],
    });
    return;
  } else if (
    req.method === 'GET' &&
    session.userId === Number(req.query.userId)
  ) {
    const user = await getUser(Number(req.query.userId));
    res.status(200).json(user);
  } else if (
    req.method === 'DELETE' &&
    session.userId === Number(req.query.userId)
  ) {
    const deletedUser = await deleteUserByUsername(req.query.userId);
    return res.status(200).json(deletedUser);
  }
  return res.status(405).end();
}

// localhost:3000/api/users/:id
