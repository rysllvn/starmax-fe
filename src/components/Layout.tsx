import { Outlet } from 'react-router-dom';

import Navigation from './Navigation';

export default function Layout() {
  return (
    <>
      <Navigation />

      <main className="pt-7 container mx-auto">
        <Outlet />
      </main>
    </>
  )
}
