export type ItemType = {
  id: string;
  name: string;
  stock: number;
  msrp: number;
  description: string;
  imgUrl: string;
  currentPrice: number;
}

export type cartItemType = {
  item_id : string;
  order_id : string;
  name : string;
  qty : number;
  price : number;
};

export type CartItemType = {
  itemId: string;
  amount: number;
};

export type AuthType = {
  token: string;
};

export type AppStateType = {
  auth: AuthType | null;
  cart: CartItemType[];
};
