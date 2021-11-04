import { css } from '@emotion/react';
import { useState } from 'react';

const containerHost = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  h2 {
    margin-bottom: 50px;
  }
`;

function CreateAds(props) {
  const [carName, setCarName] = useState('');
  const [description, setDescription] = useState('');
  const [dayPrice, setDayPrice] = useState('');
  const [pickUpAdress, setPickUpAdress] = useState('');
  const [city, setCity] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [phone, setPhone] = useState('');

  const uploadImage = async (event) => {
    const files = event.currentTarget.files;
    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('upload_preset', 'nextjs-rental');
    const res = await fetch(
      '	https://api.cloudinary.com/v1_1/nextjs-rental/image/upload',
      {
        method: 'POST',
        body: formData,
      },
    );
    const file = await res.json();

    setImageUrl(file.secure_url);
  };

  async function createCar(
    carname,
    descript,
    price,
    adress,
    cityy,
    imgpath,
    telephone,
  ) {
    const carsResponse = await fetch(`${props.baseUrl}/api/cars`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        carname,
        descript,
        price,
        adress,
        cityy,
        imgpath,
        telephone,
      }),
    });
    const car = carsResponse.json();
    console.log(car);
  }

  return (
    <div>
      <div css={containerHost}>
        <h2>Form for adding new car</h2>
        <input
          placeholder="Car Name"
          value={carName}
          onChange={(e) => setCarName(e.currentTarget.value)}
        />
        <input
          placeholder="Model"
          value={description}
          onChange={(e) => setDescription(e.currentTarget.value)}
        />
        <input
          placeholder="Day Price"
          value={dayPrice}
          onChange={(e) => setDayPrice(e.currentTarget.value)}
        />
        <input
          placeholder="Pick Up Adress"
          value={pickUpAdress}
          onChange={(e) => setPickUpAdress(e.currentTarget.value)}
        />
        <input
          placeholder="Enter a city"
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
        />

        <input
          type="file"
          placeholder="Upload an image"
          onChange={uploadImage}
        />
        <input
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.currentTarget.value)}
        />
        <button
          onClick={() =>
            createCar(
              carName,
              description,
              dayPrice,
              pickUpAdress,
              city,
              imageUrl,
              phone,
            )
          }
        >
          {' '}
          {/*  all good with values from controled components*/}
          Send to server
        </button>
      </div>
    </div>
  );
}

export default CreateAds;

export async function getServerSideProps() {
  const baseUrl = process.env.BASE_URL;
  const carResponse = await fetch(`${baseUrl}/api/cars`);
  const car = await carResponse.json();

  // console.log('from gSSP', car);
  // In this area is all good , data is here

  return {
    props: {
      car,
      baseUrl,
    },
  };
}
