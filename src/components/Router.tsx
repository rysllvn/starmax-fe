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
import ItemDetailPage from '../pages/ItemDetailPage';
import ProfilePage from '../pages/ProfilePage';
import ItemAddedPage from '../pages/ItemAddedPage';
import ShopPage from '../pages/ShopPage';
import AdminInventoryPage from '../pages/AdminInventoryPage';
import AdminLayout from './AdminLayout';
import ManageOrdersPage from '../pages/ManageOrders';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route index element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/item/:itemId" element={<ItemDetailPage />} />
        <Route path="/item-added-to-cart" element={<ItemAddedPage />} />
        <Route path="/shop" element={<ShopPage />} />

        <Route element={<RequireAuth role="User" />} >
          <Route path="/purchase-history" element={<PurchaseHistoryPage />} />
          <Route path="/shipping" element={<ShippingPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route element={<RequireAuth role="Admin" />} >
          <Route path="inventory" element={<AdminInventoryPage />} />
        </Route>
        <Route element={<RequireAuth role="Admin" />} >
          <Route path="orders" element={<ManageOrdersPage />} />
        </Route>
      </Route>

      <Route path="*" element={<NoMatchPage />} />
    </Routes>
  )
}