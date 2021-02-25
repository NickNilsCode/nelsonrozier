import React, { Component } from 'react';
import { Header, Footer, PersonalInjury, ContentBottom } from '../components';
import { PrivacypolicyContent } from '../styled-components/pages/privacypolicy';
import { PageWrapper, ContentWrapper, Content } from '../styled-components/global';
import privacyContent from '../data/privacyPage';
import mapPage from '../helpers/mapPage';

class Privacypolicy extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <PersonalInjury/>
                <Content>
                  { mapPage(privacyContent) }
                </Content>
                <ContentBottom className="mobileBottom"/>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Privacypolicy;
