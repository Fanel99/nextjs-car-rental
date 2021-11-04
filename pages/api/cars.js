// Creating the end point

import { createAds, getCarsData } from '../../util/database';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const carsdata = await getCarsData();
    // console.log('from api routes', await getCarsData());

    return res.status(200).json(carsdata);
  } else if (req.method === 'POST') {
    const body = req.body;

    // It's supose to work, at least i think so
    const createCardata = await createAds({
      carName: body.carname,

      description: body.descript,
      dayPrice: body.price,
      pickUpAdress: body.adress,
      city: body.cityy,
      imageUrl: body.imgpath,
      phone: body.telephone,
    });

    return res.status(200).json(createCardata);
  }
  return res.status(405);
}
