import styled from 'styled-components';
import { blue, whiteish, white } from '../colors'

export const Nav = styled.div`
  width: 100%;

`;
export const DesktopNav = styled.div`
  display: none;
  width: max-content;
  margin: 32px auto;
  align-items: center;
  justify-content: center;
  @media(min-width: 900px){
    display: flex;
  }
`;
export const MobileNav = styled.div`
  width: 100%;
  display: block;
  position: relative;
  @media(min-width: 900px){
    display: none;
  }
`;

export const NavButton = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 18px;
  width: max-content;
  color: ${white};
  padding: 3px 13px;
  border-right: ${props => props.index != props.size - 1 ? `1px solid ${white}` : "none"};
  transition: background-color 0.4s;
  background-color: ${props => props.selected ? blue : "transparent"};
  &.mobileNav {
    text-transform: capitalize;
    padding: 10px 37.5px;
    border-right: none;
    width: 100%;
    box-sizing: border-box;
    text-align: left;
    background-color: ${props => props.selected ? whiteish : blue};
  }
  &:hover {
    background-color: ${whiteish};
    &.mobileNav {
      background-color: ${whiteish};
    }
  }
`;
export const MenuBar = styled.div`
  background-color: ${blue};
  padding: 24px;
  margin: 12px 0;
  text-align: center;
  font-weight: 700;
  font-size: 16px;
  color: ${white};
  &:hover {
    cursor: pointer;
  }
`;
export const MenuPopup = styled.div`
  width: calc(100% - 24px);
  background-color: ${blue};
  display: none;
  margin: auto;
  padding: 24px auto;
  text-align: center;
  font-weight: 700;
  font-size: 16px;
  color: ${white};
  position: absolute;
  top: 68px;
  left: 12px;
  z-index: 12;
  &.menuOpen {
    display: block;
  }
  &:hover {
    cursor: pointer;
  }
`;
