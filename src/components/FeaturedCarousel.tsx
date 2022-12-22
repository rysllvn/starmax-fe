import { useEffect, useState } from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

import { ItemType } from '../utilities/types';
import tiebomer from '../assets/tiebomber.png';
import { Link } from 'react-router-dom';

type FeaturedProps = { items: ItemType[] };
export default function FeaturedCarousel({ items }: FeaturedProps) {
  const [currentItem, setCurrentItem] = useState(0);
  const [stop, setStop] = useState(false);

  useEffect(() => {
    if (stop) return;

    setTimeout(() => {
      const newCurrentItem = currentItem < items.length - 1 ? currentItem + 1 : 0;
      setCurrentItem(newCurrentItem);
    }, 3000);
  }, [items, currentItem, stop]);

  const handleMove = (forward: boolean) => {
    let newCurrentItem;
    if (forward) {
      newCurrentItem = currentItem < items.length - 1 ? currentItem + 1 : 0;
    } else {
      newCurrentItem = currentItem > 0 ? currentItem - 1 : items.length - 1;
    }

    setCurrentItem(newCurrentItem);
    setStop(true);
  };

  return (
    <div className="flex items-center">
      <Control onClick={() => handleMove(false)} left={true} />
      <div
        className='flex flex-nowrap overflow-hidden w-96'
      >
        {items.map((item) => <Item key={item.id} item={item} curr={currentItem} />)}
      </div>
      <Control onClick={() => handleMove(true)} left={false} />
    </div>
  )
}

type ControlProps = { left: boolean; onClick: Function };
function Control({ left, onClick }: ControlProps) {
  return (
      <div
        className={`flex flex-col justify-center justify-items-center h-full w-8 
                    hover:bg-slate-700 cursor-pointer bg-slate-800 
                    ${left ? 'rounded-tl-lg rounded-bl-lg' : 'rounded-tr-lg rounded-br-lg'}`}
        onClick={() => onClick()}>
        {
          left ? <ChevronLeftIcon className='text-white'/> : <ChevronRightIcon className='text-white' />
        }
      </div>
  )
}

type ItemProps = { item: ItemType, curr: number };
function Item({ item, curr }: ItemProps) {
  const handleClick = () => {

  };

  return (
    <Link
      to={`/item/${item.id}`}
      onClick={handleClick}
      className='min-w-full transition-all bg-slate-800 p-4'
      style={{
        transform: `translate(-${curr * 100}%)`
      }}
    >
      <img
        src={item.imgUrl ? item.imgUrl : tiebomer}
        alt={item.description}
      />
    </Link>
  )
}