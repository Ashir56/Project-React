import axios from 'axios';

export async function get(url, config = {}) {
  return axios.get(url, { ...config }).then((response) => response.data);
}

export async function post(url, data, config = {}) {
  return axios
    .post(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export async function postFormData(url, data, config = {}) {
  return axios.post(url, data, { ...config }).then((response) => response.data);
}

export async function put(url, data, config = {}) {
  return axios
    .put(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export async function putFormData(url, data, config = {}) {
  return axios.put(url, data, { ...config }).then((response) => response.data);
}

export async function patch(url, data, config = {}) {
  return axios
    .patch(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export async function del(url, config = {}) {
  return axios.delete(url, { ...config }).then((response) => response.data);
}
