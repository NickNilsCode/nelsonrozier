import React, { Component } from 'react';
import { Header, Footer, PersonalInjury } from '../components';
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
                      if(A != "html"){
                        return (
                          <A key={i}>{a.content}</A>
                        )
                      } else {
                        return (
                          <div key={i}>{a.content}</div>
                        )
                      }

                    })
                  }
                </Content>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default About;
