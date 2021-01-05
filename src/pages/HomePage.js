import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { HomeContent } from '../styled-components/pages/home';
import { PageWrapper, ContentWrapper } from '../styled-components/global';

class Home extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <HomeContent>
                  home page
                </HomeContent>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Home;
