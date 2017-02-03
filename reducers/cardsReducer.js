import { List } from 'immutable';
import {SET_ITEMS} from '../actions/cardsActions';

const initialState = List();

const cardsReducer = (state = initialState, action) => {
  let newState = state;

  switch(action.type) {
    case SET_ITEMS:
      return List(action.data);

    default:
     return newState;
  }


};


export default cardsReducer;