import React, { Component } from 'react';
import { Header, Footer, PersonalInjury, ContentBottom } from '../components';
import { BlogcattemplateContent } from '../styled-components/pages/blogcattemplate';
import { PageWrapper, ContentWrapper, Content } from '../styled-components/global';
import aboutContent from '../data/aboutPage';
import mapPage from '../helpers/mapPage';

class Blogcattemplate extends Component {
    render(){
      return (
          <PageWrapper>
              <Header page="Blog"/>
              <ContentWrapper>
                <PersonalInjury/>
                <Content>
                  Blogcattemplate
                </Content>
                <ContentBottom className="mobileBottom"/>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Blogcattemplate;
