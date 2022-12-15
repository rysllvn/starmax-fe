import { createContext } from 'react';
import { CartType } from './types';

export const DispatchContext = createContext<Function>(() => {});
export const CartContext = createContext<{ [key: string]: CartType}>({});
export const AuthContext = createContext<string | null>(null);
