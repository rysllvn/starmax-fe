import { useContext } from 'react';
import { useLocation, Navigate } from 'react-router-dom';

import { AuthContext } from '../utilities/Contexts';


// https://stackblitz.com/github/remix-run/react-router/tree/main/examples/auth?file=src%2FApp.tsx
export default function RequireAuth({ children, role }: { children: JSX.Element, role: string }) {
  let userData = useContext(AuthContext);
  let location = useLocation();

  if (!userData || role !== userData.role) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
