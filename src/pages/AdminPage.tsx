import { useEffect, useState } from 'react';
import { ItemType } from '../utilities/types';

export default function AdminPage() {
  const [items, setItems] = useState<ItemType[]>([]);

  return (
    <>
      <h1>Admin</h1>
    </>
  )
}
