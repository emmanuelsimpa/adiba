import axios from "axios";

// export const URL = "http://localhost:3112/";
export const URL =
  "https://gw1.api.adiba.app/backoffice/v1/admin/opportunities/";
export const LOGIN_URL = URL + "users/login";
export const REGISTER_URL = URL + "signup";
export const REQUEST_PASSWORD_URL = URL + "admin/members/password/reset";
export const ME_URL = URL + "user/profile";

export function logins(data) {
  return axios.post(LOGIN_URL, data);
}

export function resend_confirmation(data) {
  return axios.post(`${URL}auth/resend-confirm-code`, data);
}

export function send_pin(data) {
  return axios.post(`${URL}auth/confirm-code`, data);
}

export function send_pin_forgot(data) {
  return axios.post(`${URL}auth/forgot-password`, data);
}

export function reset_password(data) {
  return axios.post(`${URL}auth/reset-password`, data);
}

export function register(data) {
  return axios.post(REGISTER_URL, data);
}

export function requestPassword(email) {
  return axios.post(REQUEST_PASSWORD_URL, { email });
}

export function changePassword(body) {
  return axios.post(URL + "auth/user/change_pass", body);
}

export function request_license(body) {
  return axios.post(`${URL}admin/opportunities`, body);
}

export function refresh_token() {
  return axios.post(URL + "admin/members/refresh", {});
}

export function getUserByToken() {
  return axios.get(ME_URL);
}
