import { Link, Outlet } from 'react-router-dom';
import { UserIcon } from '@heroicons/react/24/solid'



export default function Layout() {
  return (
    <>
      <nav className="flex justify-between items-center px-10 py-5 bg-indigo-100">
        <Link to="/" className="font-bold text-3xl">TtT</Link>
        <UserIcon className="h-6 w-6" />
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
