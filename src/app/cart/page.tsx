import { IoIosArrowForward } from "react-icons/io";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Image from "next/image";
import { MdOutlineDiscount } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";

export default function Cart() {
  return (
    <section className="p-6">
      {/* Breadcrumb */}
      <div className="w-[215px] h-[19px] flex items-center gap-[6px] ml-[100px] mb-6">
        <div className="w-[56px] h-[19px] flex items-center justify-between gap-1">
          <h2 className="font-satoshi text-sm font-normal leading-[18.9px] text-[#00000099]">
            Home
          </h2>
          <IoIosArrowForward />
        </div>
        <div className="w-[56px] h-[19px] flex items-center justify-between">
          <h2 className="font-satoshi text-sm font-normal leading-[18.9px] text-[#00000099]">
            Cart
          </h2>
        </div>
      </div>

      {/* Page Title */}
      <h1 className="text-[40px] leading-[48px] font-integral font-bold ml-[100px] mb-8">
        Your Cart
      </h1>

      {/* Cart Layout Container */}
      <div className="flex flex-col md:flex-row  md:ml-[100px] gap-10">
        {/* Left Div - Cart Items */}
        <div className="flex flex-col gap-6">
          {/* Cart Item 1 */}
          <div className="md:w-[667px] md:h-[135px] flex items-start justify-between border border-black p-4">
            <div className="flex items-center gap-3">
              <Image
                src="/fonts/images/casual-1.png"
                alt="Casual 1 T-shirt"
                width={124}
                height={124}
              />
              <div className="flex flex-col justify-between">
                <h2 className="font-satoshi text-xl font-bold leading-7">
                  Gradient Graphic T-Shirt
                </h2>
                <h2 className="text-sm font-normal leading-5">Size: Large</h2>
                <h2 className="text-sm font-normal leading-5">Color: White</h2>
                <h2 className="text-2xl font-bold leading-8">$145</h2>
              </div>
            </div>
            <div className="flex flex-col items-end justify-between">
              <RiDeleteBin5Fill className="text-red-600 text-xl cursor-pointer" />
              <div className="w-[126px] h-[44px] rounded-[62px] flex items-center justify-center gap-4 bg-white border">
                <button className="w-5 h-5 hover:bg-black hover:text-white rounded-full flex items-center justify-center">
                  -
                </button>
                <h3 className="font-satoshi text-sm font-medium leading-5">1</h3>
                <button className="w-5 h-5 hover:bg-black hover:text-white rounded-full flex items-center justify-center">
                  +
                </button>
              </div>
            </div>
          </div>
          {/* Cart Item 2 */}
          <div className="md:w-[667px] md:h-[135px] flex items-start justify-between border border-black p-4">
            <div className="flex items-center gap-3">
              <Image
                src="/fonts/images/casual-5.png"
                alt="Casual 1 T-shirt"
                width={124}
                height={124}
              />
              <div className="flex flex-col justify-between">
                <h2 className="font-satoshi text-xl font-bold leading-7">
                  Gradient Graphic T-Shirt
                </h2>
                <h2 className="text-sm font-normal leading-5">Size: Large</h2>
                <h2 className="text-sm font-normal leading-5">Color: White</h2>
                <h2 className="text-2xl font-bold leading-8">$145</h2>
              </div>
            </div>
            <div className="flex flex-col items-end justify-between">
              <RiDeleteBin5Fill className="text-red-600 text-xl cursor-pointer" />
              <div className="w-[126px] h-[44px] rounded-[62px] flex items-center justify-center gap-4 bg-white border">
                <button className="w-5 h-5 hover:bg-black hover:text-white rounded-full flex items-center justify-center">
                  -
                </button>
                <h3 className="font-satoshi text-sm font-medium leading-5">1</h3>
                <button className="w-5 h-5 hover:bg-black hover:text-white rounded-full flex items-center justify-center">
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Additional Cart Item3 */}
          <div className="md:w-[667px] md:h-[135px] flex items-start justify-between border border-black p-4">
            <div className=" flex items-center gap-3 ">
              <Image
                src="/fonts/images/casual-4.png"
                alt="Casual 1 T-shirt"
                width={120}
                height={120}
                className="object-contain"
              />
              <div className="flex flex-col justify-between">
                <h2 className="font-satoshi text-xl font-bold leading-7">
                  Gradient Graphic T-Shirt
                </h2>
                <h2 className="text-sm font-normal leading-5">Size: Large</h2>
                <h2 className="text-sm font-normal leading-5">Color: White</h2>
                <h2 className="text-2xl font-bold leading-8">$145</h2>
              </div>
            </div>
            <div className="flex flex-col items-end justify-between">
              <RiDeleteBin5Fill className="text-red-600 text-xl cursor-pointer" />
              <div className="w-[126px] h-[44px] rounded-[62px] flex items-center justify-center gap-4 bg-white border">
                <button className="w-5 h-5 hover:bg-black hover:text-white rounded-full flex items-center justify-center">
                  -
                </button>
                <h3 className="font-satoshi text-sm font-medium leading-5">1</h3>
                <button className="w-5 h-5 hover:bg-black hover:text-white rounded-full flex items-center justify-center">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Div - Order Summary */}
        <div className="md:w-[505px] md:h-[458px] rounded-3xl border border-black py-5 px-6 flex flex-col justify-between">
          <h1 className="text-2xl font-bold leading-8 mb-5">Order Summary</h1>

          {/* Calculations */}
          <div className="flex flex-col gap-5">
            <div className="flex justify-between">
              <h2 className="text-xl text-[#00000099]">Sub Total</h2>
              <h2 className="text-xl font-extrabold">$565</h2>
            </div>
            <div className="flex justify-between">
              <h2 className="text-xl text-[#00000099]">Discount (-20%)</h2>
              <h2 className="text-xl font-extrabold text-red-500">-$113</h2>
            </div>
            <div className="flex justify-between">
              <h2 className="text-xl text-[#00000099]">Delivery Fee</h2>
              <h2 className="text-xl font-extrabold">-$15</h2>
            </div>

            <div className="h-[1px] bg-[#0000001A]"></div>

            <div className="flex justify-between">
              <h2 className="text-xl text-[#00000099]">Total</h2>
              <h2 className="text-xl font-extrabold">$467</h2>
            </div>
          </div>

          {/* Promo Code Input */}
          <div className="flex gap-3 my-5">
            <div className="flex items-center gap-3 w-full border rounded-[62px] py-3 px-4">
              <MdOutlineDiscount className="w-6 h-6" />
              <input
                type="text"
                placeholder="Add Promo Code"
                className="w-full border-none outline-none"
              />
            </div>
            <button className="w-[119px] h-12 rounded-[62px] bg-black text-white">
              Apply
            </button>
          </div>

          {/* Checkout Button */}
          <button className="w-full h-[60px] rounded-[62px] bg-black text-white flex items-center justify-center gap-3">
            Go to Checkout <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
