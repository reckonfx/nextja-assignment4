
import Image from "next/image";

export default function LogoBar(){
    return(
        <>
        <div className=" w-3[90px] h-[146px] md:w-full md:h-[122px] bg-black  flex flex-wrap items-center justify-around">
         <Image src={"/barImage1.png"} alt="Image1" width={166} height={33} ></Image>
         <Image src={"/barImage2.png"} alt="Image1" width={91} height={38} ></Image>
         <Image src={"/barImage3.png"} alt="Image1" width={156} height={36} ></Image>
         <Image src={"/barImage4.png"} alt="Image1" width={194} height={32} ></Image>
         <Image src={"/barImage5.png"} alt="Image1" width={206} height={33} ></Image>
        </div>
        </>
    )
}