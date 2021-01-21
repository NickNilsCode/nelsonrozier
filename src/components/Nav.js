import React, { Component, Fragment } from 'react';
import { Nav, DesktopNav, MobileNav, NavButton, MenuBar, MenuPopup } from '../styled-components/components/nav';
import navData from '../data/nav';

class NavComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      menuOpen: false
    }
  }
  menuManager = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }
  fillNav = (mobile) => {
    return navData.map((a,i) => {
      return (
        <Fragment key={i}>
          <a href={a.link}>
            <NavButton
              selected={this.props.page == a.name ? true : false}
              className={mobile ? "mobileNav" : ""}
              index={i}
              size={navData.length}
            >{a.name}</NavButton>
          </a>
        </Fragment>
      )
    })
  }
  render(){
    const { menuOpen } = this.state;
    return (
      <Nav>
        <DesktopNav>
          { this.fillNav(false) }
        </DesktopNav>
        <MobileNav>
          <MenuBar onClick={this.menuManager}><i className="fas fa-bars"></i> MAIN NAVIGATION</MenuBar>
          <MenuPopup className={menuOpen ? "menuOpen" : ""}>
            {
              menuOpen &&
              this.fillNav(true)
            }
            <NavButton
              className="mobileNav"
              size={navData.length}
              onClick={this.menuManager}
            >X Close</NavButton>
          </MenuPopup>
        </MobileNav>
      </Nav>
    );
  }
}

export default NavComponent;
