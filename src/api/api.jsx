import axios from 'axios';
import { API_ROOT } from './api.conf';

class API {
  http;

  constructor() {
    axios.defaults.baseURL = API_ROOT;
    this.http = axios;
  }

  getSearchResults = text =>
    this.http.get(`getSearchResults`, {
      params: {
        text,
      },
    });
}
export default new API();
