import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import SimpleMap from './components/GoogleMap';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          {/* <Map google={this.props.google} zoom={14}>
              <Marker name={'Current location'} />
          </Map> */}
          <div>
            <SimpleMap/>
          </div>
      </div>
    );
  }
}

export default App;

// export default GoogleApiWrapper({
//   apiKey: ('AIzaSyDYdT-iuHtBp9JiNWTphGyzyR-GRRK2Dss')
// })(App)