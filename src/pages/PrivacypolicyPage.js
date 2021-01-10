import React, { Component } from 'react';
import { Header, Footer, PersonalInjury } from '../components';
import { PrivacypolicyContent } from '../styled-components/pages/privacypolicy';
import { PageWrapper, ContentWrapper, Content } from '../styled-components/global';

class Privacypolicy extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <PersonalInjury/>
                <Content>
                  Privacypolicy
                </Content>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Privacypolicy;
