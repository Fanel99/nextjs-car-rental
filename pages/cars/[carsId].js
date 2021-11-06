function singleCar() {
  return <div>Single Car page</div>;
}

export default singleCar;

export async function getServerSideProps(context) {
  const { getCarData } = await import('../../util/database');

  console.log(context.query);

  const cardata = await getCarData(Number(context.query.carsid));

  console.log('single page', cardata);

  return {
    props: {
      // cardata,
    },
  };
}
