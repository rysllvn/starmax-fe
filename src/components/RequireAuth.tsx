import { useContext } from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';

import { AppStateContext } from '../utilities/Contexts';

export default function RequireAuth({ role }: { role: 'User' | 'Admin' }) {
  const userData = useContext(AppStateContext).userData;
  const location = useLocation();

  if (role !== userData?.role) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    
    // explanation from here: 
    // https://stackblitz.com/github/remix-run/react-router/tree/main/examples/auth?file=src%2FApp.tsx
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}
