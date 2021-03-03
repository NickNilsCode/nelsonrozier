import React, { Component } from 'react';
import { Nav } from './';
import { Header, HeaderImage, DesktopView, HeaderWrap, HeaderDiv, Header1, Header2, Header3, Header4, Header5 } from '../styled-components/components/header';
import { GoldButton, FlexDiv } from '../styled-components/global';

class HeaderComponent extends Component {
  scroll = (e) => {
    e.preventDefault();
    document.getElementById("consultation").scrollIntoView({block: 'start', behavior: 'smooth', passive: true});
  }
  render(){
    return (
      <Header id="header">
        <HeaderWrap>
          <FlexDiv alignItems="flex-end" style={{
            background: '#ffffff80',
            padding: '12px',
            width: 'calc(100% - 24px)'
          }}>
            <a href="/"><img src="/images/brand-logo.png"/></a>
            <HeaderDiv>
              <Header1>FREE Consultation.</Header1>
              <Header2>No fee unless we win</Header2>
              <a href="tel:+1-559-713-0159"><Header3>559-713-0159</Header3></a>
            </HeaderDiv>
          </FlexDiv>
          <Nav page={this.props.page}/>
          <HeaderImage>
            <Header4>Personalized Legal Representation by Compassionate,<br/>Dedicated and Experienced Attorneys</Header4>
          </HeaderImage>
          <DesktopView>
            <Header4>Personalized Legal Representation by Compassionate,<br/>Dedicated and Experienced Attorneys</Header4>
          </DesktopView>
          <a href="" onClick={this.scroll} className="consultationAnchor">
            <GoldButton className="consultationButton">Get a Free Consultation <i className="fas fa-chevron-circle-right"/></GoldButton>
          </a>
        </HeaderWrap>

      </Header>
    );
  }
}

export default HeaderComponent;
