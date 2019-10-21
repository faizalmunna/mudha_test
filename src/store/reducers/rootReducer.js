import listReducer from './listItems'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  list: listReducer
});

export default rootReducer

// the key name will be the data property on the state object