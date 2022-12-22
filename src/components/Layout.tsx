import { Outlet } from 'react-router-dom';
import NavigationBar from './NavigationBar';

export default function Layout() {

  return (
    <>
      <NavigationBar />
      <main className="h-full pb-10 pt-7 container mx-auto bg-slate-50">
        <Outlet />
      </main>
    </>
  )
}
