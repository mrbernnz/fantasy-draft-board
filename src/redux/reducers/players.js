import * as types from '../constants';

export default (state = [], action) => {
  switch (action.type) {
    case types.FETCH_PLAYERS_PENDING:
      return state;
    case types.FETCH_PLAYERS_FULFILLED:
      return [...action.payload];
    case types.FETCH_PLAYERS_REJECTED:
      return [...action.payload];
    default:
      return state;
  }
};
