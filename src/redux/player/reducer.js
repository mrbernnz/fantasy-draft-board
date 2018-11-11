import * as ActionTypes from '../constants';

export default (state = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_PLAYERS_PENDING:
      return state;
    case ActionTypes.FETCH_PLAYERS_FULFILLED:
      return [...action.players];
    case ActionTypes.FETCH_PLAYERS_REJECTED:
      return [...action.err];
    default:
      return state;
  }
};
