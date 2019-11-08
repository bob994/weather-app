import { CSSProperties } from 'react';

import SunnyIcon from '../assets/icons/Sunny.svg';
import RainyIcon from '../assets/icons/Rainy.svg';

type WeatherType = 'sunny' | 'cloudly' | 'rainy';

const weatherStyles: Record<WeatherType, CSSProperties> = {
  sunny: {
    backgroundColor: '#EEB625',
    backgroundImage: `url(${SunnyIcon})`,
  },
  cloudly: {
    backgroundColor: '#EEB625',
    backgroundImage: `url(${SunnyIcon})`,
  },
  rainy: {
    backgroundColor: '#61A9A6',
    backgroundImage: `url(${RainyIcon})`,
  },
};

export const getWeatherStyle = (type: WeatherType): CSSProperties =>
  weatherStyles[type] ? weatherStyles[type] : weatherStyles.rainy;
