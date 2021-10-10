import React from 'react';
import styled from 'styled-components';
import {
  ContainerContentDark,
  ContainerSection,
  ContainerFlexColumn,
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

const ContainerContentDarkAbout = styled(ContainerContentDark)`
  box-shadow: none;
`;

const TitleContainer = styled(ContainerFlexColumn)`
  height: 10%;
  @media (max-width: 768px) {
    margin-top: 2rem;
    height: 20%;
  }
`;
