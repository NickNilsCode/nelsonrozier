import React, { Component, Fragment } from 'react';
import { BlogBottom } from '../styled-components/components/blogBottom';
import { BlueButton, GoldButton, FBButton, Input } from '../styled-components/global';
// import archives from '../data/archives';

class BlogBottomComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchInput: "",
      blogs: [],
      categories: [],
      archives: []
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
    window.location.href = '/blog/'+ e.target.value;
  }
  componentDidMount(){
    fetch('/api/blogs/getThree')
    .then(res => res.json())
    .then(res => {
      this.setState({
        blogs: res
      })
    })
    fetch('/api/blogs/getCategories')
    .then(res => res.json())
    .then(res => {
      this.setState({
        categories: res
      })
    })
    fetch('/api/blogs/getMonths')
    .then(res => res.json())
    .then(res => {
      this.setState({
        archives: res
      })
    })
  }
  render(){
    const { className, home, blog } = this.props;
    const { blogs, categories, archives } = this.state;
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
                <li key={i}><a href={`/blog/category/${a.name.toLowerCase().split(" ").join("-")}`}>{a.name}</a> ({a.qty})</li>
              )
            })
          }
        </ul>
        <h2>Archives</h2>
        <select onChange={this.changeBlogDate}>
          {
            archives.map((a,i) => {
              return (
                <option key={i} value={a.src}>{a.title} ({a.qty})</option>
              )
            })
          }
        </select>
        <h2>Recent Posts</h2>
        <ul>
          {
            blogs.map((a,i) => {
              let date = new Date(a.date);
              let year = date.getFullYear();
              let month = date.getMonth() + 1;
              month = month > 9 ? month : "0" + month;
              let titledashed = a.title.toLowerCase().replace(/[^\w\s]/gi, '').split(" ").join('-')
              return (
                <li key={i}><a href={`/blog/${year}/${month}/${titledashed}`}>{a.title}</a></li>
              )
            })
          }
        </ul>
        <BlueButton target="_blank" href="https://reviewplatform.findlaw.com/nelsonrozier">REVIEW US</BlueButton>
        <FBButton target="_blank" href="https://www.facebook.com/nelsonrozier/"><i className="fab fa-facebook-f"></i></FBButton>

</BlogBottom>
    );
  }
}

export default BlogBottomComponent;
