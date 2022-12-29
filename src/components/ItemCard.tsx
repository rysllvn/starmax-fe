import { useNavigate } from 'react-router-dom';

import { ItemType } from '../utilities/types';
import tiebomer from '../assets/tiebomber.png';

export default function ItemCard({ item }: { item: ItemType }) {
  const navigate = useNavigate();
  return (
    <div 
      onClick={() => navigate(`/item/${item.id}`)}
      className='w-64 h-64 bg-slate-800 rounded-md p-4 shadow-lg shadow-emerald-300 cursor-pointer hover:scale-125'
    >
      <div className='h-1/2 w-1/2'>
        <img
          src={item.imgUrl ? item.imgUrl : tiebomer}
          alt={item.description}
        />
      </div>
      <div className='text-blue-100'>{item.name}</div>
      <div className={item.msrp !== item.currentPrice ? 'line-through decoration-red-500 decoration-2' : undefined}>{item.msrp}</div>
      {
        item.msrp !== item.currentPrice && <div>{item.currentPrice}</div>
      }
    </div>
  )
}
