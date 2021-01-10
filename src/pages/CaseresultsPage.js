import React, { Component } from 'react';
import { Header, Footer, PersonalInjury } from '../components';
import { CaseresultsContent } from '../styled-components/pages/caseresults';
import { PageWrapper, ContentWrapper, Content } from '../styled-components/global';

class Caseresults extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <PersonalInjury/>
                <Content>
                  Caseresults
                </Content>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Caseresults;
