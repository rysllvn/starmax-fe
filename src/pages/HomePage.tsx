import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { ItemType } from '../utilities/types';
import FeaturedCarousel from '../components/FeaturedCarousel';
import HorizontalItemSection from '../components/HorizontalItemSection';
import { fakeItemArray } from '../utilities/mock_data';

export default function HomePage() {
    const [featuredItems, setFeaturedItems] = useState<ItemType[]>([]);

    useEffect(() => {
      setFeaturedItems(fakeItemArray);
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
