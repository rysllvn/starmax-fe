import { useReducer } from 'react';
// https://github.com/remix-run/react-router/tree/dev/examples

import './App.css';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';

import NoMatchPage from './pages/NoMatchPage';
import SignUpPage from './pages/SignUpPage';
import ShippingPage from './pages/ShippingPage';
import PurchaseHistoryPage from './pages/PurchaseHistoryPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';

import { AuthContext, CartContext, DispatchContext } from './utilities/Contexts';
import { initialState, reducer } from './utilities/AppReducer';
import Router from './components/Router';

function App() {
  /***************************************************************
  //  global application state
  //  see AppReducer for information
  ****************************************************************/
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <CartContext.Provider value={state.cart}>
        <AuthContext.Provider value={state.userData}>
          <Router/>
        </AuthContext.Provider>
      </CartContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
