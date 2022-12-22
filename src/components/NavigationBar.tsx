import { UserIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { USER_DATA_KEY, SET_USER_ACTION_TYPE } from '../utilities/constants';
import { CartContext, DispatchContext, AuthContext } from '../utilities/Contexts';

export default function NavigationBar() {
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const cart = useContext(CartContext);
  const dispatch = useContext(DispatchContext);
  const userData = useContext(AuthContext);

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
    return Object.values(cart).reduce((acc, currCartItem) => {
      return acc + currCartItem.amount
    }, 0);
  }

  return (
    <div className='bg-emerald-300'>
        <nav className="mx-auto container flex justify-between items-center px-10 py-5">
          <Link className='hover:text-white' to="shop">Shop</Link>
          <Link to="/" className="font-bold text-3xl">Mos Espa Marketplace</Link>
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