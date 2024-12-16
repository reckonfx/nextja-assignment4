import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { MdOutlineSettingsInputComponent } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import Card from "@/components/card";
import { IoMdCheckmark } from "react-icons/io";
export default function Test(){
  return(
    <>
    <main className="w-[1240px] h-auto md:ml-[100px] ml-4 md:mb-24 mb-5">
      {/* top navigation links start here */}
    <div className="w-[215px] h-[19px] flex items-center justify-between gap-[6px] ml-4 mt-2">

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
          <h2 className="w-full font-satoshi text-sm font-normal leading-[18.9px]  text-black">
            Tshirts
          </h2>
        </div>
      </div>

      {/* top navigation links ends here */}
      

      {/* card information div starts here */}

      <div className="w-full flex items-start justify-center flex-col md:flex-row md:justify-between gap-5 md:gap-20  mt-5 ">

        {/* left image section */}

        <div className=" md:w-[40%] w-full flex items-start flex-col-reverse md:flex-row md:gap-5 ">
                
                {/* internal cards  */}
                <div className=" flex flex-row md:flex-col gap-2 mt-5 ">
                  <Image
                    src={"/fonts/images/t-shirt-front.png"}
                    alt="t-shirt front image"
                    width={111}
                    height={106}
                    className="  w-[111px] h-[106px] md:w-[152px] md:h-[167px] rounded-[20px]  overflow-hidden bg-[#F0EEED] hover:scale-105 "
                  />
                  <Image
                    src={"/fonts/images/tshirt-back.png"}
                    alt="t-shirt back image"
                    width={111}
                    height={106}
                    className="  w-[111px] h-[106px] md:w-[152px] md:h-[167px] rounded-[20px] overflow-hidden bg-[#F0EEED] hover:scale-105 "
                  />
                  <Image
                    src={"/fonts/images/tshirt-display.png"}
                    alt="t-shirt back image"
                    width={111}
                    height={106}
                    className=" w-[111px] h-[106px] md:w-[152px] md:h-[167px] rounded-[20px]  overflow-hidden bg-[#F0EEED] hover:scale-105 p-1 "
                  />
                </div>
              

                <div>
                <Image
                  src={"/fonts/images/t-shirt.png"}
                  alt="t-shirt image"
                  width={358}
                  height={290}
                  className=" w-[358px] h-[290px] md:w-[444px] md:h-[530px] rounded-[20px] overflow-hidden bg-[#F0EEED] hover:scale-105   "
                />
                </div>

        </div>


        {/* right information section starts here */}
        <div className="flex-1  flex flex-col gap-4">

        <h1 className="w-[220px] h-[56px] md:w-[600px] md:h-[48px] text-2xl md:text-5xl md:leading-[48px] font-integral font-bold leading-7">
          One Life Graphic T-shirt
        </h1>

        <div className="w-[154px] h-[19px] md:w-[193px] md:h-[24.71px] md:gap-4 text-yellow-500 flex items-center gap-4">
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
        <p className="w-[358px] h-[50px] md:w-[590px] md:h-[33px] font-satoshi text-[#00000099] text-sm md:text-base font-normal leading-5">
          This graphic t-shirt which is perfect for any occasion. Crafted from a
          soft and breathable fabric, it offers superior comfort and style.
        </p>

        <div className="w-[142px] h-[65px] flex flex-col gap-4 mt-5">
          <h2 className="text-base font-normal font-satoshi leading-5"> Select Colors</h2>
          <div className="flex gap-2">
            <div className=" w-[39px] h-[39px] md:w-[37px] md:h-[37px]  bg-[#4F4631] rounded-full flex items-center justify-center text-white"><IoMdCheckmark /></div>
            <div className=" w-[39px] h-[39px] md:w-[37px] md:h-[37px]  bg-[#314F4A] rounded-full"></div>
            <div className=" w-[39px] h-[39px] md:w-[37px] md:h-[37px]  bg-[#31344F] rounded-full"></div>
          </div>
        </div>
        <div className=" mt-5 mb-5 w-[358px] md:w-[590px] h-[1px] bg-[#0000001A]"></div>
        
        {/* size selection */}

      <div className="w-[365px] h-[65px] md:w-[420px] md:h-[46px] ml-4 flex flex-col items-start gap-4">
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
      <div className=" mt-5 mb-5 w-[358px] h-[1px] md:w-[590px] bg-[#0000001A]"></div>


      <div className="flex gap-5">
        
        <div className="leftdiv w-[110px] h-[44px] md:w-[170px] md:h-[52px] rounded-[62px] py-3 md:py-4 px-4 md:px-5 flex items-center justify-between gap-4 bg-white">
        
            <button className="w-5 h-5  hover:bg-black hover:text-white hover:rounded-full flex items-center justify-center">-</button>
            <h3 className="font-satoshi text-sm font-medium leading-5  ">1</h3>
            <button className="w-5 h-5 hover:bg-black hover:text-white hover:rounded-full flex items-center justify-center">+</button>
        </div>
        
                {/* right div */}
        <div className="rightdiv w-[236px] h-[44px] md:w-[400px] md:h-[52px] rounded-[62px] py-4 px-[54px] bg-black text-white flex items-center justify-center hover:bg-white hover:text-black">
           
            <button className="">Add to Cart</button>
        </div>
        </div>
        
        {/* right div ends here */}



        </div> 

        
        
      </div>

      {/* reviews and rating section */}
      <div className="pt-5 mb-5 ml-4">
        <ul className=" w-[353px] md:w-[1240px] flex items-center justify-between">
            <li className="border-b-2 border-transparent hover:border-b-2 hover:border-black">Product Details</li>
            <li className="border-b-2 border-transparent hover:border-b-2 hover:border-black">Rating & Reviews</li>
            <li className="border-b-2 border-transparent hover:border-b-2 hover:border-black">FAQs</li>
        </ul>
        <div className=" mb-5 w-[358px] md:w-[1240px] h-[1px] bg-[#0000001A]"></div>
      </div>
      {/* reviews and rating section's top ends here */}

      {/* main reviews start here */}

      <div className=" w-[353px] md:w-full flex items-center justify-between pb-10 ml-4">
        <h3 className="w-[175px] h-[32px] font-satoshi text-xl font-bold leading-7">All Reviews <span className="ml-1 text-base font-normal leading-5 text-[#00000099] ">(451)</span></h3>
        <div className="w-[173px] flex items-center justify-between gap-3">
        <MdOutlineSettingsInputComponent width={15} height={15} className="w-10 h-10 rounded-full text-black hover:text-white hover:bg-black bg-[#F0F0F0] bg-cover"/>
        <button className=" hidden w-[120px] h-12 rounded-[62px] py-4 px-5 bg-[#F0F0F0] ">Latest <IoIosArrowDown /> </button>
        <button className="w-[113px] h-10 rounded-[62px]  py-3 px-2 bg-black text-white text-xs font-medium leading-4 pb-3">Write a Review</button>
        </div>
      </div>

      {/* reviews */}
                  <div className=" w-[100%] flex  flex-col md:flex-row items-start justify-between gap-5 flex-wrap contain-content ">
                      {/* customer1 */}
                   <div className="w-[358px] md:w-[610px]  md:h-[241px] border-[1px] border-[#0000001A] rounded-[20px] py-[28px]  md:flex flex-col gap-5 contain-content">
                      <Image src={"/s5.png"} alt="ranking" width={139} height={22} />
                      <Image src={"/cus-1.png"} alt="ranking" width={336} height={124}    />
      
                   </div>
                      {/* customer2 */}
                   <div className="w-[358px] md:w-[610px] md:h-[241px] border-[1px] border-[#0000001A] rounded-[20px] py-[28px] px-[32px] md:flex flex-col gap-5">
                      <Image src={"/s5.png"} alt="ranking" width={139} height={22}  />
                      <Image src={"/cus-2.png"} alt="ranking" width={336} height={124} />
      
                   </div>
                   
                  
                   {/* customer3 */}
                   <div className="w-[358px] md:w-[610px]  md:h-[241px] border-[1px] border-[#0000001A] rounded-[20px] py-[28px] px-[32px] md:flex flex-col gap-5">
                      <Image src={"/s5.png"} alt="ranking" width={139} height={22} />
                      <Image src={"/cus-3.png"} alt="ranking" width={336} height={124}  />
      
                   </div>
                   {/* customer4 */}
                   <div className="hidden md:w-[610px]  md:h-[241px] border-[1px] border-[#0000001A] rounded-[20px] py-[28px] px-[32px] md:flex flex-col gap-5">
                      <Image src={"/s5.png"} alt="ranking" width={139} height={22} />
                      <Image src={"/cus-3.png"} alt="ranking" width={336} height={124}  />
      
                   </div>
                   {/* customer5 */}
                   <div className="hidden md:w-[610px]  md:h-[241px] border-[1px] border-[#0000001A] rounded-[20px] py-[28px] px-[32px] md:flex flex-col gap-5">
                      <Image src={"/s5.png"} alt="ranking" width={139} height={22} />
                      <Image src={"/cus-3.png"} alt="ranking" width={336} height={124}  />
      
                   </div>
                   {/* customer6 */}
                   <div className="hidden md:w-[610px]  md:h-[241px] border-[1px] border-[#0000001A] rounded-[20px] py-[28px] px-[32px] md:flex flex-col gap-5">
                      <Image src={"/s5.png"} alt="ranking" width={139} height={22} />
                      <Image src={"/cus-3.png"} alt="ranking" width={336} height={124}  />
      
                   </div>

                   </div>
      
      
                   <div className="w-[358px] md:w-full flex item-center  md:h-[241px] justify-center mt-5">
                   <button className="w-[195px] h-[47px] rounded-[62px] border py-[14px] px-6 border-[#0000001A] text-sm font-medium hover:bg-black hover:text-white"> Load More Reviews</button>
      
                
      
      
                   </div>

                   {/* you might also like section */}
                   
             <h1 className="w-[284px] h-[72px] md:w-full  ml-[53px] font-intergral text-3xl px-5 font-bold leading-9 uppercase text-center mb-2 "> You Might Also Like</h1>
             <div className="w-[358px] md:w-full block space-y-5 md:flex items-center justify-center gap-5 md:gap-5 ml-16 md:mb-30">
             

             <Card
                      imageUrl="/p1.png"
                      h1="T-SHIRT WITH TAPE DETAILS"
                      stars="/s1.png"
                      ranking="4.5/5"
                      price={120}
                      className="w-[200px] h-[200px] md:w-[300px] md:h-[310px] rounded-[20px] md:rounded-[20px] bg-[#F0EEED] object-contain p-5 "
                      />

                        <Card
                      imageUrl="/p2.png"
                      h1="T-SHIRT WITH TAPE DETAILS"
                      stars="/s1.png"
                      ranking="4.5/5"
                      price={120}
                      className="w-[200px] h-[200px] md:w-[300px] md:h-[310px] rounded-[20px] md:rounded-[20px] bg-[#F0EEED] object-contain p-5 "
                      />
                        <Card
                      imageUrl="/p3.png"
                      h1="T-SHIRT WITH TAPE DETAILS"
                      stars="/s1.png"
                      ranking="4.5/5"
                      price={120}
                      className="hidden md:block md:w-[300px] md:h-[310px] rounded-[20px] md:rounded-[20px] bg-[#F0EEED] object-contain p-5 "
                      />
                       <Card
                      imageUrl="/p4.png"
                      h1="T-SHIRT WITH TAPE DETAILS"
                      stars="/s1.png"
                      ranking="4.5/5"
                      price={120}
                      className="hidden md:block md:w-[300px] md:h-[310px] rounded-[20px] md:rounded-[20px] bg-[#F0EEED] object-contain p-5 "
                      />
             </div>

      
      
      </main>
      
      </>
  )
}