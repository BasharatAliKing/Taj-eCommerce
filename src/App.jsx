import React from "react";
import { BrowserRouter as Router ,Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import "./App.css"
const App = () => {
  return (
    <div className="font-sans">
     <Router>
      <Routes>
        <Route>
           <Route path="/" element={<Home/>} />
           <Route path="/home" element={<Home/>} />
        </Route>
      </Routes>
     </Router>
     
    </div>
  );
};

export default App;
