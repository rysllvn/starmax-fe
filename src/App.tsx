import { useEffect, useReducer } from 'react';
// https://github.com/remix-run/react-router/tree/dev/examples
import { Routes, Route } from 'react-router-dom'; 

import './App.css';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage';
import NoMatchPage from './pages/NoMatchPage';
import SignUpPage from './pages/SignUpPage';
import ShippingPage from './pages/ShippingPage';
import PurchaseHistoryPage from './pages/PurchaseHistoryPage';
import CartPage from './pages/CartPage';

import { AuthContext, CartContext, DispatchContext } from './utilities/Contexts';
import { initialState, reducer } from './utilities/AppReducer';
import RequireAuth from './components/RequireAuth';

function App() {
  /***************************************************************
  //  global application state
  //  state is updated by dispatching 'actions'
  //  dispatch which is provided to all components with a context
  //  can be accessed and called with an object passed into it.
  //  dispatching an action calls the reducer function defined
  //  in ./utilities/AppReducer.ts
  ****************************************************************/
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    window.logState = () => console.log(state);
    window.dispatch = (action: { [key: string]: any }) => dispatch(action);
  }, [state, dispatch]);

  return (
    <DispatchContext.Provider value={dispatch}>
      <CartContext.Provider value={state.cart}>
        <AuthContext.Provider value={state.userData}>
          <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="team" element={<TeamPage />} />
                <Route path="/signup" element = {<SignUpPage/>} />
                <Route path="/shipping" element={<ShippingPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route
                  path="/purchase_history"
                  element={
                    <RequireAuth role="user">
                      <PurchaseHistoryPage />
                    </RequireAuth>
                  }
                />
                <Route path="*" element={<NoMatchPage />} />
              </Route>
          </Routes>
        </AuthContext.Provider>
      </CartContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
