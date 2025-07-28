import axios from "axios";

const API_BASE_URL = "http://localhost:5000/Api";

export const sendContactForm = (formData) => {
  return axios.post(`${API_BASE_URL}/contact`, formData);
};

export const fetchProjects = () => {
  return axios.get(`${API_BASE_URL}/projects`);
};
