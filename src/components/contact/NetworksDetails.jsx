import React from 'react';
import styled from 'styled-components';
import linkedinIcon from '../../images/icons/icons8-linkedin-96.png';
import githubIcon from '../../images/icons/icons8-github-90 (1).png';
import gitlabIcon from '../../images/icons/icons8-gitlab-96.png';
import { ContainerFlexRow } from '../../styles/_containers';

const NetworksDetails = () => {
  return (
    <NetworkDetailsContainer>
      <a
        href="https://www.linkedin.com/in/sylvain-laconi/"
        target="_blank"
        rel="noreferrer"
      >
        <NetworkIconImg src={linkedinIcon} alt="linkedin" />
      </a>
      <a
        href="https://github.com/SylvainLaconi"
        target="_blank"
        rel="noreferrer"
      >
        <NetworkIconImg src={githubIcon} alt="github" />
      </a>
      <a
        href="https://gitlab.com/sylvain.laconi"
        target="_blank"
        rel="noreferrer"
      >
        <NetworkIconImg src={gitlabIcon} alt="gitlab" />
      </a>
    </NetworkDetailsContainer>
  );
};

export default NetworksDetails;

const NetworkDetailsContainer = styled(ContainerFlexRow)`
  max-width: 500px;
  height: 30%;
  justify-content: space-around;
`;

const NetworkIconImg = styled.img`
  width: 80px;
  @media (max-width: 768px) {
    width: 50px;
  }
`;
