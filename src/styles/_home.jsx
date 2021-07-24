import styled from 'styled-components';

export const MyStyledPicture = styled.img`
  width: 100%;
  height: auto;
`;

export const StyledTextJob = styled.p`
  font-family: 'Poppins';
  font-size: 1.5rem;
  margin: 0;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const StyledTextIntro = styled.p`
  font-family: 'Poppins';
  font-size: 1rem;
  margin: 0;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const StyledQuote = styled.q`
  font-size: 1.8rem;
  font-style: italic;
  margin: 0;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;
