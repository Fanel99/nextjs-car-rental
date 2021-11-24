// Creating the end point

import { getCarData, updateAddById } from '../../util/database';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const cardata = await getCarData(Number(req.query.carsid));
    // console.log('from api routes', await getCarData(Number(req.query.carsId)));

    res.status(200).json(cardata);
  } else if (req.method === 'PATCH') {
    const body = req.body;

    //  console.log('from api body', req.body);

    const updateCardata = await updateAddById(Number(req.query.carsId), {
      carName: body.carname,
      description: body.descript,
      dayPrice: body.price,
      pickUpAdress: body.adress,
      city: body.cityy,
      imageUrl: body.imgpath,
      phone: body.telephone,
      seats: body.seatss,
      fuell: body.fuell,
    });

    return res.status(200).json(updateCardata);
  }
  return res.status(405);
}
