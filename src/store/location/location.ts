import { createAsyncAction, ActionType, createReducer } from 'typesafe-actions';
import { ReduxState } from '..';

export const getLocation = createAsyncAction(
  'GET_LOCATION_REQUEST',
  'GET_LOCATION_SUCCESS',
  'GET_LOCATION_FAILURE'
)<string, Coordinates, undefined>();

export type GetLocationRequestAction = ActionType<typeof getLocation.request>;
export type GetLocationSuccessAction = ActionType<typeof getLocation.success>;
export type GetLocationFailureAction = ActionType<typeof getLocation.failure>;

type LocationActions =
  | GetLocationRequestAction
  | GetLocationSuccessAction
  | GetLocationFailureAction;

export interface LocationState {
  coordinates?: Coordinates;
  fetching: boolean;
}

const INITIAL_STATE: LocationState = {
  fetching: false,
};

export const locationReducer = createReducer<LocationState, LocationActions>(
  INITIAL_STATE
)
  .handleAction(getLocation.request, state => ({ ...state, fetching: true }))
  .handleAction(getLocation.success, (state, { payload }) => ({
    ...state,
    coordinates: payload,
    fetching: false,
  }))
  .handleAction(getLocation.failure, state => ({ ...state, fetching: false }));

export const getCoordinates = (state: ReduxState) => state.location.coordinates;
