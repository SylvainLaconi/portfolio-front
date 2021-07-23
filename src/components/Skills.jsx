import React from 'react';
import {
  ContainerContentDark,
  ContainerSection,
  TitleContainer,
} from '../styles/_containers';
import { Divider } from '../styles/_features';
import { SectionTitle } from '../styles/_titles';
import SkillsContent from './skills/SkillsContent';

const Skills = () => {
  return (
    <ContainerSection id="skills">
      <ContainerContentDark>
        <TitleContainer>
          <SectionTitle>Mes compétences</SectionTitle>
          <Divider />
        </TitleContainer>
        <SkillsContent />
      </ContainerContentDark>
    </ContainerSection>
  );
};

export default Skills;
