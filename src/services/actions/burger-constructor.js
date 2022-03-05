import { v4 as uuidv4 } from 'uuid';

export const SET_BUN = 'SET_BUN';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const MOVE_ITEM = 'MOVE_ITEM';
export const CLEAR_CONSTRUCTOR = 'CLEAR_CONSTRUCTOR';

export function setBun(id) {
  return { 
    type: SET_BUN, 
    payload: id
  }
}

export function addItem(id) {
  const uid = uuidv4();
  return { 
    type: ADD_ITEM, 
    payload: { uid, id } 
  }
}

export function removeItem(uid) {
  return { 
    type: REMOVE_ITEM, 
    payload: uid
  }
}

export function moveItem(items) {
  return { 
    type: MOVE_ITEM, 
    payload: items
  }
}

export function clearConstructor() {
  return { 
    type: CLEAR_CONSTRUCTOR
  }
}
