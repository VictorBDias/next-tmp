import axios from "axios";

export const api = axios.create({
  baseURL: "https://dogsapi.origamid.dev/json/api/",
});

export const apiAuth = axios.create({
  baseURL: "https://dogsapi.origamid.dev/json/jwt-auth/v1/",
});
