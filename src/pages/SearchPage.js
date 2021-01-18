import React, { Component } from 'react';
import { Header, Footer, PersonalInjury, ContentBottom } from '../components';
import { SearchContent } from '../styled-components/pages/search';
import { PageWrapper, ContentWrapper, Content, Input, GoldButton } from '../styled-components/global';

class Search extends Component {
    constructor(props){
      super(props);
      this.state = {
        searchInput: ""
      }
    }
    changeSearch = (e) => {
      this.setState({
        searchInput: e.target.value
      })
    }
    searchBlogs = (e) => {
      e.preventDefault();
      window.location.href = "/blog/search/" + this.state.searchInput;
    }
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <PersonalInjury/>
                <Content>
                  <SearchContent>
                  <form onSubmit={this.searchBlogs}>
                    <Input
                      placeholder="Search..."
                      type="text"
                      required
                      onChange={this.changeSearch}
                    />
                    <GoldButton type="submit">Search</GoldButton>
                  </form>
                  </SearchContent>
                </Content>
                <ContentBottom className="mobileBottom"/>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Search;
