import { useReducer } from 'react';
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
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';

import { AuthContext, CartContext, DispatchContext } from './utilities/Contexts';
import { initialState, reducer } from './utilities/AppReducer';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <CartContext.Provider value={state.cart}>
        <AuthContext.Provider value={state.userData}>
          <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="team" element={<TeamPage />} />
                <Route path="/signup" element = {<SignUpPage/>} />
                <Route path="/login" element = {<LoginPage/>} />
                <Route path="/profile" element = {<ProfilePage/>} />
                <Route path="/shipping" element={<ShippingPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/purchase_history" element={<PurchaseHistoryPage />} />
                <Route path="*" element={<NoMatchPage />} />
              </Route>
          </Routes>
        </AuthContext.Provider>
      </CartContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
