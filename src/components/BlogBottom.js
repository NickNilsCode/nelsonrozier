import React, { Component, Fragment } from 'react';
import { BlogBottom } from '../styled-components/components/blogBottom';
import { RedButton, GoldButton, FBButton, Input } from '../styled-components/global';
import categories from '../data/categories';
import blogs from '../data/blogs';
import archives from '../data/archives';

class BlogBottomComponent extends Component {
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
  changeBlogDate = (e) => {
    e.preventDefault();
    window.location.href = e.target.value;
  }
  render(){
    const { className, home, blog } = this.props;
    return (
      <BlogBottom className={className}>
        <form onSubmit={this.searchBlogs}>
          <Input
            placeholder="Search..."
            type="text"
            required
            onChange={this.changeSearch}
          />
          <GoldButton type="submit">Search</GoldButton>
        </form>
        <h2>Categories</h2>
        <ul>
          {
            categories.map((a,i) => {
              return (
                <li key={i}><a href={a.link}>{a.name}</a> ({a.qty})</li>
              )
            })
          }
        </ul>
        <h2>Archives</h2>
        <select onChange={this.changeBlogDate}>
          {
            archives.map((a,i) => {
              return (
                <option key={i} value={a.link}>{a.date}({a.qty})</option>
              )
            })
          }
        </select>
        <h2>Recent Posts</h2>
        <ul>
          {
            blogs.map((a,i) => {
              return (
                <li key={i}><a href={a.link}>{a.title}</a></li>
              )
            })
          }
        </ul>
        <RedButton target="_blank" href="https://reviewplatform.findlaw.com/nelsonrozier">REVIEW US</RedButton>
        <FBButton target="_blank" href="https://www.facebook.com/nelsonrozier/"><i className="fab fa-facebook-f"></i></FBButton>
      </BlogBottom>
    );
  }
}

export default BlogBottomComponent;
