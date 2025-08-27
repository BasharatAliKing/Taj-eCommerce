import React from "react";
import Hero from "../components/Hero";
import Welcome from "../components/Welcome";
import Menu from "../components/Menu";
import Rewards from "../components/Rewards";
import Venues from "../components/Venues";
import Fusion from "../components/Fusion";
import Catering from "../components/Catering";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import { FaStar } from "react-icons/fa";
import OurVenues from "../components/OurVenues";
import { GoDotFill } from "react-icons/go";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="flex bg-[#FFD300] py-5 text-white">
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
      <div className="flex bg-[#4A4A4A]  py-16 pb-50">
        <div className="container">
          <img src="/welcome.png" width="70%" alt="" />
        </div>
      </div>
      {/* yellow line image */}
      <div className="-mt-25">
        <svg
          width="100%"
          height="100"
          viewBox="0 0 1200 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#f0d200">
            <polygon points="0,0 60,0 100,100 40,100" />
            <polygon points="120,0 180,0 220,100 160,100" />
            <polygon points="240,0 300,0 340,100 280,100" />
            <polygon points="360,0 420,0 460,100 400,100" />
            <polygon points="480,0 540,0 580,100 520,100" />
            <polygon points="600,0 660,0 700,100 640,100" />
            <polygon points="720,0 780,0 820,100 760,100" />
            <polygon points="840,0 900,0 940,100 880,100" />
            <polygon points="960,0 1020,0 1060,100 1000,100" />
            <polygon points="1080,0 1140,0 1180,100 1120,100" />
          </g>
        </svg>
      </div>
      {/* food to make */}
      <section className="relative h-[120vh] bg-cover bg-center bg-[url(/food-to-make.jpg)]">
        <img
          src="/british-asian-kitchen.png"
          className="absolute -top-25 left-20 z-10"
          width="15%"
          alt=""
        />
        <img
          src="/stars.svg"
          className="absolute -top-5 right-20 z-10"
          width="6%"
          alt=""
        />
        <div className="absolute inset-0 bg-[#221b4b7a] bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-6">
          <img src="/food-to-make-you-feel.png" alt="" />
          <img
            src="/yum-yum.png"
            width="20%"
            className="mr-auto ml-[20%]"
            alt=""
          />
        </div>
      </section>
      {/* food-Menus */}
      <div className="relative py-16 bg-[#4A4A4A]">
        <div className="absolute flex flex-col gap-5 right-20 w-[300px] top-70  z-20">
          <img src="/sparklewowed.png" className="" alt="" />
          <img src="/burger-outline--large.png" className="" alt="" />
          <img src="/homemade.png" className="" alt="" />
        </div>
        <div className="container w-full flex flex-col gap-10">
          <img src="/our-food-menus--large.png" width="50%" alt="" />
          <p className="md:w-[50%] text-base text-white font-semibold">
            If variety is the spice of life…we’re pretty hot! At MyLahore you’ll
            enjoy traditional tastes with a modern twist (and a personal touch)
            as we get creative with the finest, freshest ingredients. Tuck into
            our 100% halal choices below:
          </p>
          <div className="flex gap-5 md:w-[50%]">
            <button className="bg-[#FFD300] p-5 text-white hover:animate-scl font-medium text-base w-full rounded-md">
              MAIN MENU
            </button>
            <button className="bg-[#FFD300] p-5 text-white hover:animate-scl font-medium text-base w-full rounded-md">
              CATERING
            </button>
          </div>
        </div>
      </div>
      {/* repeating background */}
      <div className="relative py-16 bg-cover bg-center bg-[url(/repeating-background.png)]">
        <div className="container">
          <img src="/100-superlicious.png" alt="" />
        </div>
      </div>
      <div className="flex absolute w-full">
        <img
          src="/stars.svg"
          className="absolute -top-18 right-20  z-30"
          width="6%"
          alt=""
        />
        <img
          src="/stars.svg"
          className="absolute  z-30 left-20 top-10"
          width="6%"
          alt=""
        />
        <img src="/bg.png" className="relative w-full -mt-30 z-10" alt="" />
      </div>
      {/* my lahore rewards */}
      <div className="relative  bg-cover bg-center bg-[url(/button-pattern-pink.png)]">
        <div className="py-16 pt-28 inset-0 bg-[#4a4a4a8a] bg-opacity-40 flex flex-col  text-white">
          <div className="container flex ">
            <div className="flex flex-col gap-5 md:w-1/2">
              <img src="/new-rewards.png" width="80%" alt="" />
              <img src="/new-rewards-scheme.png" width="80%" alt="" />
            </div>
            <div className="flex flex-col gap-5 md:w-1/2 my-auto">
              <p className="text-base text-white font-semibold">
                Save money and enjoy more with MyLahore Rewards – sign up today!
              </p>
              <p className="text-base text-white font-semibold">
                Our huuugely rewarding scheme offers you 10% credit on the value
                of your restaurant order to use on a future date! So every £10
                spent earns you £1 worth of credit! For example, spend £50 and
                get £5 credit to use later!
              </p>
              <p className="text-base text-white font-semibold">
                MyLahore Rewards is available for both dine-in and collection
                orders in all our stores, as well as telephone delivery orders
                at our Bradford Delivery store, though not for online delivery
                orders via UberEats.
              </p>
              <p className="text-base text-white font-semibold underline">
                Terms Apply!
              </p>
              <hr />
              <p className="text-base text-white font-semibold">
                Say hello to our refreshed App! Rewards, perks & the MyLahore
                world at your fingertips.
              </p>
              <div className="flex gap-5">
                <img src="/google-play.png" width="30%" alt="" />
                <img src="/app-store.png" width="30%" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* yellow line image */}
      <div className="-mt-25 relative z-10">
        <svg
          width="100%"
          height="100"
          viewBox="0 0 1200 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#f0d200">
            <polygon points="0,0 60,0 100,100 40,100" />
            <polygon points="120,0 180,0 220,100 160,100" />
            <polygon points="240,0 300,0 340,100 280,100" />
            <polygon points="360,0 420,0 460,100 400,100" />
            <polygon points="480,0 540,0 580,100 520,100" />
            <polygon points="600,0 660,0 700,100 640,100" />
            <polygon points="720,0 780,0 820,100 760,100" />
            <polygon points="840,0 900,0 940,100 880,100" />
            <polygon points="960,0 1020,0 1060,100 1000,100" />
            <polygon points="1080,0 1140,0 1180,100 1120,100" />
          </g>
        </svg>
      </div>
      <OurVenues />
      {/* fusion to be celebrated */}
      <div className="relative -mt-15 py-16  bg-cover bg-center bg-[url(/parallel--yellow-green--large.png)]">
        <img
          src="/stars.svg"
          className="absolute right-20 top-0"
          width="7%"
          alt=""
        />
        <div className="container flex">
          <img src="/a-fusion-of-all.png" alt="" />
          <img
            src="/baguette.png"
            className="absolute right-20"
            width="30%"
            alt=""
          />
        </div>
      </div>
      {/* instagram post */}
      <div className="bg-charkol pt-40 py-16 -mt-10">
        <h1 className="text-xl text-white mt-5 font-bold uppercase text-center font-dancing">
          Checkout our Instagram for latest updates
        </h1>
      </div>
      <div className="relative bg-cover bg-center bg-[url(/CateringLargeComp.jpg)]">
        <div className="bg-[#221b4b40] py-20">
          <div className="container flex gap-10">
            <img src="/catering-for-special-occasions.png" className="mb-auto" width="50%" alt="" />
            <div className="flex flex-col gap-5">
              <div className="flex bg-[#ce357799] p-3 rounded-md flex-col gap-1">
                <p className="text-white text-lg font-medium font-sketch">
                  Events and Catering
                </p>
                <p className="text-white text-lg font-medium font-sketch">
                  MyLahore can take care of your catering requirements with a
                  wide variety of canapes, starters, mains, desserts and
                  showpiece cakes for all kinds of events at any venue of your
                  choosing.
                </p>
                <ul className="flex flex-col">
                  <li className="text-white text-lg font-medium font-sketch flex items-center "><GoDotFill className="text-sm mr-1" /> Submit catering <span className="underline">enquiry</span></li>
                  <li className="text-white text-lg font-medium font-sketch flex items-center "><GoDotFill className="text-sm mr-1" /> View our <span className="underline">Events and Catering Brochure</span></li>
                  <li className="text-white text-lg font-medium font-sketch flex items-center "><GoDotFill className="text-sm mr-1" /> Landline <span className="underline">01274952111</span></li>
                  <li className="text-white text-lg font-medium font-sketch flex items-center "><GoDotFill className="text-sm mr-1" /> Mobile <span className="underline">07498603763</span></li>
                  <li className="text-white text-lg font-medium font-sketch flex items-center "><GoDotFill className="text-sm mr-1" /> Email <span className="underline">events@mylahore.co.uk</span></li>
                  <li className="text-white text-lg font-medium font-sketch flex items-center "><GoDotFill className="text-sm mr-1" /> Website <span className="underline">bymylahore.co.uk</span></li>
                </ul>

              </div>
              <div className="flex bg-[#ce357799] p-3 rounded-md flex-col gap-1">
                <p className="text-white text-lg font-medium font-sketch">
                  Events and Catering
                </p>
                <p className="text-white text-lg font-medium font-sketch">
                  MyLahore can take care of your catering requirements with a
                  wide variety of canapes, starters, mains, desserts and
                  showpiece cakes for all kinds of events at any venue of your
                  choosing.
                </p>
                <ul className="flex flex-col">
                  <li className="text-white text-lg font-medium font-sketch flex items-center "><GoDotFill className="text-sm mr-1" /> Submit catering <span className="underline">enquiry</span></li>
                  <li className="text-white text-lg font-medium font-sketch flex items-center "><GoDotFill className="text-sm mr-1" /> View our <span className="underline">Events and Catering Brochure</span></li>
                  <li className="text-white text-lg font-medium font-sketch flex items-center "><GoDotFill className="text-sm mr-1" /> Landline <span className="underline">01274952111</span></li>
                  <li className="text-white text-lg font-medium font-sketch flex items-center "><GoDotFill className="text-sm mr-1" /> Mobile <span className="underline">07498603763</span></li>
                  <li className="text-white text-lg font-medium font-sketch flex items-center "><GoDotFill className="text-sm mr-1" /> Email <span className="underline">events@mylahore.co.uk</span></li>
                  <li className="text-white text-lg font-medium font-sketch flex items-center "><GoDotFill className="text-sm mr-1" /> Website <span className="underline">bymylahore.co.uk</span></li>
                </ul>

              </div>
              <div className="flex bg-[#ce357799] p-3 rounded-md flex-col gap-1">
                <p className="text-white text-lg font-medium font-sketch">
                  Events and Catering
                </p>
                <p className="text-white text-lg font-medium font-sketch">
                  MyLahore can take care of your catering requirements with a
                  wide variety of canapes, starters, mains, desserts and
                  showpiece cakes for all kinds of events at any venue of your
                  choosing.
                </p>
                <ul className="flex flex-col">
                  <li className="text-white text-lg font-medium font-sketch flex items-center "><GoDotFill className="text-sm mr-1" /> Submit catering <span className="underline">enquiry</span></li>
                  <li className="text-white text-lg font-medium font-sketch flex items-center "><GoDotFill className="text-sm mr-1" /> View our <span className="underline">Events and Catering Brochure</span></li>
                  <li className="text-white text-lg font-medium font-sketch flex items-center "><GoDotFill className="text-sm mr-1" /> Landline <span className="underline">01274952111</span></li>
                  <li className="text-white text-lg font-medium font-sketch flex items-center "><GoDotFill className="text-sm mr-1" /> Mobile <span className="underline">07498603763</span></li>
                  <li className="text-white text-lg font-medium font-sketch flex items-center "><GoDotFill className="text-sm mr-1" /> Email <span className="underline">events@mylahore.co.uk</span></li>
                  <li className="text-white text-lg font-medium font-sketch flex items-center "><GoDotFill className="text-sm mr-1" /> Website <span className="underline">bymylahore.co.uk</span></li>
                </ul>

              </div>
           
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
