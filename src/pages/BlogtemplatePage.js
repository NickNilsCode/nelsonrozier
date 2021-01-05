import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { BlogtemplateContent } from '../styled-components/pages/blogtemplate';
import { PageWrapper, ContentWrapper } from '../styled-components/global';

class Blogtemplate extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <BlogtemplateContent>
                  blogtemplate page
                </BlogtemplateContent>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Blogtemplate;
