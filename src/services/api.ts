import axios from "axios";

const api = axios.create({
  baseURL: "https://dogsapi.origamid.dev/json/api/",
});

export default api;
