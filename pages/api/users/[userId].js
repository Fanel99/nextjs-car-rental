// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { deleteUserByUsername, getUser } from '../../../util/database';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const user = await getUser(Number(req.query.userId));
    // console.log('from API query', req.query.userId);
    res.status(200).json(user);
    // console.log('from API user', user);
  } else if (req.method === 'DELETE') {
    // console.log('query', req.query);
    const deletedUser = await deleteUserByUsername(req.query.userId);
    // console.log('from API', deleteUserByUsername());
    return res.status(200).json(deletedUser);
  }

  return res.status(405);
}

// localhost:3000/api/users/:id
