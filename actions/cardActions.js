export const SET_CARDS = 'SET_CARDS';
export const DELETE_CARD = 'DELETE_CARD';

export const setCards = (data) => {
  return {
    type: SET_CARDS,
    data,
  }
}

export const deleteCard = (data) => {
  return {
    type: DELETE_CARD,
    data,
  }
}