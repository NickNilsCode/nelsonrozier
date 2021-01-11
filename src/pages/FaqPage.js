import React, { Component } from 'react';
import { Header, Footer, PersonalInjury, ContentBottom } from '../components';
import { FaqContent } from '../styled-components/pages/faq';
import { PageWrapper, ContentWrapper, Content } from '../styled-components/global';
import faqContent from '../data/faqPage';
import mapPage from '../helpers/mapPage';

class Faq extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <PersonalInjury/>
                <Content>
                  { mapPage(faqContent) }
                </Content>
                <ContentBottom className="mobileBottom"/>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Faq;
