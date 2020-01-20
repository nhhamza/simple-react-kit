import axios from 'axios';
import { API_ROOT } from './api.conf';

class API {
  http;

  constructor() {
    axios.defaults.baseURL = API_ROOT;
    this.http = axios;
  }

  getStart = () => this.http.get(`GetStart`);
}
export default new API();
