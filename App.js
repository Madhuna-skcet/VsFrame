import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../HomeComponents/Home';
import Signup from '../Login,Signup/SignupForm';
import Login from '../Login,Signup/LoginForm';
import Pcart from './PCart';
import Explore from '../ExploreComp/Explore';
import Category from '../HomeComponents/CategoryList';
import Category1 from '../HomeComponents/CategoryList1';
import Address from '../AddressComp/Addressbar';
import Product from './ProductView';
import Wishproduct from '../WishList/InW';
import Orders from '../Order/OrderSummary';
import { CartProvider } from '../Context/CartContext'; 
import { WishlistProvider } from './WishlistContext';
import Gpay from '../Order/GooglePayButtonComponent';
const App = () => {
  return (
    <CartProvider>
     <WishlistProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/pcart" element={<Pcart />} />
        <Route path="/category" element={<Category />} />
        <Route path="/category1" element={<Category1 />} />
        <Route path="/address" element={<Address />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/wishproduct" element={<Wishproduct />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/gpay" element={<Gpay />} />
      </Routes>
    </Router>
    </WishlistProvider>
    </CartProvider>
  );
};

export default App;
