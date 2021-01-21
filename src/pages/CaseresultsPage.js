import React, { Component } from 'react';
import { Header, Footer, PersonalInjury, ContentBottom } from '../components';
import { CaseresultsContent } from '../styled-components/pages/caseresults';
import { PageWrapper, ContentWrapper, Content } from '../styled-components/global';
import caseresultsContent from '../data/caseresultsPage';
import mapPage from '../helpers/mapPage';

class Caseresults extends Component {
    render(){
      return (
          <PageWrapper>
              <Header page="Case Results"/>
              <ContentWrapper>
                <PersonalInjury/>
                <Content>
                  { mapPage(caseresultsContent) }
                </Content>
                <ContentBottom className="mobileBottom"/>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Caseresults;
