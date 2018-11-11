import * as ActionTypes from '../constants';

export default (state = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_PLAYERS_REQUEST:
      return state;
    case ActionTypes.FETCH_PLAYERS_SUCCESSFUL:
      return [...action.players];
    case ActionTypes.FETCH_PLAYERS_FAILURE:
      return [...action.err];
    default:
      return state;
  }
};
