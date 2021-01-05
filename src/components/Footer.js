import React, { Component } from 'react';
import { Footer } from '../styled-components/components/footer';
import { MessageForm, Map, BottomSection } from './';

class FooterComponent extends Component {
  render(){
    return (
      <Footer>
        <MessageForm/>
        <Map/>
        <BottomSection/>
      </Footer>
    );
  }
}

export default FooterComponent;
