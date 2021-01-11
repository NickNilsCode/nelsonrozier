import React, { Component } from 'react';
import { Header, Footer, PersonalInjury, ContentBottom } from '../components';
import { ContactContent } from '../styled-components/pages/contact';
import { PageWrapper, ContentWrapper, Content } from '../styled-components/global';
import aboutContent from '../data/aboutPage';
import mapPage from '../helpers/mapPage';

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
                <ContentBottom className="mobileBottom"/>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Contact;
