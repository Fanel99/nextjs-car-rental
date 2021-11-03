import React from 'react';

function singleCar(props) {
  return <div>Single Car page</div>;
}

export default singleCar;

export async function getServerSideProps() {
  const cardataResponse = await fetch('http://localhost:3000/api/carsId');
  console.log(cardataResponse);

  // const cardata = await cardataResponse.json();

  // console.log('from gSSP', carsdata);
  return {
    props: {},
  };
}
