import { useContext, useState } from 'react';

import { Link, Outlet, useNavigate } from 'react-router-dom';

import { UserIcon } from '@heroicons/react/24/outline';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { CartContext, AuthContext, DispatchContext } from '../utilities/Contexts';
import { SET_USER_ACTION_TYPE, USER_DATA_KEY } from '../utilities/constants';
import NavigationBar from './NavigationBar';


export default function Layout() {

  return (
    <>
      <NavigationBar />
      <main className="h-full pb-10 pt-7 container mx-auto bg-slate-50 px-8">
        <Outlet />
      </main>
    </>
  )
}
