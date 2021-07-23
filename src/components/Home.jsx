import React from 'react';
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

const Home = () => {
  return (
    <ContainerHome id="home">
      <ContainerContentDark>
        <HeaderHomeContainer>
          <MyDescriptionContainer>
            <MainTitle>Sylvain Laconi</MainTitle>
            <StyledTextJob>Développeur web / web mobile junior</StyledTextJob>
            <StyledTextIntro>React & Node</StyledTextIntro>
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
          <p>Paul Eluard</p>
        </QuoteContainer>
      </ContainerContentDark>
    </ContainerHome>
  );
};

export default Home;
