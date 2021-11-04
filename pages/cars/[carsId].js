import React from 'react';

function singleCar() {
  return <div>Single Car page</div>;
}

export default singleCar;

// Make it work with a single IDDDDD

export async function getServerSideProps(context) {
  const { getCarData } = await import('../../util/database');

  // const car = await getCarData(Number(context.query.carsId));
  // console.log(car);

  //console.log('from gSSP', cardata);
  return {
    props: {
      // cardata,
    },
  };
}
