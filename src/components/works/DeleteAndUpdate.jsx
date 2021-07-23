import React from 'react';
import PropTypes from 'prop-types';
import { DeleteAndUpdateContainer } from '../../styles/_containers';
import { Button } from '../../styles/_features';
import { deleteProjectToApi } from '../../API/_requestApi';

const DeleteAndUpdate = ({ id, setNewChange, newChange }) => {
  const DeleteProject = () => {
    deleteProjectToApi(id);
    setNewChange(!newChange);
  };

  return (
    <DeleteAndUpdateContainer>
      <Button type="button" onClick={DeleteProject}>
        Delete
      </Button>
    </DeleteAndUpdateContainer>
  );
};

export default DeleteAndUpdate;

DeleteAndUpdate.propTypes = {
  id: PropTypes.number.isRequired,
  setNewChange: PropTypes.func.isRequired,
  newChange: PropTypes.bool.isRequired,
};
