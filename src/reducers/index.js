'use strict'

import { combineReducers } from 'redux'
import device from './Device';
import groups from './Groups';
import words from './Words';
import route from './Route';

const rootReducer = combineReducers({
  device,
  groups,
  words,
  route
})

export default rootReducer
