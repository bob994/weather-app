import { CSSProperties } from 'react';

import SunnyIcon from '../assets/icons/Sunny.svg';
import RainyIcon from '../assets/icons/Rainy.svg';

export type WeatherType = 'Sun' | 'Clouds' | 'Rain';

const weatherStyles: Record<WeatherType, CSSProperties> = {
  Sun: {
    backgroundColor: '#EEB625',
    backgroundImage: `url(${SunnyIcon})`,
  },
  Clouds: {
    backgroundColor: '#EEB625',
    backgroundImage: `url(${SunnyIcon})`,
  },
  Rain: {
    backgroundColor: '#61A9A6',
    backgroundImage: `url(${RainyIcon})`,
  },
};

export const getWeatherStyle = (type: WeatherType): CSSProperties =>
  weatherStyles[type] ? weatherStyles[type] : weatherStyles.Rain;
