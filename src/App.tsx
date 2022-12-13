/*
  Routing structure heavily inspired by basic example recommended 
  by the React Router Dom Documentation https://reactrouter.com/en/main/start/examples
  https://github.com/remix-run/react-router/tree/dev/examples
*/

import { Routes, Route } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage';
import NoMatchPage from './pages/NoMatchPage';
import ShippingPage from './pages/ShippingPage';
import PurchaseHistoryPage from './pages/PurchaseHistoryPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="/shipping" element={<ShippingPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/purchase_history" element={<PurchaseHistoryPage />} />
        <Route path="*" element={<NoMatchPage />} />
      </Route>
    </Routes>
  );
}

export default App;
