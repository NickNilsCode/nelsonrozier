import React, { Component } from 'react';
import { Header, Footer, PersonalInjury } from '../components';
import { ContactContent } from '../styled-components/pages/contact';
import { PageWrapper, ContentWrapper, Content } from '../styled-components/global';

class Contact extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <PersonalInjury/>
                <Content>
                  Contact
                </Content>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Contact;
