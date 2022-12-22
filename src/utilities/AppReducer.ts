import { SET_USER_ACTION_TYPE, UPDATE_CART_ACTION_TYPE, UPDATE_ITEMS } from './constants';
import { AppStateType } from './types';
import { convertItemArrayToMap } from './utility_functions';

export const initialState: AppStateType = {
  userData: null,
  cart: new Map(),
  items: new Map(),
  itemsLoaded: false,
};

/***********************************************************************************************
// reducer fires when dispatch(action) called
// the current state and the action that was passed into dispatch is passed into reducer
// whatever is returned by dispatch will be the new global application state found in App.tsx
************************************************************************************************/
export function reducer(state: AppStateType, action: { [key: string]: any }) {
  switch (action.type) {
    case UPDATE_CART_ACTION_TYPE:
      return {
        ...state,
        cart: action.newCart,
      }
    case SET_USER_ACTION_TYPE:
      return {
        ...state,
        userData: action.userData,
      }
    case UPDATE_ITEMS:
      return {
        ...state,
        itemsLoaded: true,
        items: convertItemArrayToMap(action.items),
      }
    default:
      break;
  }
  return state;
}
