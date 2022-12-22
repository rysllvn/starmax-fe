import { useContext, useEffect, useState } from 'react';
import AdminTable from '../components/AdminTable';
import NewItem from '../components/NewItem';
import eCommerce_API from '../utilities/ApiConfig';
import { AppStateContext } from '../utilities/Contexts';
import { ItemType } from '../utilities/types';

export default function AdminInventoryPage() {
  const applicationState = useContext(AppStateContext);
  const userData = applicationState.userData;
  const [items, setItems] = useState<ItemType[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    eCommerce_API.get("/items/all").then((resp) => {
      const fetchedItems: ItemType[] = resp.data;
      setItems(fetchedItems);
      setLoaded(true);
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
      {
      loaded
      ?
        <AdminTable items={items} />
      :
        <div>Loading...</div>
      }
      <NewItem onAddItem={handleAdd}/>
    </>
  )
}
