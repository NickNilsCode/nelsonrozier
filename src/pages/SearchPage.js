import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { SearchContent } from '../styled-components/pages/search';
import { PageWrapper, ContentWrapper } from '../styled-components/global';

class Search extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <SearchContent>
                  search page
                </SearchContent>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Search;
