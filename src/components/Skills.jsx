import React from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-parallax';
import {
  ContainerContentDark,
  ContainerSection,
  ContainerFlexColumn,
} from '../styles/_containers';
import { Divider } from '../styles/_features';
import { SectionTitle } from '../styles/_titles';
import SkillsContent from './skills/SkillsContent';
import projectsBackGround from '../images/backgrounds/works_background.jpg';

const Skills = () => {
  return (
    <Parallax
      blur={{ min: -1, max: 3 }}
      bgImage={projectsBackGround}
      bgImageAlt="projects"
      strength={-200}
    >
      <ContainerSection id="skills">
        <ContainerContentDarkSkills>
          <TitleContainer>
            <SectionTitle>Mes compétences</SectionTitle>
            <Divider />
          </TitleContainer>
          <SkillsContent />
        </ContainerContentDarkSkills>
      </ContainerSection>
    </Parallax>
  );
};

export default Skills;

const ContainerContentDarkSkills = styled(ContainerContentDark)``;

const TitleContainer = styled(ContainerFlexColumn)`
  height: 10%;
  @media (max-width: 768px) {
    margin-top: 2rem;
    height: 20%;
  }
`;
