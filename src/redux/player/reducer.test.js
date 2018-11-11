import PlayersReducer from './reducer';
import * as ActionTypes from '../constants';

import playersData from '../../mocks/playerData';

describe('PlayersReducer', () => {
  it('should have a default state', () => {
    expect(PlayersReducer(undefined, { type: '' })).toEqual([]);
  });

  it('should fetch playersData', () => {
    expect(
      PlayersReducer([], {
        type: ActionTypes.FETCH_PLAYERS_SUCCESSFUL,
        players: playersData
      })
    ).toEqual(playersData);
  });
});
