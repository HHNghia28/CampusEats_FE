import axios from 'axios';
import QueryString from 'qs';

const instance = axios.create({
  baseURL: 'http://campuseats-001-site1.atempurl.com/api',
  headers: {
    'content-type': 'application/json'
  },
  paramsSerializer: {
    serialize: params => {
      return QueryString.stringify(params, { arrayFormat: 'brackets' });
    }
  }
});

instance.interceptors.request.use(request => {
  request.headers.Authorization = localStorage.getItem('jwt');

  return request;
});

export const handleRequest: (promise: Promise<any>) => Promise<any[]> = (
  promise: Promise<any>
) =>
  promise
    .then(data => [data, undefined])
    .catch(error => [undefined, error.response.data]);

export default instance;
