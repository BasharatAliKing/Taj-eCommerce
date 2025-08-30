import React from "react";
import { BrowserRouter as Router ,Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import "./App.css"
import CheckoutPage from "./pages/CheckOut";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/Cart";
import MainOutlet from "./pages/MainOutlet";
const App = () => {
  return (
    <div className="font-sans">
     <Router>
      <Routes>
        <Route>
           <Route path="/" element={<Home/>} />
           <Route path="/home" element={<Home/>} />
           {/* second web */}
           <Route path="/" element={<MainOutlet/>}>
           <Route path="product/:id" element={<Product/>} />
           <Route path="product-details/:id" element={<ProductDetails/>} />
           <Route path="cart" element={<CartPage/>} />
           <Route path="checkout" element={<CheckoutPage/>} />
           </Route>
           {/* admin routes here */}
        </Route>
      </Routes>
     </Router>
     
    </div>
  );
};

export default App;
