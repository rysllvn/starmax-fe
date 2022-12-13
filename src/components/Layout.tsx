import { Link, Outlet } from 'react-router-dom';

import { UserIcon } from '@heroicons/react/24/outline';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';


export default function Layout() {
  return (
    <>
      <nav className="flex justify-between items-center px-10 py-5 shadow-md">
        <Link to="items">Shop By Type</Link>
        <Link to="/" className="font-bold text-3xl">Mos Espa Marketplace</Link>
        <div className='flex items-center'>
          <UserIcon className='w-12 h-12 mr-4'/>
          <ShoppingBagIcon />
        </div>
      </nav>

      <main className="h-full pb-10 pt-7 container mx-auto">
        <Outlet />
      </main>
      
      <footer className="py-10 container mx-auto">
        <Link to="/team">Meet the Team</Link>
      </footer>
    </>
  )
}
