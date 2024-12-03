
import Image from "next/image"
export default function HappyCustomers(){
    return(
        <div className=" relative my-10 ml-[100px]">
        
            <h1 className="text-[48px] font-bold leading-[57.6px] my-10 ">OUR HAPPY CUSTOMERS</h1>
            
             <div className="flex items-center justify-between gap-5 contain-content ">
                {/* customer1 */}
             <div className="w-full sm:w-[386px]  h-auto sm:h-[240px] text-xl border-[1px] border-[#0000001A] rounded-[20px] p-5 sm:py-[28px] sm:px-[32px] flex flex-col gap-5">
                <Image src={"/s5.png"} alt="ranking" width={139} height={22} />
                <Image src={"/cus-1.png"} alt="ranking" width={336} height={124}    />

             </div>
                {/* customer2 */}
             <div className=" hidden border-[1px] border-[#0000001A] rounded-[20px] py-[28px] px-[32px] md:flex flex-col gap-5">
                <Image src={"/s5.png"} alt="ranking" width={139} height={22}  />
                <Image src={"/cus-2.png"} alt="ranking" width={336} height={124} />

             </div>
             {/* customer3 */}
             <div className=" hidden border-[1px] border-[#0000001A] rounded-[20px] py-[28px] px-[32px] md:flex flex-col gap-5">
                <Image src={"/s5.png"} alt="ranking" width={139} height={22} />
                <Image src={"/cus-3.png"} alt="ranking" width={336} height={124}  />

             </div>

             </div>
        
        </div>
    )

}