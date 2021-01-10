import React, { Component } from 'react';
import { Header, Footer, PersonalInjury } from '../components';
import { PersonalinjurytemplateContent } from '../styled-components/pages/personalinjurytemplate';
import { PageWrapper, ContentWrapper, Content } from '../styled-components/global';

class Personalinjurytemplate extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <PersonalInjury/>
                <Content>
                  Personalinjurytemplate
                </Content>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Personalinjurytemplate;
