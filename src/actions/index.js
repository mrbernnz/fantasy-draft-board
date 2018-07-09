import axios from 'axios';
import * as types from '../constants';
import Logger from '../logger';

const getPlayers = async () => {
  const url = `http://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2017&week=1&format=json`;
  try {
    const res = await axios.get(url);
    const players = await res.data.players;

    return players;
  } catch (err) {
    Logger(err, '').error();
  }
};

export const fetchPlayers = () => ({
  type: types.FETCH_PLAYERS,
  payload: getPlayers()
});
