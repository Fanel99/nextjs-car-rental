import 'mapbox-gl/dist/mapbox-gl.css';
import { css } from '@emotion/react';
import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';

const buttonWrapper = css`
  border: none;
  font-size: 18px;
  cursor: pointer;
`;
function Map({ carsdata }) {
  const [selectedLocation, setSelectedLocation] = useState({});

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 48.210033,
    longitude: 16.363449,
    zoom: 10,
  });

  //  console.log(selectedLocation);

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/fanel/ckv8ixlse9lz714o3xc7i5mdg"
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_PUBLISHABLE_KEY}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {carsdata.map((result) => (
        <div key={result.long}>
          <Marker latitude={Number(result.lat)} longitude={Number(result.long)}>
            <button
              css={buttonWrapper}
              onClick={(e) => {
                e.preventDefault();
                setSelectedLocation(result);
              }}
              aria-label="push-pin"
              aria-hidden="true"
            >
              📌
            </button>
          </Marker>
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={Number(result.lat)}
              longitude={Number(result.long)}
            >
              {result.carName}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
