import React, { Component } from 'react';
import { Header, Footer, PersonalInjury, ContentBottom } from '../components';
import { PageWrapper, ContentWrapper, Content } from '../styled-components/global';
import { AttorneyDiv } from '../styled-components/pages/attorneytemplate'
import attorneyList from '../data/attorneyList';
import mapPage from '../helpers/mapPage';

class Attorneytemplate extends Component {
    render(){
      let { link } = this.props.data;
      let attorney = attorneyList.find(a => a.link == link);

      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <PersonalInjury/>
                <Content>
                  {
                    attorney &&
                    <AttorneyDiv>
                      <h1>{attorney.name}</h1>
                      <p>Associate</p>
                      <img src={attorney.headshot}/>
                      <h2>Location</h2>
                      <p>{attorney.location}</p>
                      <h2>Phone</h2>
                      <p><a href={attorney.phonelink}>{attorney.phone}</a></p>
                      <h2>Fax</h2>
                      <p>{attorney.fax}</p>
                      <h2>Email</h2>
                      <p></p>
                      { mapPage(attorney.content) }
                    </AttorneyDiv>
                  }

                </Content>
                <ContentBottom className="mobileBottom"/>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Attorneytemplate;
