import axios from "axios";

export const api = axios.create({
  baseURL: "https://wakalery-api-users.onrender.com",
});
