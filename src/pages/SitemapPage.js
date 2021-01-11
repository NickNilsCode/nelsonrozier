import React, { Component } from 'react';
import { Header, Footer, PersonalInjury, ContentBottom } from '../components';
import { SitemapContent } from '../styled-components/pages/sitemap';
import { PageWrapper, ContentWrapper, Content } from '../styled-components/global';
import sitemapContent from '../data/sitemapPage';
import mapPage from '../helpers/mapPage';

class Sitemap extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <PersonalInjury/>
                <Content>
                  { mapPage(sitemapContent) }
                </Content>
                <ContentBottom className="mobileBottom"/>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Sitemap;
