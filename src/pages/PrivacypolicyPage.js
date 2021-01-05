import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { PrivacypolicyContent } from '../styled-components/pages/privacypolicy';
import { PageWrapper, ContentWrapper } from '../styled-components/global';

class Privacypolicy extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <PrivacypolicyContent>
                  privacypolicy page
                </PrivacypolicyContent>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Privacypolicy;
