import React, { Component, Fragment } from 'react';
import { Header, Footer, BlogBottom } from '../components';
import { BlogtemplateContent } from '../styled-components/pages/blogtemplate';
import { PageWrapper, ContentWrapper, Content } from '../styled-components/global';
import blogs from '../data/blogs';
import mapPage from '../helpers/mapPage';

class Blogtemplate extends Component {
    render(){
      const { link } = this.props.data;
      let blog = blogs.find(a => a.link == link);
      return (
          <PageWrapper>
              <Header page="Blog"/>
              <ContentWrapper className="blogPage">
                <Content>
                  {
                    blog &&
                    <Fragment>
                      <h1>{blog.title}</h1>
                      <p><a href="/">On behalf of Nelson & Rozier</a> | {blog.date} | {blog.categories.join(', ')}</p>
                      { mapPage(blog.content) }
                      social media icons
                    </Fragment>
                  }
                </Content>
                <BlogBottom/>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Blogtemplate;
