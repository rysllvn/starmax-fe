import { AppStateType } from './types';

export const initialState: AppStateType = {
  auth: null,
  cart: [],
};

export function reducer(state: AppStateType, action: { [key: string]: any }) {
  switch (action.type) {
    case 'addItemToCart':
      return {
        ...state,
        cart: action.newCart
      }
    default:
      break;
  }
  return state;
}
