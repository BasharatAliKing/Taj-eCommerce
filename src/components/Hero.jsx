import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Hero = () => {
      const [category,setCategory]=useState([]);

      const getAllCategory=async()=>{
        try {
            const response=await fetch("http://localhost:3000/getallcategory",{
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                }
            });
            const json=await response.json();
            setCategory(json.categories);
        } catch (error) {
            console.log(error);
        }
      }
      useEffect(()=>{
        getAllCategory();
      },[]);
  console.log(category);
  return (
    <section className="relative top-0 md:h-screen bg-cover bg-center bg-[url(/home-bg.jpg)]">
      <div className=" md:absolute pt-[500px] md:pt-0 pb-10 inset-0 bg-[#221b4b80] bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-6">
       <img src="/british.png" className="hidden md:flex w-[80%] md:w-[40%]" alt="" />
       <div className="flex flex-wrap gap-4">
          <a href="#food-menu" className="flex w-full cursor-pointer md:w-[150px] hover:animate-scl h-auto  sm:h-[100px]  md:h-[150px] items-center justify-center text-base  md:text-lg font-dancing font-bold bg-cover bg-no-repeat border-[3px] border-yellow rounded-md p-2    bg-[url(/button-pattern-blue.png)]">OUR MENUS</a>
          {/* <button className="flex w-full cursor-pointer md:w-[150px] hover:animate-scl h-auto  sm:h-[100px]  md:h-[150px] items-center justify-center text-base  md:text-lg font-dancing font-bold bg-cover bg-no-repeat border-[3px] border-yellow rounded-md p-2  b  bg-[url(/button-pattern-green.png)]">SHARING BOXES & COOKED RANGE</button>*/}
         {
            category.map((cat,index)=>(
              <Link to={`/product/${cat.categoryname}`} className="flex w-full uppercase cursor-pointer md:w-[150px] hover:animate-scl h-auto  sm:h-[100px]  md:h-[150px] items-center justify-center text-base  md:text-lg font-dancing font-bold bg-cover bg-no-repeat border-[3px] border-yellow rounded-md p-2  bg  bg-[url(/button-pattern-orange.png)]">{cat.categoryname}</Link>
            ))
         }
          {/* <button className="flex w-full cursor-pointer md:w-[150px] hover:animate-scl h-auto  sm:h-[100px]  md:h-[150px] items-center justify-center text-base  md:text-lg font-dancing font-bold bg-cover bg-no-repeat border-[3px] border-yellow rounded-md p-2    bg-[url(/button-pattern-pink.png)]">Milk Shakes</button> */}
          {/* <button className="flex w-full cursor-pointer md:w-[150px] hover:animate-scl h-auto  sm:h-[100px]  md:h-[150px] items-center justify-center text-base  md:text-lg font-dancing font-bold bg-cover bg-no-repeat border-[3px] border-yellow rounded-md p-2    bg-[url(/button-pattern-yellow.png)]">EVENTS & CATERING</button>  */}
        </div>
      </div>
      <div className="absolute top-[20%] md:top-[25%] right-15 flex flex-col gap-0">
          <div className="absolute top-[2px] left-20 animate-bulb w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-9 left-[22px] animate-bulb w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-23  animate-bulb w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-38 left-[16px] animate-bulb w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-6 right-14 animate-bulb w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-[90px] right-[23px] animate-bulb w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-[154px] right-10 animate-bulb w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-[196px] left-24 animate-bulb w-2 h-2 bg-white rounded-full"></div>
          <img src="/order-online.png" alt="my-img" className="border-[8px] border-yellow rounded-full" width="90%" />
          <img src="/order-onlinetwo.png" width="100%" className="absolute top-27" alt="" />
      </div>
    </section>
  );
};

export default Hero;
