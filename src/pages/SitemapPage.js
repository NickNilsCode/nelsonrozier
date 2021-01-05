import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { SitemapContent } from '../styled-components/pages/sitemap';
import { PageWrapper, ContentWrapper } from '../styled-components/global';

class Sitemap extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <SitemapContent>
                  sitemap page
                </SitemapContent>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Sitemap;
