import React, { Component, Fragment } from 'react';
import { ContentBottom, BottomBox, BoxTitle, BoxContent, MeetAttorneys } from '../styled-components/components/contentBottom';
import { BlueButton, FBButton } from '../styled-components/global';
import attorneyData from '../data/attorneyList';

class ContentBottomComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      blogs: []
    }
  }
  componentDidMount(){
    fetch('/api/blogs/getThree')
    .then(res => res.json())
    .then(res => {
      this.setState({
        blogs: res
      })
    })
  }
  render(){
    const { className, home, blog } = this.props;
    const { blogs } = this.state;
    return (
      <ContentBottom className={className}>
        {
          home &&
          <MeetAttorneys>
            <h3>MEET OUR ATTORNEYS</h3>
            <div id="attorneyList">
            {
              attorneyData.map((a,i) => {
                return (
                  <a className="learnMore" href={a.link} key={i}>
                    <img src={a.headshot}/>
                    <div style={{marginBottom: "12px"}}>{a.name} <i className="fas fa-chevron-circle-right"/></div>
                  </a>
                )
              })
            }
          </div>
            <h3 className="freeConsultation">FREE CONSULTATION</h3>
            <a href="/contact" className="contactToday">
              <BlueButton>Contact Us Today <i className="fas fa-chevron-circle-right"/></BlueButton>
            </a>
          </MeetAttorneys>
        }
        <BottomBox>
          <BoxTitle>VISIT OUR BLOG</BoxTitle>
          <BoxContent>
            {
              blogs.map((a,i) => {
                let date = new Date(a.date);
                let year = date.getFullYear();
                let month = date.getMonth() + 1;
                month = month > 9 ? month : "0" + month;
                let titledashed = a.title.toLowerCase().replace(/[^\w\s]/gi, '').split(" ").join('-');
                return (
                  <a key={i} href={`/blog/${year}/${month}/${titledashed}`}>{a.title}</a>
                )
              })
            }
            <a href="/blog" className="readMore">
              <div>Read More <i className="fas fa-chevron-circle-right"/></div>
            </a>
          </BoxContent>
        </BottomBox>
        <BottomBox>
          <BoxTitle>FAQ</BoxTitle>
          <BoxContent>
            <p>Find answers to some of the most often-asked questions regarding personal injury.</p>
            <a href="/faq" className="readMore">
              <div>Read More <i className="fas fa-chevron-circle-right"/></div>
            </a>
          </BoxContent>
        </BottomBox>
        <BlueButton target="_blank" href="https://reviewplatform.findlaw.com/nelsonrozier">REVIEW US</BlueButton>
        <FBButton target="_blank" href="https://www.facebook.com/nelsonrozier/"><i className="fab fa-facebook-f"></i></FBButton>
      </ContentBottom>
    );
  }
}

export default ContentBottomComponent;
