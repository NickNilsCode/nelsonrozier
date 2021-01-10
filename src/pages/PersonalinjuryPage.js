import React, { Component } from 'react';
import { Header, Footer, PersonalInjury } from '../components';
import { PersonalinjuryContent } from '../styled-components/pages/personalinjury';
import { PageWrapper, ContentWrapper, Content } from '../styled-components/global';

class Personalinjury extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <PersonalInjury/>
                <Content>
                  Personalinjury
                </Content>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Personalinjury;
