export const SET_CARDS = 'SET_CARDS';
export const DELETE_CARD = 'DELETE_CARD';
export const EDIT_CARD = 'EDIT_CARD';
export const CHANGE_STATUS = 'CHANGE_STATUS';

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

export const editCard = (data) => {
  return {
    type: EDIT_CARD,
    data,
  }
}

export const changeStatus = (data) => {
  return {
    type: CHANGE_STATUS,
    data,
  }
}