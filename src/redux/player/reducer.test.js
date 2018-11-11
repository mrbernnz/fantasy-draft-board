import PlayersReducer from './players';
import * as types from '../constants';

import playersData from '../../mocks/playerData';

describe('PlayersReducer', () => {
  it('should have a default state', () => {
    expect(PlayersReducer(undefined, { type: '' })).toEqual([]);
  });

  it('should fetch playersData', () => {
    expect(
      PlayersReducer([], {
        type: types.FETCH_PLAYERS_FULFILLED,
        payload: playersData
      })
    ).toEqual(playersData);
  });
});
