import { useContext } from 'react';

import { Link, Outlet, useNavigate } from 'react-router-dom';

import { UserIcon } from '@heroicons/react/24/outline';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { CartContext,AuthContext } from '../utilities/Contexts';


export default function Layout() {
  const navigate = useNavigate();
  // const cart = useContext(CartContext);
  const userData = useContext(AuthContext);

  function handleUserClick() {
    console.log(userData);
    if (userData) {
      //console.log(userData);
      navigate("/profile");
    }
    else{
      navigate("/login");
    }
  }
  return (
    <>
      <div className='bg-emerald-300'>
        <nav className="mx-auto container flex justify-between items-center px-10 py-5">
          <Link to="shop">Shop</Link>
          <Link to="/" className="font-bold text-3xl">Mos Espa Marketplace</Link>
          <div className='flex items-center'>
            <UserIcon
              onClick={handleUserClick}
              className='w-14 h-14 mr-4 cursor-pointer'
            />
            <ShoppingCartIcon
              onClick={() => navigate('/cart')}
              className='cursor-pointer'
            />
          </div>
        </nav>
      </div>

      <main className="h-full pb-10 pt-7 container mx-auto bg-slate-50">
        <Outlet />
      </main>
      
      <footer className="p-8 container mx-auto bg-slate-50">
        <Link to="/team">Meet the Team</Link>
      </footer>
    </>
  )
}
