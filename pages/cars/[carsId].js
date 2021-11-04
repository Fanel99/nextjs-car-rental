import React from 'react';

function singleCar() {
  return <div>Single Car page</div>;
}

export default singleCar;

export async function getServerSideProps() {
  const carResponse = await fetch('http://localhost:3000/api/carsId');
  // const cardata = await carResponse.json();
  // console.log('from gSSP', carsdata);
  return {
    props: {
      // cardata,
    },
  };
}
