import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { BlogContent } from '../styled-components/pages/blog';
import { PageWrapper, ContentWrapper } from '../styled-components/global';

class Blog extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <BlogContent>
                  blog page
                </BlogContent>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Blog;
