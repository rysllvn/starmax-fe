import { Routes, Route } from 'react-router-dom'; 

import Layout from './Layout';
import HomePage from '../pages/HomePage';
import TeamPage from '../pages/TeamPage';
import NoMatchPage from '../pages/NoMatchPage';
import SignUpPage from '../pages/SignUpPage';
import ShippingPage from '../pages/ShippingPage';
import PurchaseHistoryPage from '../pages/PurchaseHistoryPage';
import CartPage from '../pages/CartPage';
import RequireAuth from './RequireAuth';
import LoginPage from '../pages/LoginPage';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="/signup" element = {<SignUpPage/>} />
        <Route path="/login" element = {<LoginPage/>} />
        <Route path="/cart" element={<CartPage />} />

        <Route element={<RequireAuth role="User" />} >
          <Route path="/purchase-history" element={<PurchaseHistoryPage />} />
          <Route path="/shipping" element={<ShippingPage />} />
        </Route>

        <Route element={<RequireAuth role="Admin" />} >
        </Route>

        <Route path="*" element={<NoMatchPage />} />
      </Route>
    </Routes>
  )
}