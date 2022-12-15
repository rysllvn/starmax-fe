import { AppStateType } from './types';

export const initialState: AppStateType = {
  authToken: null,
  cart: {},
};

export function reducer(state: AppStateType, action: { [key: string]: any }) {
  switch (action.type) {
    case 'updateCart':
      // need to send new cart to database also
      // send array of
      return {
        ...state,
        cart: action.newCart,
      }
    default:
      break;
  }
  return state;
}
