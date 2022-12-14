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
}
