import React, { Component } from 'react';
import { Header, Footer, PersonalInjury, ContentBottom } from '../components';
import { DisclaimerContent } from '../styled-components/pages/disclaimer';
import { PageWrapper, ContentWrapper, Content } from '../styled-components/global';
import disclaimerContent from '../data/disclaimerPage';
import mapPage from '../helpers/mapPage';

class Disclaimer extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <PersonalInjury/>
                <Content>
                  { mapPage(disclaimerContent) }
                </Content>
                <ContentBottom className="mobileBottom"/>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Disclaimer;
