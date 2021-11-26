// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {
  deleteUserByUsername,
  getUser,
  getValidSessionByToken,
} from '../../../util/database';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const user = await getUser(Number(req.query.userId));
    // console.log('from API query', req.query.userId);
    res.status(200).json(user);
  } else if (req.method === 'DELETE') {
    const deletedUser = await deleteUserByUsername(req.query.userId);

    // console.log('from API', deleteUserByUsername());
    return res.status(200).json(deletedUser);
  }

  return res.status(405).end();
}

// localhost:3000/api/users/:id
