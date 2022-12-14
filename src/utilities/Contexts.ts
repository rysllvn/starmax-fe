import { createContext } from 'react';
import { CartItemType } from './types';

export const DispatchContext = createContext<Function>(() => {});
export const CartContext = createContext<CartItemType[]>([]);
export const AuthContext = createContext<string | null>(null);
