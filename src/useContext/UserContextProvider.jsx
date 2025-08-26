import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState([]);
  const [loader,setLoader]=useState(false);
  const [joinGreen,setJoinGreen]=useState(true);
  const [toast,setToast]=useState(false);
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
      const response = await fetch(`https://greenceo-backend.onrender.com/user`, {
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
    userAuthentication();
  }, []);
  useEffect(()=>{
      setTimeout(() => {
      setLoader(false);
    }, 2000);
  })
 
  return (
    <UserContext.Provider value={{ storetokeninLS,toast,setToast ,LogoutUser,joinGreen,setJoinGreen,authorizationtoken, user, loader,setLoader}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
