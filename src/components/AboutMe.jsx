import React from 'react';
import {
  ContainerContentDarkAbout,
  ContainerSection,
  TitleContainer,
} from '../styles/_containers';
import { Divider } from '../styles/_features';
import { SectionTitle } from '../styles/_titles';
import AboutContent from './about/AboutContent';

const AboutMe = () => {
  return (
    <ContainerSection id="about">
      <ContainerContentDarkAbout>
        <TitleContainer>
          <SectionTitle>A propos de moi</SectionTitle>
          <Divider />
        </TitleContainer>
        <AboutContent />
      </ContainerContentDarkAbout>
    </ContainerSection>
  );
};

export default AboutMe;
