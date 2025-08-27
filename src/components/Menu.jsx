import React from 'react'
import { FaStar } from "react-icons/fa";

const Menu = () => {
  return (
     <div className="hidden md:flex bg-[#FFD300] py-5 text-white">
        <ul className="flex gap-5 items-center justify-center mx-auto">
          <li className="uppercase font-sketch text-[#4A4A4A] text-base cursor-pointer font-bold">
            About Us
          </li>
          <FaStar className="text-[#4A4A4A]" />
          <li className="uppercase font-sketch text-[#4A4A4A] text-base cursor-pointer font-bold">
            Our Menus
          </li>
          <FaStar className="text-[#4A4A4A]" />
          <li className="uppercase font-sketch text-[#4A4A4A] text-base cursor-pointer font-bold">
            Where to find us
          </li>
          <FaStar className="text-[#4A4A4A]" />
          <li className="uppercase font-sketch text-[#4A4A4A] text-base cursor-pointer font-bold">
            events & catering
          </li>
          <FaStar className="text-[#4A4A4A]" />
          <li className="uppercase font-sketch text-[#4A4A4A] text-base cursor-pointer font-bold">
            contact us
          </li>
        </ul>
      </div>
  )
}

export default Menu
