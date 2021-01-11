import React, { Component } from 'react';
import { Header, Footer, PersonalInjury } from '../components';
import { PageWrapper, ContentWrapper, Content } from '../styled-components/global';

class Attorneytemplate extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <PersonalInjury/>
                <Content>
                  Attorneytemplate
                </Content>
                <ContentBottom/>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Attorneytemplate;
