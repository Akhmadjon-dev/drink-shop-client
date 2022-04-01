import axios from 'axios';
import store from '../store';

const baseURL =  '/' 

export default axios.create({baseURL, withCredentials: true});

axios.interceptors.request.use(config => {
    const token = store.getState().auth?.token || '';

    config.headers.authorization = token ? `Bearer ${token}` : '';
    return config;
})


axios.interceptors.response.use(res => res, err => {
    if(err.response.status === 401) {
        // return store.dispatch(logout)
    }
    return Promise.reject(err);
})