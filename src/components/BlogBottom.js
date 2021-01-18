import React, { Component, Fragment } from 'react';
import { BlogBottom } from '../styled-components/components/blogBottom';
import { RedButton, GoldButton, FBButton, Input } from '../styled-components/global';
import categories from '../data/categories';

class BlogBottomComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchInput: ""
    }
  }
  searchBlogs = () => {

  }
  render(){
    const { className, home, blog } = this.props;
    return (
      <BlogBottom className={className}>
        <form onSubmit={this.searchBlogs()}>
          <Input
            placeholder="Search..."
            type="text"
            required
          />
          <GoldButton type="submit">Search</GoldButton>
        </form>
        <h2>Categories</h2>
        <ul>
          {
            categories.map((a,i) => {
              return (
                <li key={i}><a href={a.link}>{a.name}</a>({a.qty})</li>
              )
            })
          }
        </ul>
        <h2>Archives</h2>

        <a target="_blank" href="https://reviewplatform.findlaw.com/nelsonrozier">
          <RedButton>REVIEW US</RedButton>
        </a>
        <a target="_blank" href="https://www.facebook.com/nelsonrozier/">
          <FBButton><i className="fab fa-facebook-f"></i></FBButton>
        </a>
      </BlogBottom>
    );
  }
}

export default BlogBottomComponent;
