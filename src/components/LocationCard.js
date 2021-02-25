import React, { Component } from 'react';
import { LocationCard, LocationCardWrap } from '../styled-components/components/locationCard';
import { GoldButton } from '../styled-components/global';

class LocationCardComponent extends Component {
  render(){
    return (
      <LocationCardWrap>
        <LocationCard>
          {
            // <img id="pinimg" src="/images/bg-contact-info.png"/>
          }
          <h2>Keep In Touch</h2>
          <p>3924 W. Caldwell Ave.</p>
          <p>Suite A</p>
          <p>Visalia, CA 93277</p>
          <p>Phone: 559-713-0159<i className="fas fa-phone-square-alt"></i></p>
          <br/>
          <p>Fax: 559-713-0166<i className="fas fa-fax"></i></p>
          <a href="https://goo.gl/maps/hBRdx7B3zKcNamLG8" className="directionAnchor"><GoldButton className="directionButton">Map & Direction <i className="fas fa-chevron-circle-right"></i></GoldButton></a>
        </LocationCard>
      </LocationCardWrap>
    );
  }
}

export default LocationCardComponent;
