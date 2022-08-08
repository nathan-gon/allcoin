import axios, { AxiosResponse } from 'axios';
import { PaginatedResponse } from '../model/pagination';

axios.defaults.baseURL = 'https://localhost:7148/api/';

axios.defaults.withCredentials = true;

axios.interceptors.response.use(response => {
  const { pagination } = response.headers;
  if (pagination) {
    response.data = new PaginatedResponse(response.data, JSON.parse(pagination));
    return response;
  }
  return response;
});

const responseBody = (response: AxiosResponse) => response.data;

const request = {
  get: (url: string, params?: URLSearchParams) => axios.get(url, { params }).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  del: (url: string) => axios.delete(url).then(responseBody),
};

const Coins = {
  List: (params?: URLSearchParams) => request.get('coin/list', params),
  allCoins: () => request.get('coin/all'),
  trending: () => request.get('coin/trending'),
  chart: (params?: URLSearchParams) => request.get('coin/chart', params),

};

const httpClient = {
  Coins,
};

export default httpClient;
