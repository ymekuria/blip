import { SAVE_EVENT, DELETE_SAVED_EVENTS } from '../actions/types';

// TODO: only return unique events in state array
export default function(state = [], action) {
  switch (action.type) {
    case SAVE_EVENT:
      return [...state, action.payload];
    case DELETE_SAVED_EVENTS:
      return [];
    default:
      return state;
  }
}
