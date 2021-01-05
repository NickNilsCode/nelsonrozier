import React, { Component } from 'react';
import { Map } from '../styled-components/components/map';
import { LocationCard } from './';

class MapComponent extends Component {
  render(){
    return (
      <Map id="map">
        <LocationCard/>
      </Map>
    );
  }
}

export default MapComponent;
