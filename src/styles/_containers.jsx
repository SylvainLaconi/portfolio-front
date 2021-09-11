import styled from 'styled-components';
// import homeBackGround from '../images/backgrounds/home_background.jpg';
// import aboutBackGround from '../images/backgrounds/about_background.jpg';
// import projectsBackGround from '../images/backgrounds/works_background.jpg';

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

export const ContainerNavBar = styled(ContainerFlexRow)`
  position: fixed;
  top: 0;
  z-index: 10;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContainerHome = styled(ContainerSection)`
  background-repeat: no-repeat;
  background-size: cover;
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

export const ContainerContentDarkWork = styled(ContainerFlexColumn)`
  width: 60%;
  height: 100%;
  justify-content: space-around;
  @media (max-width: 768px) {
    width: 95%;
    height: auto;
    border: 2px solid red;
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

export const ContainerContact = styled(ContainerHome)``;

export const ContainerWorks = styled(ContainerHome)`
  background-image: none;
  height: auto;
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;
  @media (max-width: 768px) {
    padding-top: 0rem;
    padding-bottom: 2rem;
  }
`;

export const TitleContainer = styled(ContainerFlexColumn)`
  height: 10%;
  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

export const ContentContainer = styled(ContainerFlexRow)`
  height: 90%;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  height: 90%;
  @media (max-width: 768px) {
    justify-content: flex-start;
    height: auto;
  }
`;

export const CardContainer = styled(ContainerFlexRow)`
  width: 100%;
  min-width: 370px;
  height: 300px;
  justify-content: space-between;
  background-color: black;
  color: beige;
  margin-top: 2rem;
  box-shadow: rgba(17, 17, 26, 0.5) 0px 4px 16px,
    rgba(17, 17, 26, 0.5) 0px 8px 24px, rgba(17, 17, 26, 0.5) 0px 16px 56px;
  @media (max-width: 768px) {
    min-width: 0;
    height: 180px;
  }
`;

export const PictureContainer = styled(ContainerFlexRow)`
  height: 100%;
  width: 100%;
  max-width: 500px;
  position: relative;
`;

export const DateContainer = styled(ContainerFlexRow)`
  height: 100%;
  width: 40%;
  justify-content: flex-end;
`;

export const DescriptionContainer = styled(ContainerFlexRow)`
  height: 60%;
  width: 95%;
`;
export const HeaderContainer = styled(ContainerFlexRow)`
  height: 20%;
  width: 95%;
`;

export const TitleCardContainer = styled(ContainerFlexRow)`
  height: 100%;
  width: 60%;
  justify-content: flex-start;
`;

export const TechnoContainer = styled(ContainerFlexRow)`
  height: 20%;
  justify-content: flex-start;
  width: 95%;
`;

export const HeaderHomeContainer = styled(ContainerFlexColumn)`
  height: 60%;
  align-items: center;
  @media (max-width: 768px) {
    margin-top: 4rem;
    margin-bottom: 6rem;
  }
`;

export const MyPictureContainer = styled(ContainerFlexRow)`
  width: 30%;
  height: auto;
  @media (max-width: 768px) {
    width: 70%;
  }
`;

export const MyDescriptionContainer = styled(ContainerFlexColumn)`
  width: 95%;
  height: 40%;
  align-items: center;
  @media (max-width: 768px) {
    margin-bottom: 6rem;
  }
`;

export const QuoteContainer = styled(ContainerFlexColumn)`
  height: 20%;
  text-align: center;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  max-height: 300px;
`;

export const EditContainer = styled(ContainerFlexRow)`
  margin-top: 1rem;
`;

export const NewProjectContainer = styled(ContainerFlexColumn)`
  margin-top: 1rem;
`;

export const GroupFormContainer = styled(ContainerFlexRow)`
  justify-content: space-between;
  width: 90%;
`;

export const DeleteAndUpdateContainer = styled(ContainerFlexRow)`
  width: 100%;
  position: absolute;
  justify-content: space-around;
  bottom: 0;
  height: 2rem;
  color: red;
`;

export const SkillContentContainer = styled(ContainerFlexColumn)`
  height: 90%;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    justify-content: stretch;
  }
`;

export const SkillSectionContainer = styled(ContainerFlexRow)`
  height: 25%;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    height: 40%;
    align-items: flex-start;
  }
`;

export const TechSkillContainer = styled(ContainerFlexColumn)`
  text-align: center;
  width: 15%;
  min-width: 50px;
  @media (max-width: 768px) {
    width: 32%;
    min-width: 0;
  }
`;

export const IconSkillContainer = styled(ContainerFlexRow)`
  width: 100%;
  min-width: 50px;
  height: auto;
  @media (max-width: 768px) {
  }
`;

export const TextIconSkillContainer = styled(ContainerFlexRow)`
  height: 20%;
`;

export const OnHoverContainer = styled(PictureContainer)`
  position: absolute;
  background-color: white;
  opacity: 0.3;
  z-index: 1;
`;

export const IconsLinksContainer = styled(PictureContainer)`
  position: absolute;
  width: 40%;
  z-index: 2;
  justify-content: space-around;
`;
