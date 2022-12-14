import { ItemType } from '../utilities/types';
import ItemCard from './ItemCard';


type HIProps = { items: ItemType[], bgColor: String };
export default function HorizontalItemSection({ items, bgColor }: HIProps) {
  return (
    <section className={`flex justify-between p-10 ${bgColor}`}>
      {items.map((item) => <ItemCard key={item.id} item={item} />)}
    </section>
  )
}

