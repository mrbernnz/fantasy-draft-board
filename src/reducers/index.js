import { combineReducers } from 'redux';
import PlayersReducer from './players';

export default combineReducers({
  players: PlayersReducer
});
