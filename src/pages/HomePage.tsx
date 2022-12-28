import { useContext } from 'react';
import { Link } from 'react-router-dom';

import FeaturedCarousel from '../components/FeaturedCarousel';
import HorizontalItemSection from '../components/HorizontalItemSection';
import { AppStateContext } from '../utilities/Contexts';

export default function HomePage() {
    const applicationState = useContext(AppStateContext);
    const featuredItems = Array.from(applicationState.items.values());

    return (
      <>
      {
        featuredItems ?
        <>
          <section className='flex justify-center mb-10'>
            <div className='min-w-[50%] flex flex-col justify-between min-h-full'>
              <h1 className='text-3xl'>
                From x-wings to star destroyers
              </h1>
              <p>We have everything you need to take on the empire or crush the rebellion</p>
              <Link
                className='text-xl underline hover:text-amber-300'
                to="shop"
              >Shop now</Link>
            </div>
            <FeaturedCarousel items={featuredItems.slice(1, 3)} />
          </section>

          <HorizontalItemSection items={featuredItems.slice(0, 4)} bgColor="bg-emerald-700" />
        </>
        :
        <div className='text-xl'>Loading...</div>
      }
      </>
    )
}
