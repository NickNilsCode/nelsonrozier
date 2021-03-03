import styled from 'styled-components';
import { red, white } from '../colors';
export const LocationCard = styled.div`
  width: 100%;
  height: 241px;
  max-width: 300px;
  background-color: ${white};
  border-left: 1px solid black;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  padding: 18px 48px;
  box-sizing: border-box;
  p {
    margin: 0;
    position: relative;
    line-height: 1.5;
    i {
      position: absolute;
      left: -24px;
      top: 2px;
    }
  }
  h2 {
    margin: 0;
    margin-bottom: 12px;
  }
  .directionAnchor {

    position: absolute;
    bottom: -28px;
    left: 24px;
    .directionButton {
      color: ${white};
    }
    i {
      font-size: 13px;
    }
  }

  #pinimg {
    display: none;
    position: absolute;
    left: -31px;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 64px;
  }
  @media (min-width: 924px){
    right: initial;
    border-left: ${red} solid 65px;
    max-width: 364px;
    .directionAnchor {
      position: absolute;
      bottom: -52px;
    }
    .directionButton {
      font-size: 22px;
      width: 152px;
      i {
        font-size: 17px;
      }
    }
    #pinimg {
      display: block;
    }
  }
`;

export const LocationCardWrap = styled.div`
  width: 100%;
  position: relative;
  margin: auto;
  height: 100%;
  max-width: 900px;
`;
