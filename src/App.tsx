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

import { DispatchContext } from './utilities/Contexts';
import { initialState, reducer } from './utilities/AppReducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <Routes>
          <Route path="/" element={<Layout cart={state.cart} auth={state.auth} />}>
            <Route index element={<HomePage />} />
            <Route path="team" element={<TeamPage />} />
            <Route path="/signup" element = {<SignUpPage/>} />
            <Route path="/shipping" element={<ShippingPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/purchase_history" element={<PurchaseHistoryPage />} />
            <Route path="*" element={<NoMatchPage />} />
          </Route>
      </Routes>
    </DispatchContext.Provider>
  );
}

export default App;
