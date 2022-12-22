import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { UPDATE_CART_ACTION_TYPE } from '../utilities/constants';
import { AppStateContext, DispatchContext } from '../utilities/Contexts';

import tieBomber from '../assets/tiebomber.png';


export default function ItemDetailPage() {
  const items = useContext(AppStateContext).items;
  const navigate = useNavigate();
  const params = useParams();
  const item = params.itemId ? items.get(params.itemId) : null;
  const dispatch = useContext(DispatchContext);
  const applicationState = useContext(AppStateContext);
  const cart = applicationState.cart;

  function handleAddToCart() {
    const newCart = new Map(cart);
    if (item) newCart.set(item, 1);
    dispatch({ type: UPDATE_CART_ACTION_TYPE, newCart });
    navigate('/item-added-to-cart', { state: { itemId: item?.id } });
  }

  return (
    <>
      {
        item ?
        <div className='flex flex-col items-center gap-4'>
          <h1 className='text-4xl'>{item.name}</h1>
          <div className='text-lg'>{item.description}</div>
          <img
            className='w-96 bg-slate-300 p-8 rounded-xl'
            src={item.img_url ? item.img_url : tieBomber }
            alt={`${item.name} ${item.description}`}
          />
          
          <div>MSRP: {item.msrp}</div>
          <div>Current Price: {item.current_price}</div>
          <button
            className='bg-slate-200 p-4 rounded w-fit'
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      :
        <div>Loading...</div>
      }
    </>
  )
}