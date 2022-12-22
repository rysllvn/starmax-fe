import { ItemType } from '../utilities/types';

export default function AdminTableRow({ item }: { item: ItemType }) {
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.description}</td>
      <td>{item.type}</td>
      <td>{item.msrp}</td>
      <td>{item.current_price}</td>
      <td>{item.stock}</td>
      <td>{item.img_url}</td>
    </tr>
  )
}
