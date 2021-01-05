import styled from 'styled-components';
import { gold } from './colors';

export const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const ContentWrapper = styled.div`
  width: calc(100% - 32px);
  padding: 16px;
  min-height: calc(100vh - 89px - 145px);
  max-width: 900px;
  margin: auto;
  text-align: center;
  position: relative;
  @media (min-width: 700px){
    min-height: calc(100vh - 58px - 115px);
  }
`;

export const GoldButton = styled.div`
  background: ${gold};
  padding: 7px 20px;
  margin: 12px auto;
  color: #fff;
  font-size: 17px;
  border: 1px solid #8d8d8d;
  border-radius: 3px;
  width: max-content;
  &:hover {
    cursor: pointer;
    background-color: #7c3230;
  }
`;
export const BigGoldButton = styled.div`
  background: ${gold};
  padding: 12px 20px;
  margin: 12px auto;
  color: #7c3230;
  font-size: 19px;
  border: 1px solid #8d8d8d;
  border-radius: 3px;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  &:hover {
    cursor: pointer;
    background-color: #7c3230;
    color: #fff;
  }
`;

export const Input = styled.input`
  background: #fff;
  padding: 12px;
  width: 100%;
  margin: 0 0 12px 0;
  font-size: 16px;
  border: 1px solid #8d8d8d;
  border-radius: 1px;
`;

export const TextArea = styled.textarea`
  background: #fff;
  padding: 12px;
  width: 100%;
  height: 200px;
  margin: 0 0 12px 0;
  font-size: 16px;
  border: 1px solid #8d8d8d;
  border-radius: 1px;
`;
