import React, { Component } from 'react';
import { Header, Footer, PersonalInjury, ContentBottom } from '../components';
import { PersonalinjurytemplateContent } from '../styled-components/pages/personalinjurytemplate';
import { PageWrapper, ContentWrapper, Content } from '../styled-components/global';
import piContent from '../data/personalinjurylist';
import mapPage from '../helpers/mapPage';

class Personalinjurytemplate extends Component {
    render(){
      let selected = piContent.find((a, i) => a.link == "/personal-injury/" + this.props.data.page)
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <PersonalInjury selected={selected.name}/>
                <Content>
                  { mapPage(selected.content) }
                </Content>
                <ContentBottom className="mobileBottom"/>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Personalinjurytemplate;
