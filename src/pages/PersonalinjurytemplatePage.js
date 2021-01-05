import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { PersonalinjurytemplateContent } from '../styled-components/pages/personalinjurytemplate';
import { PageWrapper, ContentWrapper } from '../styled-components/global';

class Personalinjurytemplate extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <PersonalinjurytemplateContent>
                  personalinjurytemplate page
                </PersonalinjurytemplateContent>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Personalinjurytemplate;
