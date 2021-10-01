import styled from 'styled-components';

export const Text = styled.p``;

export const AboutText = styled.p`
  font-size: 18px;
  line-height: 2rem;
  text-align: center;
  margin: 0;
  line-height: 3;
  @media (max-width: 768px) {
    font-size: 12px;
    text-align: justify;
    line-height: 2.5;
  }
`;
