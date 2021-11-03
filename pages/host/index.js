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

export default function PrivatePage(props) {
  const [carName, setCarName] = useState('');
  const [description, setDescription] = useState('');
  const [dayPrice, setDayPrice] = useState('');
  const [pickUpAdress, setPickUpAdress] = useState('');
  const [city, setCity] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [phone, setPhone] = useState('');
  const [createObjectURL, setCreateObjectURL] = useState('');

  //Save Image in Specific Folder and Save Path to SQL Database ??

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImageUrl(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  async function createAds(userName, userColor) {
    const usersResponse = await fetch(`${props.baseUrl}/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userName, userColor }),
    });
    const user = await usersResponse.json();
    // const newSate = [...userList, user];
    // setUserList(newSate);
  }
  return (
    <div>
      <div css={containerHost}>
        <h2>Form For Adding New Cars</h2>
        <input
          placeholder="Car Name"
          value={carName}
          onChange={(e) => setCarName(e.currentTarget.value)}
        />
        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.currentTarget.value)}
        />
        <input
          placeholder="Price for a day"
          value={dayPrice}
          onChange={(e) => setDayPrice(e.currentTarget.value)}
        />
        <input
          placeholder="Pick up adress"
          value={pickUpAdress}
          onChange={(e) => setPickUpAdress(e.currentTarget.value)}
        />
        <input
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
        />
        <input
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.currentTarget.value)}
        />
        <input
          type="file"
          name="myImage"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.currentTarget.value)}
        />
        <img alt="" src={createObjectURL} />

        <button>Send to server</button>
      </div>
    </div>
  );
}
