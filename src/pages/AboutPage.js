import React, { Component } from 'react';
import { Header, Footer, PersonalInjury, ContentBottom } from '../components';
import { PageWrapper, ContentWrapper, Content } from '../styled-components/global';
import aboutContent from '../data/about';

class About extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <PersonalInjury/>
                <Content>
                  {
                    aboutContent.map((a,i) => {
                      let A = a.type;
                      return <A key={i} dangerouslySetInnerHTML={{__html: a.content}}/>
                    })
                  }
                </Content>
                <ContentBottom className="mobileBottom"/>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default About;
