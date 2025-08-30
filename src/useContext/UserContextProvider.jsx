import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState([]);
  const [total, setTotal] = useState(0);
  const [cart,setCart]=useState(localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[]);
   const authorizationtoken = `Bearer ${token}`;
  const storetokeninLS = (servertoken) => {
    setToken(servertoken);
    return localStorage.setItem("token", servertoken);
  };
  const LogoutUser = () => {
    setToken("");
    setUser("");
    return localStorage.removeItem("token");
  };
  const userAuthentication = async () => {
    try {
      const response = await fetch(`https:localhost:3000/user`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const res_data = await response.json();
        setUser(res_data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };
   useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  // calculate total price
    const cartTotal = storedCart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(cartTotal);
  }, [cart]);
  useEffect(() => {
    userAuthentication();
  }, []);
 
  return (
    <UserContext.Provider value={{ storetokeninLS ,LogoutUser,authorizationtoken, user,cart,setCart,total}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
