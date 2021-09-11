import styled from 'styled-components';

export const MainTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
  color: beige;
  margin: 0;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 4rem;
  }
`;

export const SectionTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  color: beige;
  margin-bottom: 0.5rem;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const SubSectionTitle = styled(CardTitle)``;
