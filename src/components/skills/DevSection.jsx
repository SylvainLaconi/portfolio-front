import React from 'react';
import { DevSkillSectionContainer } from '../../styles/_containers';
import TechSkill from './TechSkill';
import vscodeIcon from '../../images/icons/icons8-visual-studio-code-2019-100.png';
import githubIcon from '../../images/icons/icons8-github-100.png';
import jiraIcon from '../../images/icons/icons8-jira-100.png';

const DevSection = () => {
  return (
    <DevSkillSectionContainer>
      <TechSkill skill="VS Code" icon={vscodeIcon} />
      <TechSkill skill="Git / Github" icon={githubIcon} />
      <TechSkill skill="Jira" icon={jiraIcon} />
    </DevSkillSectionContainer>
  );
};

export default DevSection;
