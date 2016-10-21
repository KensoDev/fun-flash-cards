import { Record } from 'immutable'

var InitialState = Record({
  groups: [
    "1-10",
    "11-20",
    "21-30",
    "31-40"
  ]
});

const initialState = new InitialState();

export default function groups(state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.merge(state)

  return state;
}

