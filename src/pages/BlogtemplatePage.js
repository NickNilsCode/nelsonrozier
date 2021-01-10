import React, { Component } from 'react';
import { Header, Footer, PersonalInjury } from '../components';
import { BlogtemplateContent } from '../styled-components/pages/blogtemplate';
import { PageWrapper, ContentWrapper, Content } from '../styled-components/global';

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
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Blogtemplate;
