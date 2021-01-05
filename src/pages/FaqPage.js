import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { FaqContent } from '../styled-components/pages/faq';
import { PageWrapper, ContentWrapper } from '../styled-components/global';

class Faq extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <FaqContent>
                  faq page
                </FaqContent>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Faq;
