// Creating the end point

import { createAds, getCarsData } from '../../util/database';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const carsdata = await getCarsData();
    // console.log('from api routes', await getCarsData());

    return res.status(200).json(carsdata);
  } else if (req.method === 'POST') {
    // Need also some code
    const body = req.body;

    const creatdAds = await createAds({
      carName: body.carName,
      description: body.description,
      dayPrice: body.dayPrice,
      pickUpAdress: body.pickUpAdress,
      city: body.city,
      imageUrl: body.imageUrl,
      phone: body.phone,
    });

    return res.status(200).json(creatdAds);
  }
  return res.status(405);
}
