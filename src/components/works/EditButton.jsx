import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../styles/_features';
import { EditContainer } from '../../styles/_containers';

const EditButton = ({ setEdit, edit }) => {
  return (
    <EditContainer>
      <Button type="button" onClick={() => setEdit(!edit)}>
        Edit
      </Button>
    </EditContainer>
  );
};

export default EditButton;

EditButton.propTypes = {
  setEdit: PropTypes.func.isRequired,
  edit: PropTypes.bool.isRequired,
};
