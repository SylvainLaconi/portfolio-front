import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CardsContainer } from '../../styles/_containers';
import WorkCard from './WorkCard';
import { getProjectsFromApi } from '../../API/_requestApi';

const WorksContent = ({ newChange, edit, setNewChange }) => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProjects = () => {
    getProjectsFromApi().then((data) => {
      setProjects(data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getProjects();
  }, [newChange]);

  return (
    !isLoading && (
      <CardsContainer>
        {projects
          .sort((a, b) => b.id - a.id)
          .map((project) => (
            <WorkCard
              key={project.id}
              project={project}
              edit={edit}
              setNewChange={setNewChange}
              newChange={newChange}
            />
          ))}
      </CardsContainer>
    )
  );
};

export default WorksContent;

WorksContent.propTypes = {
  setNewChange: PropTypes.func.isRequired,
  newChange: PropTypes.bool.isRequired,
  edit: PropTypes.bool.isRequired,
};
