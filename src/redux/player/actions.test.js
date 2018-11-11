import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actions from './actions';
import * as types from '../constants';
import playersData from '../../mocks/playerData';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Getting players actions', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test('should create FETCH_PLAYERS_FULFILLED after successfully fetching players', () => {
    moxios.wait(() => {
      const req = moxios.requests.mostRecent();
      req.respondWith({
        status: 200,
        response: playersData
      });
    });

    const expectedActions = [
      types.FETCH_PLAYERS_PENDING,
      types.FETCH_PLAYERS_FULFILLED
    ];

    const store = mockStore({ players: [] });

    return store.dispatch(actions.fetchPlayers()).then(() => {
      const dispatchedActions = store.getActions();
      const actionTypes = dispatchedActions.map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    });
  });
});
