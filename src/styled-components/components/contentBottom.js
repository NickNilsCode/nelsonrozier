import styled from 'styled-components';
import { blue, white } from '../colors';
export const ContentBottom = styled.div`
  a {
    width: max-content;
    display: block;
    word-wrap: break-word;
    max-width: 100%;
  }
  &.mobileBottom {
    width: 100%;
    background-color: ${white};
    color: #000;
    text-align: center;
  }
  &.desktopBottom {
    display: none;
    width: 100%;
    background-color: ${white};
    color: #000;
    text-align: center;
  }
  &.homePageBottom {
    width: 222px;
    margin-right: 24px;
  }
  @media (min-width: 900px){
    &.mobileBottom {
      display: none;
    }
    &.desktopBottom {
      display: block;
    }
  }
`;

export const MeetAttorneys = styled.div`
  width: 100%;
  text-align: center;
  img {
    display: block;
    margin: auto;
  }
  .freeConsultation {
    margin: 24px 0 0 0;
  }
  .contactToday {
    margin: auto;
  }
  .contactToday button {
    margin: 0;
  }
  .learnMore, .learnMore i {
    color: ${blue};
    margin: auto;
    transition: color 300ms ease 0ms;
  }
  .learnMore:hover i {
    color: #000;
  }
  #attorneyList {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media (min-width: 900px){
    .contactToday, .contactToday button {
      width: 100%;
    }
  }
`;

export const BottomBox = styled.div`
  border: 1px solid #dfdfdf;
  box-sizing: border-box;
  border-collapse: collapse;
  width: 100%;
  margin-top: 24px;
`;

export const BoxTitle = styled.div`
  background-color: ${blue};
  padding: 3px 0;
  width: calc(100% - 8px);
  color: ${white};
  border: 4px solid ${white};
`;

export const BoxContent = styled.div`
  text-align: left;
  border-top: 1px solid #dfdfdf;
  padding: 8px;
  a {
    text-decoration: underline;
    display: block;
    color: #333;
    font-size: 15px;
    line-height: 27px;
    font-weight: 700;
    text-align: left;
    margin-bottom: 13px;
  }
  .readMore {
    text-decoration: none;
    margin-top: 12px;
  }
  i {
    color: ${blue};
  }
  a:hover i {
    color: #333;
  }
`;
