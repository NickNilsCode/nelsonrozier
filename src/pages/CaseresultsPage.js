import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { CaseresultsContent } from '../styled-components/pages/caseresults';
import { PageWrapper, ContentWrapper } from '../styled-components/global';

class Caseresults extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <CaseresultsContent>
                  caseresults page
                </CaseresultsContent>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Caseresults;
