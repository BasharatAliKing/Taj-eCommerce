import React, { useContext } from "react";
import { BrowserRouter as Router ,Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import "./App.css"
import CheckoutPage from "./pages/CheckOut";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/Cart";
import MainOutlet from "./pages/MainOutlet";
import OrderConfirmation from "./pages/Confirmation";
import UserContext from "./useContext/UserContext";
import Admin from "./pages/Admin";
import AdminHome from "./pages/admin/AdminHome";
import AdminFoodItems from "./pages/admin/foodItems/AdminFoodItems";
import AdminFoodCategories from "./pages/admin/foodCategories/AdminFoodCategories";
import AdminAddCategory from "./pages/admin/foodCategories/AdminAddCategory";
import { ToastContainer } from "react-toastify";
import AdminUpdateCategory from "./pages/admin/foodCategories/AdminUpdateCategory";
import AdminAddFoodItem from "./pages/admin/foodItems/AdminAddFoodItem";
import AdminUpdateFoodItem from "./pages/admin/foodItems/AdminUpdateFoodItem";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ErrorPage from "./pages/ErrorPage";
import OrderPage from "./pages/OrderPage";
const App = () => {
   const {user}=useContext(UserContext);
  return (
    <>
     <Router>
      <Routes>
        <Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>} />
           <Route path="/" element={<Home/>} />
           <Route path="/home" element={<Home/>} />
           {/* second web */}
           <Route path="/" element={<MainOutlet/>}>
           <Route path="product/:id" element={<Product/>} />
           <Route path="product-details/:id" element={<ProductDetails/>} />
           <Route path="cart" element={<CartPage/>} />
           <Route path="checkout" element={<CheckoutPage/>} />
           <Route path="/confirm-order" element={<OrderConfirmation/>} />
              <Route path="/order" element={<OrderPage/>} />
           </Route>
           {/* admin routes here */}
           {
            user && user.role==='admin' ?(
              <Route path="/admin" element={<Admin />}>
              <Route index element={<AdminHome />} />
              <Route path="categories" element={<AdminFoodCategories />} />
              <Route path="addCategory" element={<AdminAddCategory/>} />
              <Route path="updateCategory/:id" element={<AdminUpdateCategory/>} />
              <Route path="foodItems" element={<AdminFoodItems />} />
              <Route path="addFoodItem" element={<AdminAddFoodItem />} />
              <Route path="updateFoodItem/:id" element={<AdminUpdateFoodItem />} />
           
              </Route>
            ):
          <Route path='*' element={<ErrorPage/>}/>
           }
        </Route>
      </Routes>
     </Router>
        <ToastContainer />
    </>
  );
};

export default App;
