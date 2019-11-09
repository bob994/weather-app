import { createAsyncAction, ActionType, createReducer } from 'typesafe-actions';
import { WeatherResponse } from '../../types/WeatherResponse';
import { ReduxState } from '..';

export const getCurrentWeather = createAsyncAction(
  'GET_CURRENT_WEATHER_REQUEST',
  'GET_CURRENT_WEATHER_SUCCESS',
  'GET_CURRENT_WEATHER_FAILURE'
)<undefined, WeatherResponse, undefined>();

export type GetCurrentWeatherRequestAction = ActionType<
  typeof getCurrentWeather.request
>;
export type GetCurrentWeatherSuccessAction = ActionType<
  typeof getCurrentWeather.success
>;
export type GetCurrentWeatherFailureAction = ActionType<
  typeof getCurrentWeather.failure
>;

type WeatherActions =
  | GetCurrentWeatherRequestAction
  | GetCurrentWeatherSuccessAction
  | GetCurrentWeatherFailureAction;

export interface WeatherState {
  currentWeather?: WeatherResponse;
  fetching: boolean;
}

const INITIAL_STATE: WeatherState = {
  fetching: false,
};

export const weatherReducer = createReducer<WeatherState, WeatherActions>(
  INITIAL_STATE
)
  .handleAction(getCurrentWeather.request, state => ({
    ...state,
    fetching: true,
  }))
  .handleAction(getCurrentWeather.success, (state, { payload }) => ({
    ...state,
    currentWeather: payload,
    fetching: false,
  }))
  .handleAction(getCurrentWeather.failure, state => ({
    ...state,
    fetching: false,
  }));

export const getCurrentWeatherSelector = (state: ReduxState) =>
  state.weather.currentWeather;
