import { useContext } from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { SET_USER_ACTION_TYPE, USER_DATA_KEY } from '../utilities/constants';

import { AppStateContext, DispatchContext } from '../utilities/Contexts';
import { UserType } from '../utilities/types';

export default function RequireAuth({ role }: { role: 'User' | 'Admin' }) {
  const dispatch = useContext(DispatchContext);
  const applicationState = useContext(AppStateContext);
  let userData = applicationState.userData;
  let location = useLocation();

  if (role !== userData?.role) {
    const userData: string | null = localStorage.getItem(USER_DATA_KEY);
    if (userData) {
      const parsedUser: UserType = JSON.parse(userData);
      if (parsedUser.role === role) {
        dispatch({ type: SET_USER_ACTION_TYPE, userData: JSON.parse(userData) });
        return <Outlet />
      }
      localStorage.removeItem(USER_DATA_KEY);
      dispatch({ type: SET_USER_ACTION_TYPE, userData: null });
    }


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
