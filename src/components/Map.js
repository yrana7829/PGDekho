import React, { useMemo } from 'react';
import { useLoadScript, GoogleMap } from '@react-google-maps/api';

const MapComponent = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.RAIzaSyBjAKjrPkdPVH2UnhNPvymJLWmnSTe7mxg,
  });

  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

  return (
    <div>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName='map-container'
          center={center}
          zoom={10}
        />
      )}
    </div>
  );
};

export default MapComponent;
