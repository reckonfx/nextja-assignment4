import Card from "@/components/card";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { GiSettingsKnobs } from "react-icons/gi";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";

export default function Casual() {
  return (
    <div>
      {/* Top Links */}
      <div className="w-[215px] h-[19px] flex items-center gap-[6px] ml-[100px]">
        <div className="w-[56px] h-[19px] flex items-center justify-between gap-1">
          <h2 className="font-satoshi text-sm font-normal leading-[18.9px] text-[#00000099]">
            Home
          </h2>
          <IoIosArrowForward />
        </div>
        <div className="w-[56px] h-[19px] flex items-center justify-between">
          <h2 className="font-satoshi text-sm font-normal leading-[18.9px] text-[#00000099]">
            Casual
          </h2>
        </div>
      </div>

      <div className="  md:flex items-start gap-3">
        {/* Left Sidebar */}
        <div className="leftBar block md:w-[295px] md:h-[1220px] rounded-[20px] border border-[#0000001A] py-5 px-6 md:ml-[100px]">
            {/* filter div */}
            <div className="md:w-[247px] md:h-[27px]  flex item-center justify-between gap-5">
                <h2 className="text-xl font-bold leading-7 ">Filters</h2>
                <GiSettingsKnobs  className="text-gray-500 w-6 h-6"/>

            </div>

            <div className="md:w-[247px h-[1px] bg-[#0000001A] my-3"></div>
            {/* menu div */}
            <div className="md:w-[247px] md:h-[160px] flex flex-col md:items-center items-start gap-5">
                <ul className="flex  items-center justify-between flex-col gap-5 ">
                    <li className="md:w-[247px] md:h-[16px] flex items-start justify-between font-satoshi text-base font-normal leading-5 text-[#00000099]">T-shirts  <span><IoIosArrowForward  /> </span></li>
                    <li className="md:w-[247px] md:h-[16px] flex items-start justify-between font-satoshi text-base font-normal leading-5 text-[#00000099]">Shorts <span><IoIosArrowForward  /> </span></li>
                    <li className="md:w-[247px] md:h-[16px] flex items-start justify-between font-satoshi text-base font-normal leading-5 text-[#00000099]">Shirts <span><IoIosArrowForward  /> </span></li>
                    <li className="md:w-[247px] md:h-[16px] flex items-start justify-between font-satoshi text-base font-normal leading-5 text-[#00000099]">Hoodies <span><IoIosArrowForward  /> </span></li>
                    <li className="md:w-[247px] md:h-[16px] flex items-start justify-between font-satoshi text-base font-normal leading-5 text-[#00000099]">Jeans <span><IoIosArrowForward  /> </span></li>
                </ul>
            </div>
            <div className="md:w-[247px] h-[1px] bg-[#0000001A] my-3"></div>

            {/* price div */}
            <div className="md:w-[247px] md:h-[90px] flex items-start justify-around flex-col gap-5 mb-5 ">
                <div className="flex items-center justify-between gap-48">
                    <h2>Price</h2>
                    <IoIosArrowForward  className="-rotate-90"/>

                </div>
                <Image src={"/fonts/images/price-image.png"} alt="brice bar" width={247} height={20}/>
            </div>
            <div className="md:w-[247px] h-[1px] bg-[#0000001A] my-3"></div>


            {/* colors div */}
            <div className="md:w-[247px] ms:h-[137px] flex items-start flex-col justify-between gap-2 md:gap-5" >
                <div className="md:w-[247px] ms:h-[27px] flex items-start justify-between ">
                    <h2>Colors</h2>
                    <IoIosArrowForward  className="-rotate-90"/>
                </div>

                <div className="w-[247px] h-[90px] flex items-start justify-between gap-4">
                    <button className="w-[37px] h-[37px] border-2 border-[#00000033] rounded-full bg-[#00C12B]"></button>
                    <button className="w-[37px] h-[37px] border-2 border-[#00000033] rounded-full bg-[#F50606]"></button>
                    <button className="w-[37px] h-[37px] border-2 border-[#00000033] rounded-full bg-[#F5DD06]"></button>
                    <button className="w-[37px] h-[37px] border-2 border-[#00000033] rounded-full bg-[#F57906]"></button>
                    <button className="w-[37px] h-[37px] border-2 border-[#00000033] rounded-full bg-[#06CAF5]"></button>
                </div>
                <div className="w-[247px] h-[90px] flex items-start justify-between gap-2">
                    <button className="w-[37px] h-[37px] border-2 border-[#00000033] rounded-full bg-[#063AF5]"></button>
                    <button className="w-[37px] h-[37px] border-2 border-[#00000033] rounded-full bg-[#7D06F5]"></button>
                    <button className="w-[37px] h-[37px] border-2 border-[#00000033] rounded-full bg-[#F506A4]"></button>
                    <button className="w-[37px] h-[37px] border-2 border-[#00000033] rounded-full bg-[#ffffff]"></button>
                    <button className="w-[37px] h-[37px] border-2 border-[#00000033] rounded-full bg-[#000000]"></button>
                </div>
                <div className="md:w-[247px] h-[1px] bg-[#0000001A] my-3"></div>

                {/* size div */}

                <div className="md:w-[247px] ms:h-[137px] flex items-start flex-col justify-between gap-5" >
                <div className="md:w-[247px] ms:h-[27px] flex items-start justify-between ">
                    <h2>Size</h2>
                    <IoIosArrowForward  className="-rotate-90"/>
                </div>

                <div className="md:w-[247px] ms:h-[90px] flex items-start  flex-row  flex-wrap justify-start gap-3">
                    <button className=" border-2  rounded-[62px] py-[10px] px-[20px] bg-[#fdfdfd] text-[#00000099] text-sm font-normal leading-5 hover:bg-black hover:text-white">XX Small</button>
                    <button className=" border-2  rounded-[62px] py-[10px] px-[20px] bg-[#fdfdfd] text-[#00000099] text-sm font-normal leading-5 hover:bg-black hover:text-white">X Small</button>
                    <button className=" border-2  rounded-[62px] py-[10px] px-[20px] bg-[#fdfdfd] text-[#00000099] text-sm font-normal leading-5 hover:bg-black hover:text-white">Small</button>
                    <button className=" border-2  rounded-[62px] py-[10px] px-[20px] bg-[#fdfdfd] text-[#00000099] text-sm font-normal leading-5 hover:bg-black hover:text-white">Medium</button>
                    <button className=" border-2  rounded-[62px] py-[10px] px-[20px] bg-[#fdfdfd] text-[#00000099] text-sm font-normal leading-5 hover:bg-black hover:text-white">Large</button>
                    <button className=" border-2  rounded-[62px] py-[10px] px-[20px] bg-[#fdfdfd] text-[#00000099] text-sm font-normal leading-5 hover:bg-black hover:text-white">XLarge</button>
                    <button className=" border-2  rounded-[62px] py-[10px] px-[20px] bg-[#fdfdfd] text-[#00000099] text-sm font-normal leading-5 hover:bg-black hover:text-white">XX Large</button>
                    <button className=" border-2  rounded-[62px] py-[10px] px-[20px] bg-[#fdfdfd] text-[#00000099] text-sm font-normal leading-5 hover:bg-black hover:text-white">3X Large</button>
                    <button className=" border-2  rounded-[62px] py-[10px] px-[20px] bg-[#fdfdfd] text-[#00000099] text-sm font-normal leading-5 hover:bg-black hover:text-white">4X Large</button>
                    
                </div>
               
                <div className="md:w-[247px] h-[1px] bg-[#0000001A] my-3"></div>  

                {/* Dress Style Div                      */}
                
                <div className="md:w-[247px] md:h-[170px] flex flex-col items-center gap-5">
                <ul className="flex  items-center justify-between flex-col gap-5 ">
                    <li className="md:w-[247px] md:h-[16px] flex items-start justify-between font-satoshi text-xl font-bold leading-7 text-[#00000099]">Dress Style  <span><IoIosArrowForward  className="-rotate-90" /> </span></li>
                    <li className="md:w-[247px] md:h-[16px] flex items-start justify-between font-satoshi text-base font-normal leading-5 text-[#00000099]">Casual <span><IoIosArrowForward  /> </span></li>
                    <li className="md:w-[247px] md:h-[16px] flex items-start justify-between font-satoshi text-base font-normal leading-5 text-[#00000099]">Formal <span><IoIosArrowForward  /> </span></li>
                    <li className="md:w-[247px] md:h-[16px] flex items-start justify-between font-satoshi text-base font-normal leading-5 text-[#00000099]">Party <span><IoIosArrowForward  /> </span></li>
                    <li className="md:w-[247px] md:h-[16px] flex items-start justify-between font-satoshi text-base font-normal leading-5 text-[#00000099]">Gym <span><IoIosArrowForward  /> </span></li>
                </ul>
            </div>
           
                <button className="md:w-[247px] md:h-[48] rounded-[62px] bg-black text-white py-4 px-14 flex items-center justify-center">Apply Filter</button>

            </div>
                


            </div>

        </div>

        {/* Right Side Cards Section */}
        <div className="w-full">
          <section className=" block  w-full h-auto md:flex items-center justify-center md:justify-between">
            <h1 className="font-satoshi text-3xl leading-[43.2px]">Casual</h1>

            <div className="flex gap-4">
              <p className="font-satoshi text-base font-normal leading-5 text-[#00000099]">
                Showing 1-10 of 100 Products
              </p>
              <p className="font-satoshi text-base font-normal leading-5 text-[#00000099] flex items-center gap-1">
                Sort by:{" "}
                <span className="font-medium text-black flex items-center gap-1">
                  Most Popular <IoIosArrowDown />
                </span>
              </p>
            </div>
          </section>

          {/* Cards Container */}
          <div className="grid place-items-center grid-cols-1 md:grid-cols-3 gap-6 mt-4 p-3">
            <Card
              imageUrl="/fonts/images/casual-1.png"
              h1="Gradient Graphic T-shirt"
              stars="/s4.png"
              ranking="4.5/5"
              price={145}
              className="w-[200px] h-[200px] md:w-[295px] md:h-[450px] rounded-[13.42px] p-3 md:rounded-[20px] bg-[#F0EEED] "

              />
            <Card
              imageUrl="/fonts/images/casual-2.png"
              h1="Polo with Tipping Details"
              stars="/s4.png"
              ranking= "4.5/5"
              price={180}
              className="w-[200px] h-[200px] md:w-[295px] md:h-[450px] rounded-[13.42px] p-3 md:rounded-[20px] bg-[#F0EEED] "

            />
            <Card
              imageUrl="/fonts/images/casual-3.png"
              h1="SLEEVE STRIPED T-SHIRT"
              stars="/s4.png"
              ranking="4.5/5"
              price={130}
              className="w-[200px] h-[200px] md:w-[295px] md:h-[450px] rounded-[13.42px] p-3 md:rounded-[20px] bg-[#F0EEED] "

            />
           <Card
              imageUrl="/fonts/images/casual-4.png"
              h1="SKINNY FIT JEANS"
              stars="/s4.png"
              ranking="3.5/5"
              price={240}
              className="w-[200px] h-[200px] md:w-[295px] md:h-[450px] rounded-[13.42px] p-3 md:rounded-[20px] bg-[#F0EEED] "

            /><Card
            imageUrl="/fonts/images/casual-5.png"
            h1="CHECKERED SHIRT"
            stars="/s4.png"
            ranking="4.5/5"
            price={180}
            className="w-[200px] h-[200px] md:w-[295px] md:h-[450px] rounded-[13.42px] p-3 md:rounded-[20px] bg-[#F0EEED] "

          /><Card
          imageUrl="/fonts/images/casual-6.png"
          h1="SLEEVE STRIPED T-SHIRT"
          stars="/s4.png"
          ranking="4.5/5"
          price={130}
          className="w-[200px] h-[200px] md:w-[295px] md:h-[450px] rounded-[13.42px] p-3 md:rounded-[20px] bg-[#F0EEED] "

        /><Card
        imageUrl="/fonts/images/casual-7.png"
        h1="VERTICAL STRIPED SHIRT"
        stars="/s4.png"
        ranking="5/5"
        price={212}
        className="w-[200px] h-[200px] md:w-[295px] md:h-[450px] rounded-[13.42px] p-3 md:rounded-[20px] bg-[#F0EEED] "

      /><Card
      imageUrl="/fonts/images/casual-8.png"
      h1="COURAGE GRAPHIC T-SHIRT"
      stars="/s4.png"
      ranking="4/5"
      price={145}
      className="w-[200px] h-[200px] md:w-[295px] md:h-[450px] rounded-[13.42px] p-3 md:rounded-[20px] bg-[#F0EEED] "

    /><Card
    imageUrl="/fonts/images/casual-9.png"
    h1="LOOSE FIT BERMUDA SHORTS"
    stars="/s4.png"
    ranking="3/5"
    price={80}
    className="w-[200px] h-[200px] md:w-[295px] md:h-[450px] rounded-[13.42px] p-3 md:rounded-[20px] bg-[#F0EEED] "

  />
          </div>
          <div className="md:w-full h-[1px] bg-[#0000001A] my-3"></div> 

          <div className="md:w-[920px] md:h-[40px] flex items-center justify-between mb-10">
            <button className="md:w-[110px] md:h-[36px] flex items-center justify-center gap-1 rounded-lg border border-black py-2 px-[14px] hover:bg-[#0000000F]"> <FaArrowLeft /> Previous</button>
            
                <ol className="flex items-center justify-between gap-1"  >
                   <li className="md:w-[40px] md:h-[40px] rounded-lg p-3 hover:bg-[#0000000F] text-sm font-medium items-center">1</li>
                   <li className="md:w-[40px] md:h-[40px] rounded-lg p-3  hover:bg-[#0000000F] text-sm font-medium items-center">2</li>
                   <li className="md:w-[40px] md:h-[40px] rounded-lg p-3  hover:bg-[#0000000F] text-sm font-medium items-center ">3</li>
                   <li className="md:w-[40px] md:h-[40px] rounded-lg p-3  hover:bg-[#0000000F] text-sm font-medium items-center ">...</li>
                   <li className="md:w-[40px] md:h-[40px] rounded-lg p-3  hover:bg-[#0000000F] text-sm font-medium items-center ">8</li>
                   <li className="md:w-[40px] md:h-[40px] rounded-lg  p-3  hover:bg-[#0000000F]     text-sm font-medium items-center">9</li>
                   <li className="md:w-[40px] md:h-[40px] rounded-lg  p-3  hover:bg-[#0000000F] text-sm font-medium items-center">10</li>
                </ol>
                <button  className="md:w-[110px] md:h-[36px] flex items-center justify-center rounded-lg gap-1 border border-black py-2 px-[14px] hover:bg-[#0000000F] ">Next <FaArrowLeft className="rotate-180" /> </button>
            
          </div>

        </div>
      </div>
    </div>
  );
}
