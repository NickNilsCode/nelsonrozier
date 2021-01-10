import React, { Component } from 'react';
import { Header, Footer, PersonalInjury } from '../components';
import { HomeContent } from '../styled-components/pages/home';
import { PageWrapper, ContentWrapper, Content } from '../styled-components/global';

class Home extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper className="homePage">
                <PersonalInjury home={true}/>
                <Content>
                  {
                    //home
                  }
                </Content>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Home;
