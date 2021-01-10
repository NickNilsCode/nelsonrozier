import React, { Component } from 'react';
import { Header, Footer, PersonalInjury } from '../components';
import { DisclaimerContent } from '../styled-components/pages/disclaimer';
import { PageWrapper, ContentWrapper, Content } from '../styled-components/global';

class Disclaimer extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <PersonalInjury/>
                <Content>
                  Disclaimer
                </Content>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Disclaimer;
