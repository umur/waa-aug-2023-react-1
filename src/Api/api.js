import axios from 'axios';

const baseURL = 'http://localhost:8080';

const api = axios.create({
    baseURL,
});

export const create = (resource, data) => api.post(`/${resource}`, data);
export const readAll = (resource) => api.get(`${baseURL}/${resource}`);
export const read = (resource, id) => api.get(`${baseURL}/${resource}/${id}`);
export const update = (resource, id, data) => api.put(`${baseURL}/${resource}/${id}`, data);
export const remove = (resource, id) => api.delete(`${baseURL}/${resource}/${id}`);

export default api;
