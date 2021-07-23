/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { StyledImage } from '../../styles/_cards';
import { CardContainer, PictureContainer } from '../../styles/_containers';
import DeleteAndUpdate from './DeleteAndUpdate';
import RightCard from './RightCard';
import RightCardEdit from './RightCardEdit';

const WorkCard = ({ project, edit, setNewChange, newChange }) => {
  return (
    <CardContainer>
      <PictureContainer>
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
