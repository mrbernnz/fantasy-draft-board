import axios from 'axios';
import * as types from '../constants';
import Logger from '../logger';

const getPlayers = async () => {
  const url = '/stats?statType=seasonStats&season=2017&week=1&format=json';
  try {
    const res = await axios.get(url);
    return res.data.players;
  } catch (err) {
    Logger(err, 'FETCH_PLAYERS_ERROR').error();
  }
};

export const fetchPlayers = () => ({
  type: types.FETCH_PLAYERS,
  payload: getPlayers()
});
