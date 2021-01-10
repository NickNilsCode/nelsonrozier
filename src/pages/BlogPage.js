import React, { Component } from 'react';
import { Header, Footer, PersonalInjury } from '../components';
import { BlogContent } from '../styled-components/pages/blog';
import { PageWrapper, ContentWrapper, Content } from '../styled-components/global';

class Blog extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <PersonalInjury/>
                <Content>
                  Blog
                </Content>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Blog;
