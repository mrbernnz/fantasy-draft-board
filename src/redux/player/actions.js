import axios from 'axios';
import * as ActionTypes from '../constants';
import Logger from '../../utils/logger';

const fetchPlayersRequest = () => ({ type: ActionTypes.FETCH_PLAYERS_REQUEST });

const fetchPlayersSuccess = players => ({
  type: ActionTypes.FETCH_PLAYERS_SUCCESSFUL,
  players
});

const fetchPlayersFailure = err => ({
  type: ActionTypes.FETCH_PLAYERS_FAILURE,
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
    Logger(err, ActionTypes.FETCH_PLAYERS_FAILURE).error();
  }
};

export const fetchPlayers = () => dispatch => {
  dispatch(fetchPlayersRequest());
  return fetchingPlayers(dispatch);
};
