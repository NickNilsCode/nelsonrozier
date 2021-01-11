import React, { Component } from 'react';
import { Header, Footer, PersonalInjury, ContentBottom } from '../components';
import { BlogContent } from '../styled-components/pages/blog';
import { PageWrapper, ContentWrapper, Content } from '../styled-components/global';
import aboutContent from '../data/aboutPage';
import mapPage from '../helpers/mapPage';

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
                <ContentBottom className="mobileBottom"/>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Blog;
