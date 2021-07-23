import styled from 'styled-components';
import homeBackGround from '../images/backgrounds/home_background.jpg';
import aboutBackGround from '../images/backgrounds/about_background.jpg';
import projectsBackGround from '../images/backgrounds/works_background.jpg';

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
`;

export const ContainerNavBar = styled(ContainerFlexRow)`
  position: fixed;
  top: 0;
  z-index: 10;
`;

export const ContainerHome = styled(ContainerSection)`
  background-image: url(${homeBackGround});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ContainerContentDark = styled(ContainerFlexColumn)`
  width: 60%;
  height: 90vh;
  justify-content: space-around;
  background-color: black;
  box-shadow: rgba(17, 17, 26, 0.5) 0px 4px 16px,
    rgba(17, 17, 26, 0.5) 0px 8px 24px, rgba(17, 17, 26, 0.5) 0px 16px 56px;
`;

export const ContainerContentDarkWork = styled(ContainerContentDark)`
  height: 100%;
  background-color: #69605e;
`;

export const ContainerContentDarkColumn = styled(ContainerFlexRow)`
  width: 60%;
  height: 90vh;
  background-color: black;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 19px 38px,
    rgba(0, 0, 0, 0.32) 0px 15px 12px;
`;

export const ContainerContact = styled(ContainerHome)`
  background-image: url(${aboutBackGround});
`;

export const ContainerWorks = styled(ContainerHome)`
  background-image: url(${projectsBackGround});
  height: auto;
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;
`;

export const TitleContainer = styled(ContainerFlexColumn)`
  height: 10%;
`;

export const ContentContainer = styled(ContainerFlexRow)`
  height: 90%;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;
  height: 90%;
`;

export const CardContainer = styled(ContainerFlexRow)`
  max-width: 900px;
  height: 200px;
  background-color: black;
  color: beige;
  margin-top: 1rem;
  box-shadow: rgba(17, 17, 26, 0.5) 0px 4px 16px,
    rgba(17, 17, 26, 0.5) 0px 8px 24px, rgba(17, 17, 26, 0.5) 0px 16px 56px;
`;

export const PictureContainer = styled(ContainerFlexRow)`
  max-width: 380px;
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
`;

export const MyPictureContainer = styled(ContainerFlexRow)`
  width: auto;
  height: 60%;
`;

export const MyDescriptionContainer = styled(ContainerFlexColumn)`
  width: 95%;
  height: 40%;
  align-items: center;
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
  max-width: 520px;
  height: 100%;
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
`;

export const SkillSectionContainer = styled(ContainerFlexRow)`
  height: 25%;
  flex-wrap: wrap;
`;

export const TechSkillContainer = styled(ContainerFlexColumn)`
  text-align: center;
  width: 180px;
  height: 100%;
`;

export const IconSkillContainer = styled(ContainerFlexRow)`
  width: 180px;
  height: 80%;
`;

export const TextIconSkillContainer = styled(ContainerFlexRow)`
  height: 20%;
`;
