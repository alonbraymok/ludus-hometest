import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDYdT-iuHtBp9JiNWTphGyzyR-GRRK2Dss' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={59.955413}
            lng={30.337844}
            markerImage={require('../assets/ball.png')}
          />
          <Marker
            lat={59.925413}
            lng={30.337844}
            markerImage={require('../assets/gate.png')}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;