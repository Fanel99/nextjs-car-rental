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

function CreateAds() {
  const [carName, setCarName] = useState('');
  const [description, setDescription] = useState('');
  const [dayPrice, setDayPrice] = useState('');
  const [pickUpAdress, setPickUpAdress] = useState('');
  const [city, setCity] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <div>
      <div css={containerHost}>
        <h2>Form for adding new car</h2>
        <span>
          Car
          <input
            placeholder="Car Name"
            value={carName}
            onChange={(e) => setCarName(e.currentTarget.value)}
          />
        </span>
        <span>
          Car
          <input
            placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.currentTarget.value)}
          />
        </span>
        <span>
          Car
          <input
            placeholder="Day Price"
            value={dayPrice}
            onChange={(e) => setDayPrice(e.currentTarget.value)}
          />
        </span>
        <span>
          Car
          <input
            placeholder="Pick Up Adress"
            value={pickUpAdress}
            onChange={(e) => setPickUpAdress(e.currentTarget.value)}
          />
        </span>
        <span>
          Car
          <input
            placeholder="Enter a city"
            value={city}
            onChange={(e) => setCity(e.currentTarget.value)}
          />
        </span>
        <span>
          Car
          <input
            type="file"
            placeholder="Upload an image"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.currentTarget.value)}
          />
        </span>
        <span>
          Phone
          <input
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.currentTarget.value)}
          />
        </span>
        <span>
          Car
          <input
            type="file"
            placeholder="Upload an image"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.currentTarget.value)}
          />
        </span>
      </div>
    </div>
  );
}

export default CreateAds;
