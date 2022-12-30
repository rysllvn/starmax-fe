import { useContext, useEffect, useState } from 'react';
import AdminTable from '../components/AdminTable';
import NewItem from '../components/NewItem';
import { SwapiGetter } from '../components/SwapiGetter';
import eCommerce_API from '../utilities/ApiConfig';
import { AppStateContext } from '../utilities/Contexts';
import { ItemType } from '../utilities/types';

export default function AdminInventoryPage() {
  const applicationState = useContext(AppStateContext);
  const userData = applicationState.userData;
  const [items, setItems] = useState<ItemType[]>([]);
  const [showNewItem, setShowNewItem] = useState(false);

  useEffect(() => {
    eCommerce_API.get("/items/all").then((resp) => {
      const fetchedItems: ItemType[] = resp.data;
      setItems(fetchedItems);
    });
  }, []);

  function handleAdd(newItem: ItemType) {
    eCommerce_API.post('/items', newItem, { headers: { authorization: userData!.token }})
    .then(() => {
      const updatedItems = [...items];
      updatedItems.push(newItem);
      setItems(updatedItems);
    }).catch(error => {
      console.error(error);
    });
  }

  return (
    <>
      <h1 className='text-3xl'>Manage Inventory</h1>
      <button
        onClick={() => setShowNewItem(true)}
        className='p-4 bg-slate-500'>Add New Item</button>
      {showNewItem &&
        <div className='flex justify-between'>
          <NewItem onAddItem={handleAdd}/>
          <SwapiGetter />
        </div>
      }
      {!showNewItem && <AdminTable items={items} />}
    </>
  )
}
