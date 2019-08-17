import React, { useState , useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import { getCurrentLocation } from '../utils/utils'



const SimpleMap = () => {
    
    const defualtLocation = {
      latitude: '',
      longitude: ''
    }

    const [ currentLocation, setCurrentLocation ] = useState(defualtLocation)

    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    
    function success(pos) {
      let crd = pos.coords;
    
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);

      let currentLocation = {
        latitude: crd.latitude,
        longitude: crd.longitude
      }

      setCurrentLocation(currentLocation)
    }
    
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    
    navigator.geolocation.getCurrentPosition(success, error, options);



    return (
        

      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDYdT-iuHtBp9JiNWTphGyzyR-GRRK2Dss' }}
          defaultCenter={{
                lat: 31.986988,
                lng: 34.763019899999996
                 }}
          defaultZoom={11}
        >
          <Marker
            lat={currentLocation.latitude}
            lng={currentLocation.longitude}
            markerImage={require('../assets/ball.png')}
          />
          <Marker
              lat={currentLocation.latitude}
              lng={currentLocation.longitude}
            markerImage={require('../assets/gate.png')}
          />
        </GoogleMapReact>
      </div>
    );
  
}
 
export default SimpleMap;