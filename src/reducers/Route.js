import { Record } from 'immutable'
import * as selectionActionTypes from '../constants/SelectionActionTypes';

const initialRoute = {
  index: 0,
  name: 'stageSelector',
  data: {}
}

var InitialState = Record({
  route: initialRoute
});

const initialState = new InitialState();

export default function routes(state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.merge(state)

  return state;
}

