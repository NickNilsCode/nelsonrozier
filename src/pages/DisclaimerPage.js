import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { DisclaimerContent } from '../styled-components/pages/disclaimer';
import { PageWrapper, ContentWrapper } from '../styled-components/global';

class Disclaimer extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <DisclaimerContent>
                  disclaimer page
                </DisclaimerContent>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Disclaimer;
