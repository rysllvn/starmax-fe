import { createContext } from 'react';
import { AuthType, CartItemType } from './types';

export const DispatchContext = createContext<Function>(() => {});
export const CartContext = createContext<CartItemType[]>([]);
export const AuthContext = createContext<AuthType | null>(null);
