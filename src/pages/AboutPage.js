import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { AboutContent } from '../styled-components/pages/about';
import { PageWrapper, ContentWrapper } from '../styled-components/global';

class About extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <AboutContent>
                  about page
                </AboutContent>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default About;
