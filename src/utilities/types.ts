/*****************************************************
  Global state sitting in App component 
  Values of this are provided to the rest of the app with multiple Contexts
  State is updated with dispatch which is also provided with a Context
******************************************************/
export type AppStateType = {
  userData: UserType | null;
  cart: { [key: string]: CartType };
};

/******************************************************************
  The following types all correspond to a specific table in the DB.
  See the ERD for details 
*******************************************************************/
export type UserType = {
  token: string;
  email: string;
  givenName: string;
  surname: string;
  role?: string;
  cardNumber?: string;
  expirationDate?: string;
  password?: string;
};

export type AddressType = {
  id: string;
  userId?: string;
  street: string;
  city: string;
  state: string;
  zip: string;
};

export type ItemTypeT = 'Clothing' | 'Vehicles' | 'Electronics';

export type ItemType = {
  id?: string;
  name?: string;
  stock?: number;
  msrp?: number;
  description?: string;
  imgUrl?: string;
  currentPrice?: number;
  current_price?: number;
  type?: ItemTypeT;
  img_url?: string;
};

export type OrderType = {
  id: string;
  userId?: string;
  purchaseDate?: Date;
  status?: string;
  shippingId?: string;
  deliveredDate?: Date;
};

export type OrderJunctionType = {
  itemId: string;
  orderId: string;
  amount: number;
  purchasePrice: number;
};

export type CartType = {
  itemId: string;
  amount: number;
  userId?: string;
};

export type cartItemType = {
  itemId : string;
  orderId : string;
  name : string;
  imgUrl?: string;
  amount : number;
  purchasePrice : number;
};
