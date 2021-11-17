import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

function Map({ carsdata }) {
  // transform the carsdata object into the longitude and latitude
  // const coordinates = carsdata.map((result) => ({
  //   longitude: result.long,
  //   latitude: result.lat,
  // }));

  // const center = getCenter(coordinates);
  // console.log(center);
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 48.210033,
    longitude: 16.363449,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/fanel/ckv8ixlse9lz714o3xc7i5mdg"
      mapboxApiAccessToken="pk.eyJ1IjoiZmFuZWwiLCJhIjoiY2t2OGlra29mMXNkMjJwbHVyY3k1emZnZyJ9.Y1kWgTuGd7WbYRd8O63VYA"
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    ></ReactMapGL>
  );
}

export default Map;
