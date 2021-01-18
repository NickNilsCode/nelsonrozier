import styled from 'styled-components';

  export const AttorneyDiv = styled.div`
    width: 100%;
    position: relative;
    img {
      display: inherit;
    }
    @media (min-width: 900px){
      img {
        position: absolute;
        top: 0;
        right: 0;
      }
    }
  `;
