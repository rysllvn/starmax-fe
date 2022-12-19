import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UPDATE_CART_ACTION_TYPE } from '../utilities/constants';
import { CartContext, DispatchContext } from '../utilities/Contexts';

import { fakeItemArray } from '../utilities/mock_data';
import { ItemType } from '../utilities/types';



export default function ItemDetailPage() {
  const [item, setItem] = useState<ItemType | null>();
  const params = useParams();
  const dispatch = useContext(DispatchContext);
  const cart = useContext(CartContext);

  useEffect(() => {
    setItem(fakeItemArray.find((item) => item.id === params.itemId));
  }, [params])

  function handleAddToCart() {
    const newCart = { ...cart };
    if (item && cart[item.id]) {
      newCart[item.id].amount = cart[item.id].amount + 1;
    } else if (item) {
      newCart[item.id] = { itemId: item.id, amount: 1};
    }
    dispatch({ type: UPDATE_CART_ACTION_TYPE, newCart });
  }

  return (
    <>
      {
        item ?
        <div>
          <h1>{item.name}</h1>
          <div>{item.description}</div>
          <img
            src={item.imgUrl}
            alt={item.description}
          />
          <div>MSRP: {item.msrp}</div>
          <div>Current Price: {item.currentPrice}</div>
          <button onClick={handleAddToCart}>Add to Cart</button>
          <button>Add to Cart and Checkout</button>
        </div>
        
      :
        <div>Loading...</div>
      }
      
    </>
  )
}