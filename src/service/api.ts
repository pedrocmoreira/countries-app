import axios from "axios";

const api_v3 = axios.create({
  baseURL: "https://restcountries.com/v3.1/",
});

const api_v2 = axios.create({
  baseURL: "https://restcountries.com/v2/",
});

export { api_v3, api_v2 };
