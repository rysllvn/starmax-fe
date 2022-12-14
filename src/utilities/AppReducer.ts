import { AppStateType } from './types';

export const initialState: AppStateType = {
  authToken: null,
  cart: [],
};

export function reducer(state: AppStateType, action: { [key: string]: any }) {
  switch (action.type) {
    case 'updateCart':
      return {
        ...state,
        cart: action.newCart,
      }
    default:
      break;
  }
  return state;
}
