import styled from 'styled-components';
export const BlogBottom = styled.div`
  width: 100%;
  a {
    width: max-content;
    word-wrap: break-word;
    max-width: 100%;
  }
  form {
    width: 100%;
    input {
      width: calc(100% - 65px);
      font-size: 12px;
      padding: 10px;
      color: #bcbcbc;
      background-color: #eef1f4;
      border: none;
    }
    input:focus {
      outline: none;
    }
    button {
      font-size: 12px;
      padding: 12px;
      border-radius: initial;
      border: none;
    }
  }
  select {
    width: 100%;
    padding: 5px;
    color: #4e4e4e;
    border: 1px solid #bbb;
  }
  p {
    text-align: left;
    font-size: 17px;
    font-weight: 400;
    line-height: 27px;
  }
  h1 {
    text-align: left;
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 30px;
  }
  h2 {
    text-align: left;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  ul {
    padding-left: 17px;
    li {
      margin: 8px 0;
      text-align: left;
    }
    a:hover {
      text-decoration: underline;
    }
  }
  @media (min-width: 900px){
    width: 277px;
    margin-left: 85px;
  }
`;
