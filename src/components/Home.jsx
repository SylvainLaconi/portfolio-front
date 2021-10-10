import React from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-parallax';
import {
  ContainerContentDark,
  ContainerSection,
  ContainerFlexColumn,
  ContainerFlexRow,
} from '../styles/_containers';
import { Divider } from '../styles/_features';
import { MainTitle } from '../styles/_titles';
import myPicture from '../images/MyPicture/my_picture.png';
import homeBackGround from '../images/backgrounds/home_background.jpg';

const Home = () => {
  return (
    <Parallax
      blur={{ min: -1, max: 3 }}
      bgImage={homeBackGround}
      bgImageAlt="projects"
      strength={-200}
    >
      <ContainerHome id="home">
        <ContainerContentDark>
          <HeaderHomeContainer>
            <MyDescriptionContainer>
              <MainTitle>Sylvain Laconi</MainTitle>
              <StyledTextJob>Développeur web Front-End</StyledTextJob>
              <StyledTextIntro>Spécialisé React.js</StyledTextIntro>
            </MyDescriptionContainer>
            <MyPictureContainer>
              <MyStyledPicture src={myPicture} alt="mypicture" />
            </MyPictureContainer>
          </HeaderHomeContainer>
          <Divider />
          <QuoteContainer>
            <StyledQuote>
              Il n&apos; y a pas de hasards, il n&apos; y a que des rendez-vous
            </StyledQuote>
            <p>- Paul Eluard -</p>
          </QuoteContainer>
        </ContainerContentDark>
      </ContainerHome>
    </Parallax>
  );
};

export default Home;

const ContainerHome = styled(ContainerSection)`
  background-repeat: no-repeat;
  background-size: cover;
`;

const HeaderHomeContainer = styled(ContainerFlexColumn)`
  height: 60%;
  align-items: center;
  @media (max-width: 768px) {
    margin-top: 4rem;
    margin-bottom: 6rem;
  }
`;

const MyPictureContainer = styled(ContainerFlexRow)`
  width: 30%;
  height: auto;
  @media (max-width: 768px) {
    width: 70%;
  }
`;

const MyDescriptionContainer = styled(ContainerFlexColumn)`
  width: 95%;
  height: 40%;
  align-items: center;
  @media (max-width: 768px) {
    margin-bottom: 6rem;
  }
`;

const QuoteContainer = styled(ContainerFlexColumn)`
  height: 20%;
  text-align: center;
`;

const MyStyledPicture = styled.img`
  width: 100%;
  height: auto;
`;

const StyledTextJob = styled.p`
  font-family: 'Poppins';
  font-size: 1.5rem;
  margin: 0;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const StyledTextIntro = styled.p`
  font-family: 'Poppins';
  font-size: 1rem;
  margin: 0;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const StyledQuote = styled.q`
  font-size: 1.8rem;
  font-style: italic;
  margin: 0;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
