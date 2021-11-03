// Creating the end point

import { getCarsData } from '../../util/database';

export default async function handler(req, res) {
  const carsdata = await getCarsData();
  // console.log('from api routes', await getCarsData());

  res.status(200).json(carsdata);
}
