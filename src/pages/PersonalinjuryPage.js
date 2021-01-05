import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { PersonalinjuryContent } from '../styled-components/pages/personalinjury';
import { PageWrapper, ContentWrapper } from '../styled-components/global';

class Personalinjury extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <PersonalinjuryContent>
                  personalinjury page
                </PersonalinjuryContent>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Personalinjury;
