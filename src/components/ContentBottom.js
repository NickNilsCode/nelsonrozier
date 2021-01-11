import React, { Component } from 'react';
import { ContentBottom, BottomBox, BoxTitle, BoxContent, MeetAttorneys } from '../styled-components/components/contentBottom';
import { RedButton, FBButton } from '../styled-components/global';
import blogData from '../data/blogs';

class ContentBottomComponent extends Component {
  render(){
    return (
      <ContentBottom className={this.props.className}>
        {
          this.props.home &&
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
        <a target="_blank" href="https://reviewplatform.findlaw.com/nelsonrozier">
          <RedButton>REVIEW US</RedButton>
        </a>
        <a target="_blank" href="https://www.facebook.com/nelsonrozier/">
          <FBButton><i className="fab fa-facebook-f"></i></FBButton>
        </a>
      </ContentBottom>
    );
  }
}

export default ContentBottomComponent;
