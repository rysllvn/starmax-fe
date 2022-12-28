import { ItemType } from '../utilities/types';

export default function AdminTableRow({ item }: { item: ItemType }) {
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.description}</td>
      <td>{item.type}</td>
      <td>{item.msrp}</td>
      <td>{item.currentPrice}</td>
      <td>{item.stock}</td>
      <td>{item.imgUrl}</td>
    </tr>
  )
}
