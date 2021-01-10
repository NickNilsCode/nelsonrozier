import React, { Component } from 'react';
import { Header, Footer, PersonalInjury } from '../components';
import { FaqContent } from '../styled-components/pages/faq';
import { PageWrapper, ContentWrapper, Content } from '../styled-components/global';

class Faq extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <PersonalInjury/>
                <Content>
                  faq
                </Content>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Faq;
