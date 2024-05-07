import React, { Component, Fragment } from "react";
import { Header, Footer, BlogBottom, BlogSocial } from "../components";
import { BlogtemplateContent } from "../styled-components/pages/blogtemplate";
import {
  PageWrapper,
  ContentWrapper,
  Content,
} from "../styled-components/global";
import mapPage from "../helpers/mapPage";
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

class Blogtemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: {},
      year: "",
      day: "",
      month: "",
    };
  }
  componentDidMount() {
    const { title } = this.props.data;
    fetch("/api/blogs/getAll")
      .then((res) => res.json())
      .then((res) => {
        let blog = res.find((a) => {
          return (
            title ==
            a.title
              .toLowerCase()
              .replace(/[^\w\s]/gi, "")
              .split(" ")
              .join("-")
          );
        });
        if (blog) {
          let date = new Date(blog.date);
          let year = date.getFullYear();
          let day = date.getDate();
          let month = months[date.getMonth()];
          this.setState({
            blog,
            year,
            day,
            month,
          });
        }
      });
  }
  render() {
    const { blog, year, day, month } = this.state;
    return (
      <PageWrapper>
        <Header page="Blog" />
        <ContentWrapper className="blogPage">
          <Content className="blogContent">
            {blog && blog.date && (
              <Fragment>
                <h1>{blog.title}</h1>
                <p>
                  <a href="/">On behalf of Nelson, Rozier, & Christenson</a> |{" "}
                  {month} {day}, {year} | {blog.categories.join(", ")}
                </p>
                {mapPage(blog.content)}
                <BlogSocial share={blog.share} />
              </Fragment>
            )}
          </Content>
          <BlogBottom />
        </ContentWrapper>
        <Footer />
      </PageWrapper>
    );
  }
}

export default Blogtemplate;
