import { List } from 'immutable';
import {SET_CARDS, DELETE_CARD, EDIT_CARD} from '../actions/cardActions';

const initialState = List();

const cardsReducer = (state = initialState, action) => {
  let newState;

  switch(action.type) {
    case SET_CARDS:
      newState = action.data.map((item, i) => {
        item['index'] = i;
        return item;
      });
      return List(newState);
    case DELETE_CARD:
       newState = state.delete(action.data).map((item, i) => {
        item['index'] = i;
        return item;
      });
      return List(newState);

    case EDIT_CARD:
      console.log('state: ', state.toJS());
      console.log('action.data: ', action.data);
      newState = state.update(action.data.index, (card) => {
        return action.data;

      })
      return List(newState);



    default:
     return state;
  }


};


export default cardsReducer;