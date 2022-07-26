import { combineReducers } from 'redux';
import session from './session_reducer.js';
import errors from './errors_reducer'
import EntitiesReducer from './entities/entities_reducer.js';

const RootReducer = combineReducers({
  entities: EntitiesReducer,
  session: session, 
  errors: errors,
});

export default RootReducer;