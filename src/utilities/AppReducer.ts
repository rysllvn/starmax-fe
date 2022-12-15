import { AppStateType } from './types';

export const initialState: AppStateType = {
  userData: null,
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
    case 'setUserData':
      return {
        ...state,
        userData: action.userData,
      }  
    default:
      break;
  }
  return state;
}
