

import Image from "next/image";
interface CardProps{
    imageUrl:string;
    h1:string;
    stars:string;
    ranking:string;
    price:number;
    className:string
}
 const Card:React.FC<CardProps> =({imageUrl,h1,stars,price,className})=>{
return(
    <div className={`w-[296px] h-[444px] ml-[-1px] flex flex-col gap-5 ${className} bg-white`}>
        <div className="flex flex-col gap-3 hover:transition-transform hover:scale-105">
            <Image
             src={imageUrl} 
             alt="product image"
              width={295} 
              height={298} 
              className=" w-[295px] h-[298px] rounded-[20px] bg-[#F0EEED] " />

              
            <h1 className=" capitalize font-satoshi text-[18px] font-bold leading-[27px] truncate text-black ">{h1.toLowerCase()}</h1>
            <div>
            <Image src={stars} alt="stars" width={150} height={19} className="w-[150px] h-[19px] flex items-center justify-start gap-[13px] " /> 
                        </div>
            
            
            <h2 className="text-2xl leading-[32.4px] text-black"> $ {price}</h2>

        </div>
    </div>
)
 }
 export default Card;