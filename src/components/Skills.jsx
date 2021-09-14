import React from 'react';
import {
  ContainerContentDarkSkills,
  ContainerSection,
  TitleContainer,
} from '../styles/_containers';
import { Divider } from '../styles/_features';
import { SectionTitle } from '../styles/_titles';
import SkillsContent from './skills/SkillsContent';

const Skills = () => {
  return (
    <ContainerSection id="skills">
      <ContainerContentDarkSkills>
        <TitleContainer>
          <SectionTitle>Mes compétences</SectionTitle>
          <Divider />
        </TitleContainer>
        <SkillsContent />
      </ContainerContentDarkSkills>
    </ContainerSection>
  );
};

export default Skills;
