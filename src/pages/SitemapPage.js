import React, { Component } from 'react';
import { Header, Footer, PersonalInjury } from '../components';
import { SitemapContent } from '../styled-components/pages/sitemap';
import { PageWrapper, ContentWrapper, Content } from '../styled-components/global';

class Sitemap extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <PersonalInjury/>
                <Content>
                  Sitemap
                </Content>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Sitemap;
