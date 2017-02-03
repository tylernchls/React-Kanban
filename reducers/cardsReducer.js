import { List } from 'immutable';
import {SET_CARDS, DELETE_CARD} from '../actions/cardActions';

const initialState = List();

const cardsReducer = (state = initialState, action) => {
  let newState = state;

  switch(action.type) {
    case SET_CARDS:
      return List(action.data);
    case DELETE_CARD:
      return newState.delete(action.data);

    default:
     return newState;
  }


};


export default cardsReducer;