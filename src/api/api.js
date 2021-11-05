import axios from "axios";

const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL_DEV || "http://localhost:5001"
})

export async function authUser(userData) {
  return await $host.post(`/auth/login`, userData);
}
export async function getUsers() {
  return await $host.get(`/users`);
}
export async function getUsername(id) {
  return await $host.post(`/users/user`,{id});
}
