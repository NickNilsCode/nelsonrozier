import React, { Component } from 'react';
import { Header, Footer, PersonalInjury, ContentBottom } from '../components';
import { PageWrapper, ContentWrapper, Content } from '../styled-components/global';
import aboutContent from '../data/aboutPage';
import mapPage from '../helpers/mapPage';

class About extends Component {
    render(){
      return (
          <PageWrapper>
              <Header page="About"/>
              <ContentWrapper>
                <PersonalInjury/>
                <Content>
                  { mapPage(aboutContent) }
                </Content>
                <ContentBottom className="mobileBottom"/>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default About;
