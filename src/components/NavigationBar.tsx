import { UserIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { USER_DATA_KEY, SET_USER_ACTION_TYPE } from '../utilities/constants';
import { DispatchContext, AppStateContext } from '../utilities/Contexts';

export default function NavigationBar() {
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const applicationState = useContext(AppStateContext);
  const cart = applicationState.cart;
  const dispatch = useContext(DispatchContext);
  const userData = applicationState.userData;

  function handleUserClick() {
    if (userData) {
      setUserDropdownOpen(!userDropdownOpen);
    }
    else{
      navigate("/login");
    }
  }

  function handleLogout() {
    localStorage.removeItem(USER_DATA_KEY);
    setUserDropdownOpen(false);
    dispatch({ type: SET_USER_ACTION_TYPE, userData: null });
  }

  function totalItemCount(): number {
    return Array.from(cart.values()).reduce((acc, amount) => {
      return acc + amount;
    }, 0);
  }

  return (
    <div className='bg-teal-900 text-rose-300 shadow-lg shadow-emerald-300'>
        <nav className="mx-auto container flex justify-between items-center px-10 py-5">
          <Link className='hover:text-white' to="shop">Shop</Link>
          <Link to="/" className="font-bold text-5xl">Mos Espa Marketplace</Link>
          <div className='flex items-center relative'>
            <UserIcon
              onClick={handleUserClick}
              className='w-14 h-14 mr-4 cursor-pointer hover:text-white'
            />
            {
              userDropdownOpen &&
              <div className='bg-slate-100 rounded absolute flex flex-col top-10'>
                <Link
                  onClick={() => setUserDropdownOpen(false)} 
                  to="/profile"
                >
                  Profile
                </Link>
                <button className='bg-red-500' onClick={handleLogout}>Logout</button>
              </div>
            }
            <ShoppingCartIcon
              onClick={() => navigate('/cart')}
              className='cursor-pointer hover:text-white'
            />
            <div>{totalItemCount() > 0 && totalItemCount()}</div>
          </div>
        </nav>
      </div>
  )
}