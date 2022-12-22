import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import eCommerce_API from '../utilities/ApiConfig';
import { UPDATE_CART_ACTION_TYPE } from '../utilities/constants';
import { AppStateContext, DispatchContext } from '../utilities/Contexts';

import { ItemType } from '../utilities/types';
import tieBomber from '../assets/tiebomber.png';


export default function ItemDetailPage() {
  const navigate = useNavigate();
  const params = useParams();
  const [item, setItem] = useState<ItemType | null>();
  const dispatch = useContext(DispatchContext);
  const applicationState = useContext(AppStateContext);
  const cart = applicationState.cart;

  useEffect(() => {
    eCommerce_API.get("/items/all",{
    }).then((resp) => {
      const items: ItemType[] = resp.data;
      const thisItem = items.find(item => item.id === params.itemId);
      setItem(thisItem);
    });
  }, [params])

  function handleAddToCart() {
    const newCart = { ...cart };
    if (item?.id && cart[item.id]) {
      newCart[item.id].amount = cart[item.id].amount + 1;
    } else if (item?.id) {
      newCart[item.id] = { itemId: item.id, amount: 1};
    }
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