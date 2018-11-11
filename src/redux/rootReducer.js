import { combineReducers } from 'redux';
import PlayersReducer from './player/reducer';

export default combineReducers({
  players: PlayersReducer
});
