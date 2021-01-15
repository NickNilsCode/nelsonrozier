import React, { Component } from 'react';
import { Header, Footer, PersonalInjury, ContentBottom } from '../components';
import { PersonalinjuryContent } from '../styled-components/pages/personalinjury';
import { PageWrapper, ContentWrapper, Content } from '../styled-components/global';
import personalInjuryContent from '../data/personalInjuryPage';
import mapPage from '../helpers/mapPage';

class Personalinjury extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <PersonalInjury/>
                <Content>
                  { mapPage(personalInjuryContent) }
                </Content>
                <ContentBottom className="mobileBottom"/>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Personalinjury;
