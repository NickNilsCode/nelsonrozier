import React, { Component } from 'react';
import { Header, Footer, PersonalInjury, ContentBottom } from '../components';
import { PageWrapper, ContentWrapper, Content } from '../styled-components/global';


class NotFound extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <PersonalInjury/>
                <Content>
                  <h2>404: Not Found</h2>
                  <h3>We're Sorry. The page you were looking for cannot be found.</h3>
                </Content>
                <ContentBottom className="mobileBottom"/>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default NotFound;
