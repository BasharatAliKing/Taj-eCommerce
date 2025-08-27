import React from "react";
import { BrowserRouter as Router ,Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import "./App.css"
import CakesBakesTray from "./pages/Cakes&BakesTray";
const App = () => {
  return (
    <div className="font-sans">
     <Router>
      <Routes>
        <Route>
           <Route path="/" element={<Home/>} />
           <Route path="/home" element={<Home/>} />
           <Route path="/cake-bakes" element={<CakesBakesTray/>} />
        </Route>
      </Routes>
     </Router>
     
    </div>
  );
};

export default App;
