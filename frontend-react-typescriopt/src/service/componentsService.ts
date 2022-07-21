import { AxiosInstance } from 'axios';

export class ComponetsService {
  private componentService: AxiosInstance;

  constructor(server: AxiosInstance) {
    this.componentService = server;
  }

  async getComponentsTypes() {
    return await this.componentService.get(`/form/tipo-componente`);
  }
}
