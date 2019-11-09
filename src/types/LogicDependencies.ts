import { AxiosStatic } from 'axios';

export interface LogicDependencies {
  httpClient: AxiosStatic;
  API_KEY: string;
  API_URL: string;
}
