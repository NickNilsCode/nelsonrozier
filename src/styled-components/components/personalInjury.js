import styled from 'styled-components';

export const PersonalInjury = styled.div`
  width: 100%;
  margin: auto;
  @media(min-width: 900px){
    margin: 0 0 0 85px;
    width: 276px;
    &.homePI {
      width: 100%;
      display: flex;
      margin: 0 0 64px 0;
      h2 {
        text-align: center;
      }
    }
  }
`;
export const DesktopPI = styled.div`
  display: none;
  width: 100%;
  a {
    text-align: left;
  }
  h2 {
    font-size: 40px;
    font-weight: 700;
    padding: 0 0 10px 0;
    margin: 0;
    text-align: left;
    border-bottom: 3px solid #000;
  }
  .desktopPI {
    border-bottom: 1px solid #c5c5c7;
  }
  @media(min-width: 900px){
    display: block;
  }
`;
export const MobilePI = styled.div`
  width: 100%;
  display: block;
  position: relative;
  @media(min-width: 900px){
    display: none;
  }
  .mobilePI {
    text-transform: capitalize;
    padding: 10px 37.5px;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,.03);
    width: 100%;
    box-sizing: border-box;
    text-align: left;
    background-image: none;
  }

`;

export const PIButton = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 15px;
  width: 216px;
  word-wrap: break-word;
  color: #383b40;
  padding: 3px 13px;
  border-right: ${props => props.index != props.size - 1 ? "1px solid #fff" : "none"};
  background: url("${props => props.dimg}") 6px center no-repeat;
  padding: 10px 7px 10px 53px;

  &:hover {
    &.mobilePI {
      background-color: rgba(0,0,0,.03);
      background-image: none;
    }
    &.desktopPI {
      color: #fff;
      background: url("${props => props.himg}") 6px center no-repeat #7c3230;
    }

  }
`;
export const PIBar = styled.div`
  padding: 24px;
  margin: 12px 0;
  text-align: center;
  font-weight: 700;
  font-size: 16px;
  color: #383b40;
  i {
    color: #0099c4
  }
  &:hover {
    cursor: pointer;
    outline: 2px dotted #000;
  }
  &:selected {
    outline: 2px dotted #000;
  }
`;
export const PIPopup = styled.div`
  width: calc(100% - 24px);
  background-color: #fff;
  box-shadow: 0 2px 3px rgba(0,0,0,.1);
  display: none;
  margin: auto;
  padding: 24px auto;
  text-align: center;
  font-weight: 700;
  font-size: 16px;
  color: #fff;
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
export const FlexWrap = styled.div`
  width: 100%;
  margin-top: 6px;
  &.homeWrap {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    height: 278px;
    justify-content: space-between;
    align-content: space-between;
  }
`;
