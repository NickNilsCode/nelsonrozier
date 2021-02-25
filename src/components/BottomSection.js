import React, { Component } from 'react';
import { BottomSection } from '../styled-components/components/bottomSection';

class BottomSectionComponent extends Component {
  render(){
    return (
      <BottomSection>
        <p>© 2020 <a href="https://lawyers.findlaw.com/profile/view/4135456_1" target="_blank">Nelson & Rozier</a>. All Rights Reserved.</p>
        <p>
          <a href="/disclaimer" target="_blank">Disclaimer</a> | <a href="/sitemap" target="_blank">Site Map</a> | <a href="/privacy" target="_blank">Privacy Policy</a>
        </p>
      </BottomSection>
    );
  }
}

export default BottomSectionComponent;
