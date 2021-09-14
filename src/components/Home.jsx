import React from 'react';
import { Parallax } from 'react-parallax';
import {
  ContainerContentDark,
  ContainerHome,
  HeaderHomeContainer,
  MyDescriptionContainer,
  MyPictureContainer,
  QuoteContainer,
} from '../styles/_containers';
import {
  MyStyledPicture,
  StyledQuote,
  StyledTextIntro,
  StyledTextJob,
} from '../styles/_home';
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
