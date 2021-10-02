import React from 'react';
import PropTypes from 'prop-types';
import githubIcon from '../../images/icons/icons8-github-60-black.png';
import linkIcon from '../../images/icons/icons8-lien-60-black.png';
import { StyledIcon } from '../../styles/_cards';
import { IconsLinksContainer } from '../../styles/_containers';

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
