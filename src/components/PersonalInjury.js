import React, { Component, Fragment } from 'react';
import { ContentBottom } from './'
import { PersonalInjury, DesktopPI, MobilePI, PIButton, PIBar, PIPopup, FlexWrap } from '../styled-components/components/personalInjury';
import { GoldButton } from '../styled-components/global';
import piData from '../data/personalinjurylist';

class PersonalInjuryComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      menuOpen: false
    }
  }
  menuManager = () => this.setState({ menuOpen: !this.state.menuOpen })

  fillPI = (mobile) => {
    return piData.map((a,i) => {
      let className = "";
      if(mobile){
        className = "mobilePI"
      } else {
        if(this.props.selected == a.name){
          className = "desktopPI selectedPI"
        } else {
          className = "desktopPI"
        }
      }
      return (
        <Fragment key={i}>
          <a href={a.link}>
            <PIButton
              className={className}
              index={i} size={piData.length}
              dimg={a.icon} himg={a.hicon}
            >{a.name}</PIButton>
          </a>
        </Fragment>
      )
    })
  }
  render(){
    const { menuOpen } = this.state;
    const { home } = this.props;
    return (
      <PersonalInjury className={home ? "homePI" : ""}>
        <DesktopPI className={home ? "homeDPI" : ""}>
          <h2>Personal Injury</h2>
          <FlexWrap className={home ? "homeWrap" : ""}>
            { this.fillPI(false) }
          </FlexWrap >
        </DesktopPI>
        <MobilePI>
          <PIBar onClick={this.menuManager}><i className="fas fa-bars"></i> PERSONAL INJURY</PIBar>
          <PIPopup className={menuOpen ? "menuOpen" : ""}>
            { menuOpen && this.fillPI(true) }
            <PIButton
              className="mobilePI"
              size={piData.length}
              onClick={this.menuManager}
            >X Close</PIButton>
          </PIPopup>
        </MobilePI>
        { !home && <ContentBottom className="desktopBottom"/> }
      </PersonalInjury>
    );
  }
}

export default PersonalInjuryComponent;
