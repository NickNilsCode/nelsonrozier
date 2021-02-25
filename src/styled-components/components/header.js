import styled from 'styled-components';
import { red, gold } from '../colors';
export const Header = styled.header`
  width: 100vw;
  min-height: 100px;
  background-image: url("/images/Proof-8961.jpg");
  background-position: center;
  background-size: cover;
  color: #fff;
`;

export const HeaderWrap = styled.div`
  width: 100%;
  max-width: 900px;
  text-align: center;
  position: relative;
  padding: 24px 0;
  margin: auto;
  h2, p {
    text-align: center;
  }
  .consultationAnchor {
    bottom: -32px;
    left: 0;
    right: 0;
    margin: auto;
    position: absolute;
  }
  a {
    width: 100%;
    max-width: 480px;
    z-index: 10;
  }
  img {
    width: calc(100% - 24px);
    max-width: 480px;
  }
`;

export const HeaderDiv = styled.div`
  margin-top: 24px;
  @media(min-width: 900px){
    margin-top: 0;
  }
`;

export const Header1 = styled.h2`
  font-size: 23px;
  font-weight: 700;
  color: ${red};
  margin: 0;
`;
export const Header2 = styled.h2`
  color: ${red};
  font-weight: 400;
  font-size: 24px;
  margin: 0;
`;
export const Header3 = styled.h2`
  background-color: #333;
  color: #fff;
  padding: 0 32px;
  font-size: 28px;
  font-weight: 700;
  width: max-content;
  margin: auto;
`;
export const Header4 = styled.h2`
  font-family: 'Libre Baskerville',Georgia,"Times New Roman",serif;
  color: #fff;
  font-size: 17px;
  font-weight: 100;
  text-shadow: 1px 1px #000000;

  @media(min-width: 900px){
    font-size: 32px;
    margin: 120px 0;
  }
`;
