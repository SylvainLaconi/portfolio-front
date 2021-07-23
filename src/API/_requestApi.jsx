/* eslint-disable no-console */
import axios from 'axios';

export const getProjectsFromApi = () => {
  return axios
    .get('http://localhost:8000/api/works')
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const getProjetDetailsFromApi = (id) => {
  return axios
    .get(`http://localhost:8000/api/works/${id}`)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const postNewProjectToApi = (obj) => {
  return axios
    .post('http://localhost:8000/api/works/', obj)
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
};

export const deleteProjectToApi = (id) => {
  return axios
    .delete(`http://localhost:8000/api/works/${id}`)
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
};

export const updateProjectToApi = (id, obj) => {
  return axios
    .put(`http://localhost:8000/api/works/${id}`, obj)
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
};
