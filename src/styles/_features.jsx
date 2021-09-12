import styled from 'styled-components';

export const Divider = styled.div`
  background-color: beige;
  width: 40%;
  height: 1px;
  @media (max-width: 768px) {
    margin-bottom: 4rem;
  }
`;

export const Button = styled.button`
  background-color: beige;
  width: 4rem;
  cursor: pointer;
`;

export const VerticalDivider = styled.div`
  background-color: beige;
  height: 80%;
  width: 1px;
`;
