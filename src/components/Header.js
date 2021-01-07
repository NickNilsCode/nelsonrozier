import React, { Component } from 'react';
import { Nav } from './';
import { Header, HeaderWrap, HeaderDiv, Header1, Header2, Header3, Header4 } from '../styled-components/components/header';
import { GoldButton, FlexDiv } from '../styled-components/global';

class HeaderComponent extends Component {
  render(){
    return (
      <Header id="header">
        <HeaderWrap>
          <FlexDiv alignItems="flex-end">
            <a href="/"><img src="/images/brand-logo.png"/></a>
            <HeaderDiv>
              <Header1>FREE Consultation.</Header1>
              <Header2>No fee unless we win</Header2>
              <a href="tel:+1-559-713-0159"><Header3>559-713-0159</Header3></a>
            </HeaderDiv>
          </FlexDiv>
          <Nav/>
          <Header4>Personalized Legal Representation by Compassionate,</Header4>
          <Header4>Dedicated and Experienced Attorneys</Header4>
          <a href="/#consultation" className="consultationAnchor">
            <GoldButton className="consultationButton">Get a Free Consultation <i className="fas fa-chevron-circle-right"/></GoldButton>
          </a>
        </HeaderWrap>

      </Header>
    );
  }
}

export default HeaderComponent;
