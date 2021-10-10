import React from 'react';
import styled from 'styled-components';
import { ContainerFlexRow } from '../../styles/_containers';
import TechSkill from './TechSkill';
import htmlIcon from '../../images/icons/icons8-html-5-100.png';
import cssIcon from '../../images/icons/icons8-css3-100.png';
import jsIcon from '../../images/icons/icons8-logo-javascript-100.png';
import reactIcon from '../../images/icons/icons8-réagir-100.png';
import nodeIcon from '../../images/icons/icons8-node-js-100.png';

import mySqlIcon from '../../images/icons/icons8-logo-de-mysql-100.png';

const TechnicalSection = () => {
  return (
    <SkillSectionContainer>
      <TechSkill skill="HTML" icon={htmlIcon} />
      <TechSkill skill="CSS" icon={cssIcon} />
      <TechSkill skill="Javascript ES6+" icon={jsIcon} />
      <TechSkill skill="React & React Native" icon={reactIcon} />
      <TechSkill skill="NodeJS" icon={nodeIcon} />
      <TechSkill skill="MySQL" icon={mySqlIcon} />
    </SkillSectionContainer>
  );
};

export default TechnicalSection;

const SkillSectionContainer = styled(ContainerFlexRow)`
  height: 25%;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    height: 60%;
    align-items: flex-start;
  }
`;
