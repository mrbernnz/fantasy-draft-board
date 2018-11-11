import configureMockStore from 'redux-mock-store';
import promiseMiddleware from 'redux-promise-middleware';
import * as actions from './actions';
import * as types from '../constants';
import fetchMock from 'fetch-mock';
import { playersData } from '../mocks/playerData';

const middleware = [promiseMiddleware()];
const mockStore = configureMockStore(middleware);

describe('Async Players Action', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('should create FETCH_PLAYERS_PENDING & FETCH_PLAYERS_FULFILLED when players are fetched', () => {
    const payload = playersData;

    fetchMock.getOnce('/players', {
      status: 200,
      body: payload
    });

    const store = mockStore({
      players: playersData
    });

    const expectedAction = [
      types.FETCH_PLAYERS_PENDING,
      types.FETCH_PLAYERS_FULFILLED
    ];

    return store
      .dispatch(actions.fetchPlayers())
      .then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);

        expect(actionTypes).toEqual(expectedAction);
      })
      .catch(err => console.log(err));
  });
});
