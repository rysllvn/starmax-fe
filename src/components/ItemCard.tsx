import { useNavigate } from 'react-router-dom';

import { ItemType } from '../utilities/types';
import tiebomer from '../assets/tiebomber.png';

export default function ItemCard({ item }: { item: ItemType }) {
  const navigate = useNavigate();
  return (
    <div 
      onClick={() => navigate(`/item/${item.id}`)}
      className='w-64 h-64 bg-slate-800 rounded-md p-4 shadow-md cursor-pointer hover:scale-125'
    >
      <div className='h-48 w-48'>
        <img
          src={item.img_url ? item.img_url : tiebomer}
          alt={item.description}
        />
      </div>
      <div className='text-blue-100'>{item.name}</div>
    </div>
  )
}
