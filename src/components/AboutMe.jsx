import React from 'react';
import {
  ContainerContentDark,
  ContainerSection,
  TitleContainer,
} from '../styles/_containers';
import { Divider } from '../styles/_features';
import { SectionTitle } from '../styles/_titles';
import AboutContent from './about/AboutContent';

const AboutMe = () => {
  return (
    <ContainerSection id="about">
      <ContainerContentDark>
        <TitleContainer>
          <SectionTitle>A propos de moi</SectionTitle>
          <Divider />
        </TitleContainer>
        <AboutContent />
      </ContainerContentDark>
    </ContainerSection>
  );
};

export default AboutMe;
