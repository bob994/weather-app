import { WeatherType } from '../utils/getWeatherStyle';

export interface WeatherResponse {
  name: string;
  main: {
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_maxmin: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  weather: {
    description: string;
    main: WeatherType;
    icon: string;
  }[];
}
