import { useContext } from 'react';
import { CartContext, DispatchContext } from '../utilities/Contexts';

import { ItemType } from '../utilities/types';

export default function ItemCard({ item }: { item: ItemType }) {
  const dispatch = useContext(DispatchContext);
  const cart = useContext(CartContext);

  const handleAddToCart = () => {
    const newCart = cart ? [...cart] : [];
    newCart.push( { itemId: item.id, amount: 1 });
    dispatch && dispatch({ type: 'addItemToCart', newCart });
  };

  return (
    <div className='w-64 h-64 bg-slate-100 rounded-md p-10 shadow-md cursor-pointer hover:scale-125'>
      <img
        src={item.imgUrl}
        alt={item.description}
      />
      <div>{item.name}</div>
      <div>${item.currentPrice}</div>
      <button
        className='hover:scale-125 bg-rose-500 p-1 rounded'
        onClick={handleAddToCart}
      >
        Add to cart
      </button>
    </div>
  )
}
