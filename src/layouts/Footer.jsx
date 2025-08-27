import React from 'react'
import { Link } from 'react-router-dom';
import { FaChevronDown, FaInstagram, FaTelegramPlane, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
   <div className="bg-charkol relative py-5 sm:py-10 md:py-20 pb-0 md:pb-0 bg-center bg-cover">
        {/* <img
          src="/footer-line.png"
          className="absolute right-0 z-0 bottom-0 w-[50%] sm:w-[20%]"
          alt="my-img"
        /> */}
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <div className="flex flex-col gap-3">
            <img src="/logo.png" alt="my-img" className='rounded-full' width="40%" />
            <p className="text-white font-medium font-sketch text-[14px] md:text-[16px]">
              In a world on the edge of ecological collapse, Green CEOs emerge
              as a powerful initiative where leaders trade ideas for saplings
              and spreadsheets of flora. The
            </p>
            <ul className="flex items-center gap-2">
              <Link
                data-tooltip-id="telegram"
                to=""
                className="w-10 h-10 rounded-full border-2 border-white/80 flex items-center justify-center"
              >
                <FaInstagram className="text-white text-md" />{" "}
              </Link>
              <Link
                data-tooltip-id="twitter"
                to=""
                className="w-10 h-10 rounded-full border-2 border-white/80 flex items-center justify-center"
              >
                <FaXTwitter className="text-white text-md" />{" "}
              </Link>
              <Link
                data-tooltip-id="youtube"
                to=""
                className="w-10 h-10 rounded-full border-2 border-white/80 flex items-center justify-center"
              >
                <FaYoutube className="text-white text-md" />{" "}
              </Link>
              <Link
                data-tooltip-id="tiktok"
                to=""
                className="w-10 h-10 rounded-full border-2 border-white/80 flex items-center justify-center"
              >
                <FaTiktok className="text-white text-md" />{" "}
              </Link>
              <Link
                data-tooltip-id="facebook"
                to=""
                className="w-10 h-10 rounded-full border-2 border-white/80 flex items-center justify-center"
              >
                <FaFacebookF className="text-white text-md" />{" "}
              </Link>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="font-bold text-[20px] md:text-xl text-yellow font-sketch">
              USEFUL LINKS
            </h2>
            <ul className="md:w-1/2 flex flex-col gap-3 text-white">
              <Link to="/" className="flex flex-row gap-1 items-center font-medium font-sketch duration-700 cursor-pointer hover:text-yellow text-[14px] md:text-[15px]">
                Our Story
              </Link>
              <Link
                to="/"
                className="flex flex-row gap-1 items-center font-medium font-sketch duration-700 cursor-pointer hover:text-yellow text-[14px] md:text-[15px]"
              >
                Our Menus
              </Link>
              <Link
                to="/"
                className="flex flex-row gap-1 items-center font-medium font-sketch duration-700 cursor-pointer hover:text-yellow text-[14px] md:text-[15px]"
              >
                Where to Find us
              </Link>
              <Link to="/" className="flex flex-row gap-1 items-center font-medium font-sketch duration-700 cursor-pointer hover:text-yellow text-[14px] md:text-[15px]">
                Charity request
              </Link>
              <Link to="/" className="flex flex-row gap-1 items-center font-medium font-sketch duration-700 cursor-pointer hover:text-yellow text-[14px] md:text-[15px]">
                Catering & Events
              </Link>
              <Link to="/" className="flex flex-row gap-1 items-center font-medium font-sketch duration-700 cursor-pointer hover:text-yellow text-[14px] md:text-[15px]">
                Gallery
              </Link>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="font-bold text-[20px] md:text-xl uppercase font-sketch text-yellow">
              Quick Links
            </h2>
            <ul className="md:w-1/2 flex flex-col gap-3 text-white">
              <Link
                to="/"
                className="flex flex-row whitespace-nowrap gap-1 items-center font-medium font-sketch duration-700 cursor-pointer hover:text-yellow text-[14px] md:text-[15px]"
              >
               Join the Family
              </Link>
              <Link
                to="/"
                className="flex flex-row whitespace-nowrap gap-1 items-center font-medium font-sketch duration-700 cursor-pointer hover:text-yellow text-[14px] md:text-[15px]"
              >
                Our Heritage
              </Link>
              <li
                className="relative w-full flex flex-row whitespace-nowrap gap-1 items-center font-medium font-sketch duration-700 cursor-pointer hover:text-yellow text-[14px] md:text-[15px]"
              >
              Allergen Info 
                {/* >    Advertise Our Magazine / Advertise on Social Media / Advertise on podcast / */}
              </li>
              <Link
                to="/"
                className="flex flex-row whitespace-nowrap gap-1 items-center font-medium font-sketch duration-700 cursor-pointer hover:text-yellow text-[14px] md:text-[15px]"
              >
                Gift Cards
              </Link>
              <Link
                to="/"
                className="flex flex-row whitespace-nowrap gap-1 items-center font-medium font-sketch duration-700 cursor-pointer hover:text-yellow text-[14px] md:text-[15px]"
              >
              Rewards
              </Link>
           
              <Link
                to="/"
                className="flex flex-row whitespace-nowrap gap-1 items-center font-medium font-sketch duration-700 cursor-pointer hover:text-yellow text-[14px] md:text-[15px]"
              >
                Gallery
              </Link>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-bold text-[20px] md:text-xl font-sketch uppercase text-yellow">
              Download the App
            </h2>
           <p className="flex flex-row text-white gap-1 items-center font-medium font-sketch duration-700 cursor-pointer hover:text-yellow text-[14px] md:text-[15px]">Say hello to our refreshed App! Rewards, perks & the MyLahore world at your fingertips.</p>
             <div className="flex gap-5">
                <img src="/google-play.png" width="40%" alt="" />
                <img src="/app-store.png" width="40%" alt="" />
              </div>
          </div>
        </div>
        <div className="container">
          <hr className="text-yellow mt-5 w-full" />
          <footer className="text-white py-3 text-center text-[10px] md:text-[14px] duration-700 hover:text-red">
            Copyright &copy; 2025 {" "}
            <Link to="https://nespak.com.pk/" className="duration-700 hover:underline">
              bdking
            </Link>
            {" "} All Right Reserved!
          </footer>
        </div>
      </div>
  )
}

export default Footer
