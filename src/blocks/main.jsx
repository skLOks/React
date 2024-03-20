import React from 'react';
import Tovs from './tovs/tovs';
import './main.css';
import Reg from './Reg/reg'
import Auth from './auth/auth'
import Cart from './cart/cart'
import Order from './orders/order'

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

function Main() {
  return (
    <div className="main">
      <Router>
          <Routes>
            <Route exact path="/" element={<Tovs/>} />
            <Route exact path="/reg" element={<Reg />} />
            <Route exact path="/auth" element={<Auth />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/order" element={<Order />} />
          </Routes>
      </Router>
    </div>
  );
}

export default Main;
