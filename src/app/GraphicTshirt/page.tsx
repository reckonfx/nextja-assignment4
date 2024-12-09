import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { MdOutlineSettingsInputComponent } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import Card from "@/components/card";
export default function GraphicTshirt() {
  return (
    <section className="w-full h-auto">
      {/* top links */}
      <div className="w-[215px] h-[19px] flex items-center justify-between gap-[6px] ml-4">
        <div className="w-[56px] h-[19px] flex items-center justify-between gap-1">
          <h2 className="font-satoshi text-sm font-normal leading-[18.9px] text-[#00000099]">
            Home
          </h2>
          <IoIosArrowForward />
        </div>
        <div className="w-[56px] h-[19px] flex items-center justify-between gap-1">
          <h2 className="font-satoshi text-sm font-normal leading-[18.9px] text-[#00000099]">
            Shop
          </h2>
          <IoIosArrowForward />
        </div>
        <div className="w-[56px] h-[19px] flex items-center justify-between gap-1">
          <h2 className="font-satoshi text-sm font-normal leading-[18.9px] text-[#00000099]">
            Men
          </h2>
          <IoIosArrowForward />
        </div>
        <div className="w-[56px] h-[19px] flex items-center justify-center gap-1">
          <h2 className="w-full font-satoshi text-sm font-normal leading-[18.9px] text-black">
            Tshirts
          </h2>
        </div>
      </div>

      {/*  image section */}
      <div className="md:col-start-2 md:col-span-2">
        <Image
          src={"/fonts/images/t-shirt.png"}
          alt="t-shirt image"
          width={358}
          height={290}
          className="ml-4 rounded-[20px] overflow-hidden bg-[#F0EEED] hover:scale-105   "
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

      <div className="w-[365px] h-[65px] ml-4 flex flex-col items-start gap-4">
        <h2 className="font-satoshi text-sm font-normal leading-5 text-[#00000099]">
          Choose Size
        </h2>
        <div className="w-[353px] h-[39px] flex items-center justify-center gap-3  pb-5">
          <button className=" w-[74px] h-[39px] text-sm  rounded-[62px] py-[10px] px-5 bg-[#F0F0F0] hover:bg-black hover:text-white ">
            Small
          </button>
          <button className=" w-[90px] h-[39px] text-sm  rounded-[62px] py-[10px] px-5 bg-[#F0F0F0] hover:bg-black hover:text-white">
            Medium
          </button>
          <button className=" w-[76px] h-[39px] text-sm  rounded-[62px] py-[10px] px-5 bg-[#F0F0F0] hover:bg-black hover:text-white ">
            Large
          </button>
          <button className=" w-[89px] h-[39px] text-sm rounded-[62px] py-[10px] px-3 bg-[#F0F0F0] hover:bg-black hover:text-white">
            X Large{" "}
          </button>
        </div>
      </div>
      <div className=" mt-5 mb-5 w-[358px] h-[1px] bg-[#0000001A]"></div>

      {/* add to cart section */}

      <div className="flex items-center gap-4 ml-4">

        <div className="leftdiv w-[110px] h-[44px] rounded-[62px] py-3 px-4 flex items-center justify-center gap-4 bg-white">
            <button className="w-5 h-5  hover:bg-black hover:text-white hover:rounded-full flex items-center justify-center">-</button>
            <h3 className="font-satoshi text-sm font-medium leading-5  ">1</h3>
            <button className="w-5 h-5 hover:bg-black hover:text-white hover:rounded-full flex items-center justify-center">+</button>
        </div>
                {/* right div */}
        <div className="rightdiv w-[236px] h-[44px] rounded-[62px] py-4 px-[54px] bg-black text-white flex items-center justify-center hover:bg-white hover:text-black">
           
            <button className="">Add to Cart</button>
        </div>

        
      </div>
      
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

            {/* reviews */}
            <div className=" w-[358px] flex  flex-col md:fkex-row items-center justify-between gap-5 contain-content ">
                {/* customer1 */}
             <div className=" border-[1px] border-[#0000001A] rounded-[20px] py-[28px] px-[32px] md:flex flex-col gap-5">
                <Image src={"/s5.png"} alt="ranking" width={139} height={22} />
                <Image src={"/cus-1.png"} alt="ranking" width={336} height={124}    />

             </div>
                {/* customer2 */}
             <div className=" border-[1px] border-[#0000001A] rounded-[20px] py-[28px] px-[32px] md:flex flex-col gap-5">
                <Image src={"/s5.png"} alt="ranking" width={139} height={22}  />
                <Image src={"/cus-2.png"} alt="ranking" width={336} height={124} />

             </div>
             {/* customer3 */}
             <div className="border-[1px] border-[#0000001A] rounded-[20px] py-[28px] px-[32px] md:flex flex-col gap-5">
                <Image src={"/s5.png"} alt="ranking" width={139} height={22} />
                <Image src={"/cus-3.png"} alt="ranking" width={336} height={124}  />

             </div>
             </div>


             <div className="w-[358px] flex item-c justify-center my-5">
             <button className="w-[195px] h-[47px] rounded-[62px] border py-[14px] px-6 border-[#0000001A] text-sm font-medium hover:bg-black hover:text-white"> Load More Reviews</button>

          


             </div>
             <h1 className="w-[284px] h-[72px] ml-[53px] font-intergral text-3xl px-5 font-bold leading-9 uppercase text-center mb-2 "> You Might Also Like</h1>
             <div className="w-[358px] block  md:flex items-center justify-center gap-3 ml-16  mb-20">
             

             <Card
                imageUrl="/fonts/images/polo-shirt.png"
                h1="SLEEVE STRIPED T-SHIRT"
                stars="/s4.png"
                ranking="4.5/5"
                price={212}
                className="  w-[270px] h-auto md:block md:w-[295px] md:h-[298px] md:rounded-[20px] md:bg-[#F0EEED] object-contain p-5"
                   />

                        <Card
                      imageUrl="/p1.png"
                      h1="T-SHIRT WITH TAPE DETAILS"
                      stars="/s1.png"
                      ranking="4.5/5"
                      price={120}
                      className="w-[200px] h-[200px] md:w-[295px] md:h-[298px] rounded-[13.42px] md:rounded-[20px] bg-[#F0EEED] object-contain p-5 "
                      />

             </div>

             


      

    </section>
  );
}
