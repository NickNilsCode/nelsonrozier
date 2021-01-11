import React, { Component } from 'react';
import { Header, Footer, PersonalInjury, ContentBottom } from '../components';
import { HomeContent } from '../styled-components/pages/home';
import { PageWrapper, ContentWrapper, Content } from '../styled-components/global';
import homeContent from '../data/homePage';
import mapPage from '../helpers/mapPage';

class Home extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper className="homePage">
                <PersonalInjury home={true}/>
                <HomeContent>
                  <ContentBottom className="desktopBottom homePageBottom" home={true}/>
                  <Content>
                    { mapPage(homeContent) }
                    </Content>
                </HomeContent>
                <ContentBottom className="mobileBottom" home={true}/>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Home;
