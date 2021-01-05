import styled from 'styled-components';
export const MessageFormWrap = styled.div`
  width: 100vw;
  min-height: 387px;
  background-image: url("/images/bg-container-short-form-wrap.jpg");
  background-position: center;
  background-size: cover;
  color: #fff;
`;
export const MessageForm = styled.div`
  width: calc(100% - 48px);
  height: calc(100% - 48px);
  padding: 24px;
  max-width: 900px;
  margin: auto;
  h2 {
    width: 100%;
    font-size: 29px;
    text-align: center;
  }
  @media(min-width: 900px){
    h2 {
      font-size: 40px;
    }
  }
`;
