// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { deleteUserByUsername, getUser } from '../../../util/database';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const user = await getUser(Number(req.query.userId));
    res.status(200).json(user);
  } else if (req.method === 'DELETE') {
    // console.log('query', req.query);
    const deletedUsername = await deleteUserByUsername(req.query.userId);

    return res.status(200).json(deletedUsername);
  }

  return res.status(405);
}

// localhost:3000/api/users/:id
