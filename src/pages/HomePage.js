import React, { Component } from 'react';
import { Header, Footer, PersonalInjury, ContentBottom } from '../components';
import { HomeContent } from '../styled-components/pages/home';
import { PageWrapper, ContentWrapper, Content } from '../styled-components/global';
import homeContent from '../data/home';

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
                    {
                      homeContent.map((a,i) => {
                        let A = a.type;
                        return <A key={i} dangerouslySetInnerHTML={{__html: a.content}}/>
                      })
                    }
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
