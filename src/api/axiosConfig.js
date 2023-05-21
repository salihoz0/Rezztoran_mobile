import axios from 'axios';
export let axiosConfig = token => {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
};
