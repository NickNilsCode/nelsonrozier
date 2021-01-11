import React, { Component } from 'react';
import { Header, Footer, PersonalInjury, ContentBottom } from '../components';
import { BlogtemplateContent } from '../styled-components/pages/blogtemplate';
import { PageWrapper, ContentWrapper, Content } from '../styled-components/global';
import aboutContent from '../data/aboutPage';
import mapPage from '../helpers/mapPage';

class Blogtemplate extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <PersonalInjury/>
                <Content>
                  Blogtemplate
                </Content>
                <ContentBottom className="mobileBottom"/>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Blogtemplate;
