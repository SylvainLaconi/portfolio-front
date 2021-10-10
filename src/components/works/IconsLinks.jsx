import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import githubIcon from '../../images/icons/icons8-github-60-black.png';
import linkIcon from '../../images/icons/icons8-lien-60-black.png';
import { ContainerFlexRow } from '../../styles/_containers';

const IconsLinks = ({ github, website }) => {
  return (
    <IconsLinksContainer>
      <a href={github} target="_blank" rel="noreferrer">
        <StyledIcon src={githubIcon} alt="github_icon" />
      </a>
      {website && (
        <a href={website} target="_blank" rel="noreferrer">
          <StyledIcon src={linkIcon} alt="link_icon" />
        </a>
      )}
    </IconsLinksContainer>
  );
};

export default IconsLinks;

IconsLinks.propTypes = {
  github: PropTypes.string.isRequired,
  website: PropTypes.string,
};

IconsLinks.defaultProps = {
  website: null,
};

const IconsLinksContainer = styled(ContainerFlexRow)`
  position: absolute;
  width: 40%;
  z-index: 2;
  justify-content: space-around;
  height: 260px;
  width: 500px;
  @media (max-width: 768px) {
    height: 182px;
    width: 350px;
  }
`;

const StyledIcon = styled.img`
  height: 60px;
  width: 60px;
  margin: 0;
  cursor: pointer;
`;
