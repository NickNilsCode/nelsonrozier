import React, { Component } from 'react';
import { Header, Footer, PersonalInjury, BlogBottom } from '../components';
import { BlogContent } from '../styled-components/pages/blog';
import { PageWrapper, ContentWrapper, Content } from '../styled-components/global';
import mapBlog from '../helpers/mapBlog';

class Blog extends Component {
    constructor(props){
      super(props);
      this.state = {
        blogs: []
      }
    }
    componentDidMount(){
      const { query, category, month, year } = this.props.data;
        fetch(`/api/blogs/getTen?category=${category}&query=${query}&month=${month}&year=${year}`)
        .then(res => res.json())
        .then(res => {
          this.setState({
            blogs: res
          })
        })
    }
    render(){
      const { blogs } = this.state;
      return (
          <PageWrapper>
              <Header page="Blog"/>
              <ContentWrapper className="blogPage">
                <Content>
                  <h1>Visalia Personal Injury Law Blog</h1>
                  { mapBlog(blogs) }
                </Content>
                <BlogBottom/>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Blog;
