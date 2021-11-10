import { css } from '@emotion/react';
import Head from 'next/head';
import { useState } from 'react';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';

const formStyless = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  margin-top: 50px;

  .container {
    background: #fff;
    max-width: 900px;
    width: 100%;
    padding: 25px 30px;
    border-radius: 5px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.15);
  }

  .container .title {
    font-size: 30px;
    font-weight: 600;
    margin: 20px 0 10px 0;
    position: relative;
  }

  .container .title:before {
    content: '';
    position: absolute;
    height: 4px;
    width: 33px;
    bottom: 3px;
    left: 0;
    border-radius: 5px;
    background: linear-gradient(to right, #000000 0%, #403d3e 100%);
  }
  .container .titleRegister:before {
    content: '';
    position: absolute;
    height: 4px;
    width: 27px;
    bottom: 3px;
    left: 0;
    border-radius: 5px;
    background: linear-gradient(to right, #000000 0%, #403d3e 100%);
  }

  .container .input-box {
    width: 100%;
    height: 45px;
    margin-top: 25px;
    position: relative;
  }

  .container .input-box input {
    height: 100%;
    width: 100%;
    outline: none;
    font-size: 16px;
    border: none;
  }

  .container .underline:before {
    position: absolute;
    content: '';
    height: 2px;
    width: 100%;
    background: #ccc;
    left: 0;
    bottom: 0;
  }

  .container .underline:after {
    position: absolute;
    content: '';
    height: 2px;
    width: 100%;
    left: 0;
    bottom: 0;
    background: linear-gradient(to right, #000000 0%, #403d3e 100%);
    transform: scaleX(0);
    transform-origin: left;
    transition: all 0.3s ease;
  }
  .container .input-box input:focus ~ .underline:after,
  .container .input-box input:valid ~ .underline:after {
    transform: scaleX(1);
    transform-origin: left;
  }

  .container .button {
    margin: 40px 0 20px 0;
    text-align: center;
  }

  .container .input-box button {
    font-size: 17px;
    color: #fff;
    border-radius: 5px;
    margin-top: 30px;
    padding: 5px 10px;
    cursor: pointer;
    background: linear-gradient(to right, #000000 0%, #403d3e 100%);
    transition: all 0.3s ease;
  }

  .container .input-box button:hover {
    letter-spacing: 1px;
    background: linear-gradient(to left, #000000 0%, #403d3e 100%);
  }

  .input-box-wrapper-container {
    display: flex;
    gap: 50px;
  }
  .input-box-wrapper {
    display: flex;
    max-width: 400px;
    flex-direction: column;
    width: 100%;
  }

  .textarea {
    text-align: center;

    textarea {
      padding-top: 10px;
      padding-left: 10px;
    }
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
  const [seats, setSeats] = useState('');
  const [fuel, setFuel] = useState('');

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
    seatss,
    fuell,
  ) {
    console.log(
      'from host',
      carname,
      descript,
      price,
      adress,
      cityy,
      imgpath,
      telephone,
      seatss,
      fuell,
    );
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
        seatss,
        fuell,
      }),
    });
    const car = carsResponse.json();
    console.log(car);
  }

  return (
    <div>
      <Layout username={props.username}>
        <Head>
          <title>Host | Oldie but goodie</title>
        </Head>
        <Navigation />
        <div css={formStyless}>
          <div className="container">
            <div className="title">Become a host</div>
            <div className="input-box-wrapper-container">
              <div className="input-box-wrapper">
                <div className="input-box">
                  <input
                    required
                    placeholder="Car Name"
                    value={carName}
                    onChange={(e) => setCarName(e.currentTarget.value)}
                  />
                  <div className="underline" />
                </div>
                <div className="input-box">
                  <input
                    required
                    placeholder="Day Price"
                    value={dayPrice}
                    onChange={(e) => setDayPrice(e.currentTarget.value)}
                  />
                  <div className="underline" />
                </div>
                <div className="input-box">
                  <input
                    required
                    placeholder="Pick Up Adress"
                    value={pickUpAdress}
                    onChange={(e) => setPickUpAdress(e.currentTarget.value)}
                  />
                  <div className="underline" />
                </div>
                <div className="input-box">
                  <input
                    required
                    placeholder="Seats"
                    value={seats}
                    onChange={(e) => setSeats(e.currentTarget.value)}
                  />
                  <div className="underline" />
                </div>
              </div>
              <div className="input-box-wrapper">
                <div className="input-box">
                  <input
                    required
                    placeholder="Enter a city"
                    value={city}
                    onChange={(e) => setCity(e.currentTarget.value)}
                  />
                  <div className="underline" />
                </div>
                <div className="input-box">
                  <input
                    required
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.currentTarget.value)}
                  />
                  <div className="underline" />
                </div>
                <div className="input-box">
                  <input
                    required
                    placeholder="Fuel"
                    value={fuel}
                    onChange={(e) => setFuel(e.currentTarget.value)}
                  />
                  <div className="underline" />
                </div>
                <div className="input-box">
                  <input
                    required
                    type="file"
                    placeholder="Upload an image"
                    onChange={uploadImage}
                  />
                  <div className="underline" />
                </div>
              </div>
            </div>
            <div className="input-box textarea">
              <textarea
                required
                cols="80"
                rows="6"
                placeholder="Write a small description about your car..."
                value={description}
                onChange={(e) => setDescription(e.currentTarget.value)}
              />
            </div>

            <div className="input-box button">
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
                    seats,
                    fuel,
                  )
                }
              >
                Money Maker
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default CreateAds;

export async function getServerSideProps() {
  const baseUrl = process.env.BASE_URL;
  const carResponse = await fetch(`${baseUrl}/api/cars`);
  const car = await carResponse.json();

  // console.log('from gSSP', car);

  return {
    props: {
      car,
      baseUrl,
    },
  };
}
