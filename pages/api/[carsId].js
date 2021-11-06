// Creating the end point

import { getCarData } from '../../util/database';

export default async function handler(req, res) {
  const cardata = await getCarData(Number(req.query.carsId));
  console.log('from api routes', await getCarData(Number(req.query.carsId)));

  res.status(200).json(cardata);
}
