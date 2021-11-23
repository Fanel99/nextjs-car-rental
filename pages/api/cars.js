// Creating the end point

import { createAds, getCarsData } from '../../util/database';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const carsdata = await getCarsData();
    // console.log('from api routes', await getCarsData());

    return res.status(200).json(carsdata);
  } else if (req.method === 'POST') {
    const body = req.body;
    console.log('from API', req.body);

    const createCardata = await createAds({
      carName: body.carname,
      userid: body.iduser,
      description: body.descript,
      dayPrice: body.price,
      pickUpAdress: body.adress,
      city: body.cityy,
      imageUrl: body.imgpath,
      phone: body.telephone,
      seats: body.seatss,
      fuel: body.fuell,
    });
    return res.status(200).json(createCardata);

    // else if (req.method === 'PATCH') {
    //   const body = req.body;

    //   const updateCardata = await updateAddById({
    //     carName: body.carname,

    //     description: body.descript,
    //     dayPrice: body.price,
    //     pickUpAdress: body.adress,
    //     city: body.cityy,
    //     imageUrl: body.imgpath,
    //     phone: body.telephone,
    //     seats: body.seatss,
    //     fuel: body.fuell,
    //   });

    //  console.log('from API Update', updateCardata);

    //   return res.status(200).json(updateCardata);
  }
  return res.status(405);
}
