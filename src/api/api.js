import axios from "axios";

const url = process.env.REACT_APP_API_URL_DEV || "http://localhost:5001";

export async function authUser(userData) {
  return await axios.post(`${url}/auth/login`, userData);
}
export async function getUsers() {
  return await axios.get(`${url}/users`);
}
export async function getUsername(id) {
  return await axios.post(`${url}/users/user`,{id});
}
