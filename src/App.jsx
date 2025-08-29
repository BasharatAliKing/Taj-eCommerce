import React from "react";
import { BrowserRouter as Router ,Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import "./App.css"
import CakesBakesTray from "./pages/Cakes&BakesTray";
import CheckoutPage from "./pages/CheckOut";
const App = () => {
  return (
    <div className="font-sans">
     <Router>
      <Routes>
        <Route>
           <Route path="/" element={<Home/>} />
           <Route path="/home" element={<Home/>} />
           <Route path="/cake-bakes" element={<CakesBakesTray/>} />
           <Route path="/checkout" element={<CheckoutPage/>} />
        </Route>
      </Routes>
     </Router>
     
    </div>
  );
};

export default App;
