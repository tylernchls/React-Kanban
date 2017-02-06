import { List } from 'immutable';
import {SET_CARDS, DELETE_CARD} from '../actions/cardActions';

const initialState = List();

const cardsReducer = (state = initialState, action) => {
  let newState = state;

  switch(action.type) {
    case SET_CARDS:
      console.log('action.data: ', action.data);
      let index = action.data.map((item, i) => {
        item['index'] = i;
        return item;
      });
      return List(index);
    case DELETE_CARD:
      let newIndex = newState.delete(action.data).map((item, i) => {
        item['index'] = i;
        return item;
      });
      return List(newIndex);

    default:
     return newState;
  }


};


export default cardsReducer;