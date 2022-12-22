import { useEffect, useState } from 'react';
import HorizontalItemSection from '../components/HorizontalItemSection';
import eCommerce_API from '../utilities/ApiConfig';
import { ItemType } from '../utilities/types';

export default function ShopPage() {
  const [items, setItems] = useState<ItemType[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    eCommerce_API.get('/items/all')
    .then(resp => {
      setLoaded(true);
      setItems(resp.data);
    })
  }, [])

  return (
    <>
    {
      loaded ?
      <div>
        <HorizontalItemSection items={items.slice(0, 4)} bgColor="bg-emerald-200" />
        <HorizontalItemSection items={items.slice(0, 4)} bgColor="bg-slate-200" />
        <HorizontalItemSection items={items.slice(0, 4)} bgColor="bg-slate-400" />
      </div>
      :
      <div>Loading...</div>
    }
    </>
  )
}