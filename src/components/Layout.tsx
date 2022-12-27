import { Outlet } from 'react-router-dom';
import StarBackground from './background_stars/StarBackground';
import NavigationBar from './NavigationBar';

export default function Layout() {
  return (
    <>
      <StarBackground />
      <NavigationBar />
      <main className="h-full pb-10 pt-7 container mx-auto bg-transparent">
        <Outlet />
      </main>
    </>
  )
}
