import { createContext } from 'react';
import { CartType, UserType } from './types';

export const DispatchContext = createContext<Function>(() => {});
export const CartContext = createContext<{ [key: string]: CartType}>({});
export const AuthContext = createContext<UserType | null>(null);
