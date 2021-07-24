/* eslint-disable camelcase */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledImage } from '../../styles/_cards';
import { CardContainer, PictureContainer } from '../../styles/_containers';
import DeleteAndUpdate from './DeleteAndUpdate';
import RightCard from './RightCard';
import RightCardEdit from './RightCardEdit';
import OnHover from './OnHover';
import IconsLinks from './IconsLinks';

const WorkCard = ({ project, edit, setNewChange, newChange }) => {
  const [hoverPicture, setHoverPicture] = useState(false);

  return (
    <CardContainer>
      <PictureContainer
        onMouseEnter={() => setHoverPicture(true)}
        onMouseLeave={() => setHoverPicture(false)}
      >
        {' '}
        {!edit && hoverPicture && <OnHover />}
        {!edit && hoverPicture && (
          <IconsLinks github={project.url_github} website={project.url_app} />
        )}
        {edit && (
          <DeleteAndUpdate
            id={project.id}
            setNewChange={setNewChange}
            newChange={newChange}
          />
        )}
        <StyledImage src={project.front_picture} alt={project.title} />
      </PictureContainer>
      {edit ? (
        <RightCardEdit
          project={project}
          setNewChange={setNewChange}
          newChange={newChange}
        />
      ) : (
        <RightCard project={project} />
      )}
    </CardContainer>
  );
};

export default WorkCard;

WorkCard.propTypes = {
  edit: PropTypes.bool.isRequired,
  setNewChange: PropTypes.func.isRequired,
  newChange: PropTypes.bool.isRequired,
  project: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
};
