import axios from 'axios';
import * as types from '../constants';
import Logger from '../../utils/logger';

const fetchPlayersRequest = () => ({ type: types.FETCH_PLAYERS_PENDING });

const fetchPlayersSuccess = players => ({
  type: types.FETCH_PLAYERS_FULFILLED,
  players
});

const fetchPlayersFailure = err => ({
  type: types.FETCH_PLAYERS_REJECTED,
  err
});

const fetchingPlayers = async dispatch => {
  const url = '/stats?statType=seasonStats&season=2017&week=1&format=json';
  try {
    const res = await axios.get(url);
    const { data: { players } } = res;
    dispatch(fetchPlayersSuccess(players));
  } catch (err) {
    dispatch(fetchPlayersFailure(err));
    Logger(err, types.FETCH_PLAYERS_REJECTED).error();
  }
};

export const fetchPlayers = () => dispatch => {
  dispatch(fetchPlayersRequest());
  return fetchingPlayers(dispatch);
};
