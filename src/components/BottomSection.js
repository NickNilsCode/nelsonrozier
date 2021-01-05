import React, { Component } from 'react';
import { BottomSection } from '../styled-components/components/bottomSection';

class BottomSectionComponent extends Component {
  render(){
    return (
      <BottomSection>
        <p>© 2020 <a href="https://lawyers.findlaw.com/profile/view/4135456_1" target="_blank">Nelson & Rozier</a>. All Rights Reserved.</p>
        <p><a href="/disclaimer" target="_blank">Disclaimer</a> | <a href="/site-map" target="_blank">Site Map</a> | <a href="/privacy" target="_blank">Privacy Policy</a> | <a href="https://www.lawyermarketing.com/" target="_blank">Business Development Solutions</a> by <a href="https://www.findlaw.com/" target="_blank">FindLaw</a>, part of Thomson Reuters</p>
      </BottomSection>
    );
  }
}

export default BottomSectionComponent;
