import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { ContactContent } from '../styled-components/pages/contact';
import { PageWrapper, ContentWrapper } from '../styled-components/global';

class Contact extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <ContactContent>
                  contact page
                </ContactContent>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Contact;
