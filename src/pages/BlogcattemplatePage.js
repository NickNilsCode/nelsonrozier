import React, { Component } from 'react';
import { Header, Footer, PersonalInjury } from '../components';
import { BlogcattemplateContent } from '../styled-components/pages/blogcattemplate';
import { PageWrapper, ContentWrapper, Content } from '../styled-components/global';

class Blogcattemplate extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <PersonalInjury/>
                <Content>
                  Blogcattemplate
                </Content>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Blogcattemplate;
