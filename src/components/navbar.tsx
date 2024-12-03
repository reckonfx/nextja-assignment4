import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="bg-white m-auto py-5 ">
      {/* Top Banner Section */}
      <section className="w-full bg-black flex items-center justify-center">
        <div className="max-w-[1440px] px-4">
          <h2 className="text-[14px] font-normal leading-[18.9px] text-white text-center">
            Sign up and get 20% off your first order.{" "}
            <span className="font-medium underline decoration-solid">
              Sign Up Now
            </span>
          </h2>
        </div>
      </section>

      {/* Navbar Section */}
      <div className=" md:max-w-full md:h-[48px] md:ml-[100px]  flex items-center gap-5 justify-between  bg-white mt-[62px] md:mx-16 text-black">
        {/* Logo */}
        <div className="flex gap-5 ml-4">
        <p className="md:hidden">&#9776;</p>
        <h1 className="text-[25.2px] md:text-5xl font-extrabold leading-[30.24px] md:leading-[38.4px] font-integral-extra">
          SHOP.CO
        </h1>
        </div>

        {/* Navigation Menu */}
        <div className="  md:flex items-center md:justify-between gap-[24px] font-satoshi ">
          <ul className=" hidden md:text-[16px] font-normal leading-[21.6px] md:flex items-center gap-6">
            <li className="flex items-center font-satoshi">
              Shop
              <IoIosArrowDown className="ml-1" />
            </li>
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brands</li>
          </ul>
          {/*  search div */}

          <div className="flex items-center justify-between ">
            <div className="md:w-[577px] h-[45px] rounded-[62px] py-3 px-4 bg-[#F0F0F0] flex gap-2">
              <IoIosSearch className="w-5 h-5" />
              <input
                type="text"
                placeholder="Search for products..."
                className=" hidden md:text-base font-normal leading-[21.5px]  rounded-full w-full border-none bg-[#F0F0F0] "
              />
            </div>
            {/* cart logo div */}

            <div className=" w-[62px] h-[24px] ml-5 flex items-center justify-between relative">
              <FiShoppingCart className="w-5 h-5" />
              <FaRegUserCircle className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
