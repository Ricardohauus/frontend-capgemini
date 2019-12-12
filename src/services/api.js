import axios from "axios";
const baseURL = "http://localhost:8081/api";

const api = axios.create({
  baseURL: baseURL
});

api.postOrPut = (url, id, data) => {
  const method = id ? "put" : "post";
  const apiUrl = id ? `${url}/${id}` : url;
  return api[method](apiUrl, data);
};

export default api;
