/* eslint-disable camelcase */
import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  ContainerFlexColumn,
  ContainerFlexRow,
} from '../../styles/_containers';
import DeleteAndUpdate from './DeleteAndUpdate';
import RightCard from './RightCard';
import RightCardEdit from './RightCardEdit';
import OnHover from './OnHover';
import IconsLinks from './IconsLinks';

const WorkCard = ({ project, edit, setNewChange, newChange }) => {
  const [hoverPicture, setHoverPicture] = useState(false);

  return (
    <CardContainer edit={edit}>
      <PictureContainer
        onMouseEnter={() => setHoverPicture(true)}
        onMouseLeave={() => setHoverPicture(false)}
        edit={edit}
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
        {!edit && (
          <StyledImage src={project.front_picture} alt={project.title} />
        )}
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

const CardContainer = styled(ContainerFlexColumn)`
  width: 500px;
  height: ${({ edit }) => !edit && '450px'};
  justify-content: space-between;
  background-color: #6f6f6c;
  color: white;
  margin-top: 2rem;
  @media (max-width: 768px) {
    min-width: 0;
    width: 320px;
    height: 288px;
    margin-top: 0;
    margin-bottom: 2rem;
  }
`;

const PictureContainer = styled(ContainerFlexRow)`
  height: ${({ edit }) => !edit && '260px'};
  width: 500px;
  @media (max-width: 768px) {
    height: 166px;
    width: 320px;
  }
`;

const StyledImage = styled.img`
  height: 260px;
  width: 500px;
  margin: 0;
  @media (max-width: 768px) {
    height: 166px;
    width: 320px;
  }
`;
