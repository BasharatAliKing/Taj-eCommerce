
import React, { useState ,useEffect } from "react";
import ItemCard from "../components/ItemCard";


const MenuPage = () => {
    const [item,setItem]=useState([]);
    const getallfoodItems=async()=>{
        try {
            const response=await fetch("http://localhost:3000/getallfoodItems",{
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                }
            });
            const json=await response.json();
          //  console.log(json)
            setItem(json.message);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getallfoodItems();
    },[]);
    console.log(item);
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#f5f0ea] py-10 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          CAKES & TRAY BAKES
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600 px-4">
          MyLahore is rooted in Yorkshire in a world of small kitchens yet huge
          hearts, where families tuck into everything from samosas to shepherd’s
          pie, and karahis to cornflake tarts – it’s a very British Asian story
          that just had to be shared!
        </p>
      </div>

      {/* Cakes Grid */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {item.map((cake, index) => (
            <ItemCard
              key={index}
              name={cake.name}
              price={cake.price}
              image={cake.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;

