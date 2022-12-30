import { NavLink, Outlet } from 'react-router-dom';

export default function AdminLayout() {
  return (
    <>
      <nav className='flex justify-around'>
        <NavLink to="inventory">INVENTORY</NavLink>
        <NavLink to="orders">ORDERS</NavLink>
      </nav>
      <main className="h-full pb-10 pt-7 container mx-auto bg-slate-700 p-8">
        <Outlet />
      </main>
    </>
  )
}
