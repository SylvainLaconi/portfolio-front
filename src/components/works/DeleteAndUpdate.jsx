import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ContainerFlexRow } from '../../styles/_containers';
import { deleteProjectToApi } from '../../API/_requestApi';

const DeleteAndUpdate = ({ id, setNewChange, newChange }) => {
  const DeleteProject = () => {
    deleteProjectToApi(id);
    setNewChange(!newChange);
  };

  return (
    <DeleteAndUpdateContainer>
      <button type="button" onClick={DeleteProject}>
        Delete
      </button>
    </DeleteAndUpdateContainer>
  );
};

export default DeleteAndUpdate;

DeleteAndUpdate.propTypes = {
  id: PropTypes.string.isRequired,
  setNewChange: PropTypes.func.isRequired,
  newChange: PropTypes.bool.isRequired,
};

const DeleteAndUpdateContainer = styled(ContainerFlexRow)`
  width: 100%;
  position: absolute;
  justify-content: space-around;
  bottom: 0;
  height: 2rem;
  color: red;
`;
