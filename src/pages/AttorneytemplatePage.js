import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { AttorneytemplateContent } from '../styled-components/pages/attorneytemplate';
import { PageWrapper, ContentWrapper } from '../styled-components/global';

class Attorneytemplate extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <AttorneytemplateContent>
                  attorneytemplate page
                </AttorneytemplateContent>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Attorneytemplate;
