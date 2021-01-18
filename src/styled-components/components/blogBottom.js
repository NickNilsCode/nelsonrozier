import styled from 'styled-components';
import { red } from '../colors';
export const BlogBottom = styled.div`
  a {
    width: max-content;
    word-wrap: break-word;
    max-width: 100%;
  }
  form {
    width: 100%;
  }
  ul {
    a {
      display: inline-block;
    }
    li {
      margin: 8px 0;
      text-align: left;
    }
    a:hover {
      text-decoration: underline;
    }
  }
  @media (min-width: 900px){

  }
`;
