import { useEffect, useState } from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

import { ItemType } from '../utilities/types';

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
        className='flex flex-col justify-center justify-items-center h-8 w-8 cursor-pointer'
        onClick={() => onClick()}>
        {
          left ? <ChevronLeftIcon /> : <ChevronRightIcon />
        }
      </div>
  )
}

type ItemProps = { item: ItemType, curr: number };
function Item({ item, curr }: ItemProps) {
  const handleClick = () => {

  };

  return (
    <div
      onClick={handleClick}
      className='min-w-full transition-all'
      style={{
        transform: `translate(-${curr * 100}%)`
      }}
    >
      <img
        src={item.imgUrl}
        alt={item.description}
      />
    </div>
  )
}