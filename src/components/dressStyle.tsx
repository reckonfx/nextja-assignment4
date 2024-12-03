import Image from "next/image";

export default function DressStyle(){
    return(
        <> 
        <section className="md:w-[1239px] md:h-[866px] md:ml-[100px] flex  flex-col items-center justify-center rounded-[40px] bg-[#F0F0F0]">

            <h1 className="w-[246px] h-[72px] md:w-[687px] md:h-[58px] font-integral text-3xl font-bold  md:text-[48px] md:leading-[57.6px] uppercase">BROWSE BY dress STYLE</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-2 md:gap-4 m-10">
            <Image src={"/grid-p1.png"} alt="grid image 1" width={407} height={289} className=" col-span-1 row-span-1 w-[358px] h-[190px] md:w-full md:h-full rounded-[20px] object-fill hover:transition-transform hover:scale-105 " />
            <Image src={"/grid-p2.png"} alt="grid image 2" width={684} height={289} className="col-span-2 row-span-1 w-[358px] h-[190px] md:w-full md:h-full  rounded-[20px] object-fill hover:transition-transform hover:scale-105" />
            <Image src={"/grid-p3.png"} alt="grid image 3" width={684} height={289}  className="col-span-2 row-span-1 w-[358px] h-[190px] md:w-full md:h-full rounded-[20px] object-fill hover:transition-transform hover:scale-105"/>
            <Image src={"/grid-p4.png"} alt="grid image 4" width={407} height={289} className="col-span-1  row-span-1 w-[358px] h-[190px] md:w-full md:h-full rounded-[20px] object-fill hover:transition-transform hover:scale-105" />

            </div>

</section>
        </>
     )
 }