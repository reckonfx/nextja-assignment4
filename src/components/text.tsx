import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { MdOutlineSettingsInputComponent } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import Card from "@/components/card";
import React from 'react'

const text = () => {
  return (
    <>
    {/* main div */}

    <div className="w-full h-auto flex items-center justify-between ">
        {/* main div start's above */}
    <div>
        {/*  left div starts here */}
      <div className="">
        <Image
          src={"/fonts/images/t-shirt.png"}
          alt="t-shirt image"
          width={358}
          height={290}
          className="ml-4 rounded-[20px] overflow-hidden bg-[#F0EEED] hover:scale-105  "
        />
        {/* internal cards  */}
        <div className="flex items-center mt-5 ">
          <Image
            src={"/fonts/images/t-shirt-front.png"}
            alt="t-shirt front image"
            width={111}
            height={106}
            className="ml-4 rounded-[20px] border border-black overflow-hidden bg-[#F0EEED] hover:scale-105 "
          />
          <Image
            src={"/fonts/images/tshirt-back.png"}
            alt="t-shirt back image"
            width={111}
            height={106}
            className="ml-4 rounded-[20px] border border-black overflow-hidden bg-[#F0EEED] hover:scale-105 "
          />
          <Image
            src={"/fonts/images/tshirt-display.png"}
            alt="t-shirt back image"
            width={111}
            height={106}
            className="ml-4 rounded-[20px] border border-black overflow-hidden bg-[#F0EEED] hover:scale-105 "
          />
        </div>
      </div>
       {/* left div end here */}
    </div>

    {/* left div strats here */}

    {/* information section  */}
    <div className="ml-[16px] mt-2 font-integral flex flex-col items-start justify-between gap-3">
        <h1 className="w-[220px] h-[56px] text-2xl font-bold leading-7">
          One Life Graphic T-shirt
        </h1>
        <div className="w-[154px] h-[19px] text-yellow-500 flex items-center gap-4">
          {Array(5)
            .fill(5)
            .map((_, index) => (
              <FaStar key={index} />
            ))}
        </div>

        <h2 className="w-[205px] h-[32px] text-black flex items-center gap-[10px] font-satoshi text-2xl font-bold leading-8">
          $260
          <span className="font-satoshi text-2xl font-bold leading-8 line-through text-[#0000004D]">
            $300
          </span>
          <span className="font-satoshi text-xl font-medium leading-5 text-red-500 rounded-[62px] py-[6px] px-4 bg-[#FF33331A]">
            -40%
          </span>
        </h2>
        <p className="w-[358px] h-[50px] font-satoshi text-[#00000099] text-sm font-normal leading-5">
          This graphic t-shirt which is perfect for any occasion. Crafted from a
          soft and breathable fabric, it offers superior comfort and style.
        </p>
      </div>
      <div className=" mt-5 mb-5 w-[358px] h-[1px] bg-[#0000001A]"></div>

      {/* size selection */}

      
      
        {/* reviews and rating section */}
        <div className="pt-5 mb-5 ml-4">
        <ul className=" w-[353px] flex items-center justify-between">
            <li className="border-b-2 border-transparent hover:border-b-2 hover:border-black">Product Details</li>
            <li className="border-b-2 border-transparent hover:border-b-2 hover:border-black">Rating & Reviews</li>
            <li className="border-b-2 border-transparent hover:border-b-2 hover:border-black">FAQs</li>
        </ul>

      </div>

      <div className=" w-[353px] flex items-center justify-between pb-10 ml-4">
        <h3 className="w-[175px] h-[32px] font-satoshi text-xl font-bold leading-7">All Reviews <span className="ml-1 text-base font-normal leading-5 text-[#00000099] ">(451)</span></h3>
        <div className="w-[173px] flex items-center justify-between gap-3">
        <MdOutlineSettingsInputComponent width={15} height={15} className="w-10 h-10 rounded-full text-black hover:text-white hover:bg-black bg-[#F0F0F0] bg-cover"/>
        <button className=" hidden w-[120px] h-12 rounded-[62px] py-4 px-5 bg-[#F0F0F0] ">Latest <IoIosArrowDown /> </button>
        <button className="w-[113px] h-10 rounded-[62px]  py-3 px-2 bg-black text-white text-xs font-medium leading-4 pb-3">Write a Review</button>
        </div>
      </div> 

      {/* left div end here */}


    {/* main div end here */}
    </div>
    </>
      
  )
}

export default text
