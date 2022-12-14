export type ItemType = {
  id: string;
  name: string;
  stock: number;
  msrp: number;
  description: string;
  imgUrl: string;
  currentPrice: number;
};

export type cartItemType = {
  id : string;
  name : string;
  qty : number;
  price : number;
};

export type CartItemType = {
  itemId: string;
  amount: number;
};

export type AppStateType = {
  authToken: string | null;
  cart: CartItemType[];
};
