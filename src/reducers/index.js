import { combineReducers } from 'redux';
import auth from './auth_reducer';
import events from './events_reducer';

export default combineReducers({
  auth, 
  events
});