import React from 'react';
import styled from 'styled-components';
import { ContainerFlexRow } from '../../styles/_containers';
import TechSkill from './TechSkill';
import vscodeIcon from '../../images/icons/icons8-visual-studio-code-2019-100.png';
import githubIcon from '../../images/icons/icons8-github-100.png';
import jiraIcon from '../../images/icons/icons8-jira-100.png';
import firebaseIcon from '../../images/icons/icons8-console-google-firebase-96.png';
import styledIcon from '../../images/icons/icon-styledcomponent.svg';

const DevSection = () => {
  return (
    <DevSkillSectionContainer>
      <TechSkill skill="Styled-components" icon={styledIcon} />
      <TechSkill skill="Google Firebase" icon={firebaseIcon} />
      <TechSkill skill="VS Code" icon={vscodeIcon} />
      <TechSkill skill="Git / Github" icon={githubIcon} />
      <TechSkill skill="Jira" icon={jiraIcon} />
    </DevSkillSectionContainer>
  );
};

export default DevSection;

const DevSkillSectionContainer = styled(ContainerFlexRow)`
  height: 25%;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    height: 40%;
    align-items: flex-start;
  }
`;
