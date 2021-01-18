import React, { Component, Fragment } from 'react';
import { ContentBottom, BottomBox, BoxTitle, BoxContent, MeetAttorneys } from '../styled-components/components/contentBottom';
import { RedButton, FBButton } from '../styled-components/global';
import blogData from '../data/blogs';

class ContentBottomComponent extends Component {
  searchBlogs = () => {

  }
  render(){
    const { className, home, blog } = this.props;
    return (
      <ContentBottom className={className}>
        {
          home &&
          <MeetAttorneys>
            <h3>MEET OUR ATTORNEYS</h3>
            <img src="/images/atto-home-new.jpg"/>
            <a className="learnMore" href="/about">LEARN MORE <i className="fas fa-chevron-circle-right"/></a>
            <h3 className="freeConsultation">FREE CONSULTATION</h3>
            <a href="/contact" className="contactToday">
              <RedButton>Contact Us Today <i className="fas fa-chevron-circle-right"/></RedButton>
            </a>
          </MeetAttorneys>
        }
        <BottomBox>
          <BoxTitle>VISIT OUR BLOG</BoxTitle>
          <BoxContent>
            { blogData.map((a,i) => <a key={i} href={a.link}>{a.title}</a>) }
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
        <RedButton target="_blank" href="https://reviewplatform.findlaw.com/nelsonrozier">REVIEW US</RedButton>
        <FBButton target="_blank" href="https://www.facebook.com/nelsonrozier/"><i className="fab fa-facebook-f"></i></FBButton>
      </ContentBottom>
    );
  }
}

export default ContentBottomComponent;
