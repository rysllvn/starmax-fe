import { ItemType } from '../utilities/types';
import AdminTableRow from './AdminTableRow';

export default function AdminTable({ items }: { items: ItemType[] }) {
  return (
    <table className='w-full'>
      <thead className='bg-slate-300'>
        <tr>
          <th className='w-1/6'>Name</th>
          <th>Description</th>
          <th>Type</th>
          <th>MSRP</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Img Url</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => <AdminTableRow key={item.name} item={item} />)}
      </tbody>
    </table>
  )
}
