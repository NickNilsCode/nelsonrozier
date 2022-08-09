import styled from 'styled-components';
import { blue, white } from '../colors';
export const MessageFormWrap = styled.div`
  width: 100vw;
  min-height: 387px;
  background-image: url("/images/bg-container-short-form-wrap.jpg");
  background-position: center;
  background-size: cover;
  color: ${white};
`;
export const MessageForm = styled.div`
  width: calc(100% - 48px);
  padding: 24px;
  max-width: 900px;
  margin: auto;
  h2 {
    width: 100%;
    font-size: 29px;
    text-align: center;
  }
  .buttonDisabled {
    filter: grayscale(100%);
  }
  @media(min-width: 900px){
    h2 {
      font-size: 40px;
    }
  }
`;
export const MessageLinks = styled.div`
  a {
    color: ${white};
    text-decoration: underline;
  }
`;
export const ContactLinks = styled.div`
  text-align: left;
  a {
    color: ${blue};
    text-decoration: underline;
  }
`;
export const MessageDisclaimer = styled.div`
  display: flex;
  align-items: center;
  margin: 6px 0;
  input {
    height: 20px;
    width: 20px;
    margin: 0 6px 0 0;
  }
`;
export const ContactDisclaimer = styled.div`
  display: flex;
  align-items: center;
  margin: 6px 0;
  input {
    height: 20px;
    width: 20px;
    margin: 0 6px 0 0;
    background: #f7f7f7;
  }
`;
