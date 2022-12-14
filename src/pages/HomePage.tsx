import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

import { ItemType } from '../utilities/types';

import tiebomer from '../assets/tiebomber.png'
import xwing from '../assets/xwing.png'


const dummyItems = [
  {
    id: '1',
    name: 'Tie Fighter',
    stock: 8,
    msrp: 10,
    description: 'shiny sword',
    imgUrl: tiebomer,
    currentPrice: 18
  },
  {
    id: '2',
    name: 'X-Wing',
    stock: 8,
    msrp: 10,
    description: 'shiny sword',
    imgUrl: xwing,
    currentPrice: 18
  },
  {
    id: '3',
    name: 'Tie-Fighter',
    stock: 8,
    msrp: 10,
    description: 'sdf',
    imgUrl: tiebomer,
    currentPrice: 18
  },
  {
    id: '4',
    name: 'X-Wing',
    stock: 8,
    msrp: 10,
    description: 'shiny sword',
    imgUrl: xwing,
    currentPrice: 18
  },
  {
    id: '6',
    name: 'Tie Fighter',
    stock: 8,
    msrp: 10,
    description: 'shiny sword',
    imgUrl: tiebomer,
    currentPrice: 18
  },
];


export default function HomePage() {
    const [featuredItems, setFeaturedItems] = useState<ItemType[]>([]);

    useEffect(() => {
      setFeaturedItems(dummyItems);
    }, []);

    return (
        <>
            <section className='flex justify-center mb-10'>
              <div className='min-w-[50%] flex flex-col justify-between min-h-full'>
                <h1 className='text-3xl'>
                  From x-wings to star destroyers
                </h1>
                <p>We have everything you need to take on the empire or crush the rebellion</p>
                <Link
                  className='text-xl underline'
                  to="shop"
                >Shop now</Link>
              </div>
              <Featured items={featuredItems} />
            </section>

            <section className='flex justify-between p-10 bg-emerald-300'>
              {featuredItems.map((item) => {
                return (
                  <div className='w-64 h-64 bg-slate-100 rounded-md p-10 shadow-md cursor-pointer hover:scale-125'>
                    <img
                      src={item.imgUrl}
                      alt={item.description}
                    />
                    <div>{item.name}</div>
                    <div>${item.currentPrice}</div>
                  </div>
                )
              })}
            </section>

            <section className='flex justify-between p-10 bg-teal-300'>
              {featuredItems.map((item) => {
                return (
                  <div className='w-64 h-64 bg-slate-100 rounded-md p-10 shadow-md cursor-pointer hover:scale-125'>
                    <img
                      src={item.imgUrl}
                      alt={item.description}
                    />
                    <div>{item.name}</div>
                    <div>${item.currentPrice}</div>
                  </div>
                )
              })}
            </section>
        </>
    )
}


type FeaturedProps = { items: ItemType[] };
function Featured({ items }: FeaturedProps) {
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
