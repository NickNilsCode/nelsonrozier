import styled from "styled-components";
import { blue, gold, white } from "../colors";
export const Header = styled.header`
  width: 100vw;
  min-height: 100px;
  color: ${white};
  @media (min-width: 900px) {
    background-image: url("/images/Proof-8961.jpg");
    background-position: center;
    background-size: cover;
  }
`;

export const HeaderImage = styled.div`
  display: block;
  width: 100vw;
  min-height: 320px;
  background-image: url("/images/Mobile-8961.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${white};
  @media (min-width: 900px) {
    display: none;
  }
`;

export const DesktopView = styled.div`
  display: none;
  @media (min-width: 900px) {
    display: block;
  }
`;

export const HeaderWrap = styled.div`
  width: 100%;
  max-width: 900px;
  text-align: center;
  position: relative;
  padding: 24px 0;
  margin: auto;
  h2,
  p {
    text-align: center;
  }
  .consultationAnchor {
    bottom: -12px;
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
  @media (min-width: 900px) {
    .consultationAnchor {
      bottom: -32px;
    }
  }
`;

export const HeaderDiv = styled.div`
  margin-top: 24px;
  @media (min-width: 900px) {
    margin-top: 0;
  }
`;

export const Header1 = styled.h2`
  font-size: 23px;
  font-weight: 700;
  color: ${blue};
  margin: 0;
`;
export const Header2 = styled.h2`
  color: ${blue};
  font-weight: 400;
  font-size: 24px;
  margin: 0;
`;
export const Header3 = styled.h2`
  background-color: #333;
  color: ${white};
  padding: 0 32px;
  font-size: 28px;
  font-weight: 700;
  width: max-content;
  margin: auto;
`;
export const Header4 = styled.h2`
  font-family: "Libre Baskerville", Georgia, "Times New Roman", serif;
  color: ${white};
  font-size: 17px;
  font-weight: 100;
  text-shadow: 1px 1px #000000;
  margin: 0 auto;
  padding: 212px 0 24px 0;
  line-height: 2;
  max-width: 600px;
  @media (min-width: 900px) {
    padding: 0;
    font-size: 32px;
    margin: 284px 0 24px 0;
    max-width: 900px;
  }
`;
export const Header5 = styled.h2`
  font-family: "Libre Baskerville", Georgia, "Times New Roman", serif;
  color: ${white};
  font-size: 17px;
  font-weight: 100;
  text-shadow: 1px 1px #000000;

  @media (min-width: 900px) {
    font-size: 32px;
  }
`;
