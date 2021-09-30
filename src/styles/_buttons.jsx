import styled from 'styled-components';

export const Button = styled.button``;

export const DownloadButton = styled.button`
  cursor: pointer;
  font-size: 18px;
  background-color: #32b7c6;
  color: beige;
  width: 200px;
  height: 50px;
  @media (max-width: 768px) {
    font-size: 12px;
    width: 150px;
    height: 40px;
  }
`;
