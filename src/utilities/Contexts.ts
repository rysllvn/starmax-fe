import { createContext } from 'react';
import { initialState } from './AppReducer';
import { AppStateType } from './types';

export const DispatchContext = createContext<Function>(() => {});
export const AppStateContext = createContext<AppStateType>(initialState);
