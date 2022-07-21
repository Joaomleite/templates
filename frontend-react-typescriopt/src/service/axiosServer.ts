import axios, { AxiosInstance } from 'axios';
import { API_URL } from '../consts';

import { ComponetsService } from './componentsService';


export class AxiosServer {
  server: AxiosInstance;

  constructor() {
    this.server = this.initServer();
  }

  initServer() {
    return axios.create({
      baseURL: API_URL,
    });
  }
}

export const axiosServer = new AxiosServer();
export const componentService = new ComponetsService(axiosServer.server);
