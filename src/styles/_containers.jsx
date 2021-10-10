import styled from 'styled-components';

export const ContainerFlexRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ContainerFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ContainerSection = styled(ContainerFlexRow)`
  padding-top: 1rem;
  height: 100vh;
  @media (max-width: 768px) {
    padding-top: 0rem;
  }
`;

export const ContainerContentDark = styled(ContainerFlexColumn)`
  width: 60%;
  height: 90%;
  justify-content: space-around;
  background-color: black;
  box-shadow: rgba(17, 17, 26, 0.5) 0px 4px 16px,
    rgba(17, 17, 26, 0.5) 0px 8px 24px, rgba(17, 17, 26, 0.5) 0px 16px 56px;
  @media (max-width: 768px) {
    width: 85%;
    height: 100%;
    justify-content: stretch;
  }
`;

export const ContainerContentDarkColumn = styled(ContainerFlexRow)`
  width: 60%;
  height: 90vh;
  background-color: black;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 19px 38px,
    rgba(0, 0, 0, 0.32) 0px 15px 12px;
  @media (max-width: 768px) {
    width: 95%;
    height: auto;
  }
`;

export const ContentContainer = styled(ContainerFlexColumn)`
  height: 70%;
  @media (max-width: 768px) {
    height: 90%;
  }
`;
