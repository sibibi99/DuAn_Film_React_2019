import axios from "axios";

const instance = axios.create();

export const getAPI = (url, config) =>
  instance
    .get(url, config)
    .then(res => res)
    .catch(error => {
      throw error;
    });

export const postAPI = (url, data, config) =>
  instance
    .post(url, data, config)
    .then(res => res)
    .catch(error => {
      throw error;
    });

export const putAPI = (url, data, config) =>
  instance
    .put(url, data, config)
    .then(res => res)
    .catch(error => {
      throw error;
    });

export const patchAPI = (url, data, config) =>
  instance
    .patch(url, data, config)
    .then(res => res)
    .catch(error => {
      throw error;
    });

export const deleteAPI = (url, config) =>
  instance
    .delete(url, config)
    .then(res => res)
    .catch(error => {
      throw error;
    });

// Add Authorization to header
export const setAuthorization = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Remove Authorization from header
export const removeAuthorization = () => {
  delete instance.defaults.headers.common.Authorization;
};
