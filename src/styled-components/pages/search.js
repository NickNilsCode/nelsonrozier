import styled from 'styled-components';

  export const SearchContent = styled.div`
    width: 100%;
    text-align: center;
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
  `;
