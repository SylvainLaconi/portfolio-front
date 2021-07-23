import React from 'react';
import { SkillSectionContainer } from '../../styles/_containers';
import TechSkill from './TechSkill';
import htmlIcon from '../../images/icons/icons8-html-5-100.png';
import cssIcon from '../../images/icons/icons8-css3-100.png';
import jsIcon from '../../images/icons/icons8-logo-javascript-100.png';
import reactIcon from '../../images/icons/icons8-réagir-100.png';
import nodeIcon from '../../images/icons/icons8-node-js-100.png';
// import styledIcon from '../../images/icons/styled-components (3).png';
import mySqlIcon from '../../images/icons/icons8-logo-de-mysql-100.png';

const TechnicalSection = () => {
  return (
    <SkillSectionContainer>
      <TechSkill skill="HTML" icon={htmlIcon} />
      <TechSkill skill="CSS" icon={cssIcon} />
      <TechSkill skill="Javascript ES6+" icon={jsIcon} />
      <TechSkill skill="React & React Native" icon={reactIcon} />
      <TechSkill skill="NodeJS" icon={nodeIcon} />
      {/* <TechSkill skill="Styled Components" icon={styledIcon} /> */}
      <TechSkill skill="MySQL" icon={mySqlIcon} />
    </SkillSectionContainer>
  );
};

export default TechnicalSection;
