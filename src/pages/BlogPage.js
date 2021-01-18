import React, { Component } from 'react';
import { Header, Footer, PersonalInjury, BlogBottom } from '../components';
import { BlogContent } from '../styled-components/pages/blog';
import { PageWrapper, ContentWrapper, Content } from '../styled-components/global';
import blogContent from '../data/blogs';
import mapBlog from '../helpers/mapBlog';

class Blog extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper className="blogPage">
                <Content>
                  <h1>Visalia Personal Injury Law Blog</h1>
                  { mapBlog(blogContent) }
                </Content>
                <BlogBottom/>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Blog;
