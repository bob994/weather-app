import axios from 'axios';

const url = 'https://api.openweathermap.org/data/2.5/';

const proccessEndpoint = (endpoint: string) =>
  `${url}${endpoint}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`;

export const getWeatherByCoordinates = (lat: number, lon: number) =>
  axios.get(proccessEndpoint(`weather?lat=${lat}&lon=${lon}`));

export const getWeatherByCityName = (name: string) =>
  axios.get(proccessEndpoint(`weather?q=${name}`));
