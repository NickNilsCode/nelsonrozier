import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { BlogcattemplateContent } from '../styled-components/pages/blogcattemplate';
import { PageWrapper, ContentWrapper } from '../styled-components/global';

class Blogcattemplate extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <BlogcattemplateContent>
                  blogcattemplate page
                </BlogcattemplateContent>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Blogcattemplate;
