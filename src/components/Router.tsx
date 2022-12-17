import { Routes, Route } from 'react-router-dom'; 

import Layout from './Layout';
import HomePage from '../pages/HomePage';
import NoMatchPage from '../pages/NoMatchPage';
import SignUpPage from '../pages/SignUpPage';
import ShippingPage from '../pages/ShippingPage';
import PurchaseHistoryPage from '../pages/PurchaseHistoryPage';
import CartPage from '../pages/CartPage';
import RequireAuth from './RequireAuth';
import LoginPage from '../pages/LoginPage';
import CheckoutConfirmationPage from '../pages/CheckoutConfirmationPage';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route index element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/signup" element = {<SignUpPage/>} />
        <Route path="/login" element = {<LoginPage/>} />
        <Route path="/cart/confirmation" element= {<CheckoutConfirmationPage />} />

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