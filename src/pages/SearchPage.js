import React, { Component } from 'react';
import { Header, Footer, PersonalInjury } from '../components';
import { SearchContent } from '../styled-components/pages/search';
import { PageWrapper, ContentWrapper, Content } from '../styled-components/global';

class Search extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <PersonalInjury/>
                <Content>
                  Search
                </Content>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Search;
