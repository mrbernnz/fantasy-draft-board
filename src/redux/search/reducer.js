import * as types from '../constants';

export default (state = '', action) => {
  switch (action.type) {
    case types.GET_TERM:
      return action.payload;
    default:
      return state;
  }
};
