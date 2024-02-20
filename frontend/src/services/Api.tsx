import axios from "axios";

export const api = axios.create({
  // Para rodar localmente, é necessário usar o baseURL abaixo.
  //baseURL: "http://127.0.0.1:3000/",
  baseURL: "https://wakalery-api-users.onrender.com/",
});
