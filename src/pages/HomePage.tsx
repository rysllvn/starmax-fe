import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { ItemType } from '../utilities/types';

import tiebomer from '../assets/tiebomber.png';
import xwing from '../assets/xwing.png';
import FeaturedCarousel from '../components/FeaturedCarousel';
import HorizontalItemSection from '../components/HorizontalItemSection';


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
            <FeaturedCarousel items={featuredItems} />
          </section>

          <HorizontalItemSection items={featuredItems} bgColor="bg-emerald-200" />
          <HorizontalItemSection items={featuredItems} bgColor="bg-sky-200" />
        </>
    )
}
