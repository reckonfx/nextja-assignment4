import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import Image from "next/image";


export default function Footer(){
    return(
        <div className="">
    <div className=" w-[480px] h-[846px] md:w-[1441px] md:h-[499px]  flex items-center justify-center gap-24 ">
        <footer className="md:w-[1240px] md:h-[144px] ml-[100px] flex flex-col gap-5 md:gap-4 md:flex-row items-center justify-between ">

            {/* div1 */}
            <div className=" flex flex-col items-left gap-6">
                <h2 className="font-integral text-[33.45px] font-bold leading-[40.15px] text-black ">SHOP.CO</h2>
                <p className="w-[248px] h-[66px] font-satoshi text-[14px] font-normal leading-[22px] text-[#00000099]">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                
                <div className="flex items-center gap-2">
                <FaTwitter className="w-7 h-7 rounded-full border-[1px] border-[#00000033] bg-white p-1 "/>
                <FaFacebook  className="w-7 h-7 rounded-full border-[1px] border-[#00000033]  bg-white p-1"/>
                <FaInstagram  className="w-7 h-7 rounded-full border-[1px] border-[#00000033] bg-white p-1"/>
                <IoLogoGithub  className="w-7 h-7 rounded-full border-[1px] border-[#00000033] bg-white p-1"/>



                </div>
            </div>
            {/* div1 ends here */}
            {/* div2 starts here */}
            <div className=" w-full flex flex-wrap items-start md:items-center gap-6 justify-between ">
            <div className=" flex flex-col flex-nowrap gap-4" >
                <h1 className="text-[16px] font-medium leading-[18px] tracking-[3px text-black uppercase">Company</h1>
                <div className=" flex flex-col gap-6 font-satoshi text-[16px] text-[#00000099] font-normal leading-[19px]">
                    <p>About  </p>        

                    <p>Features</p>          

                    <p>Works</p>          

                    <p>Career </p> 
                </div>
                {/* div2 ends here */}           

            </div>

             {/* div3 starts here */}

             <div className=" flex flex-col gap-[26px]" >
                <h1 className="text-[16px] font-medium leading-[18px] tracking-[3px text-black uppercase">Help</h1>
                <div className=" flex flex-col gap-6 font-satoshi text-[16px] text-[#00000099] font-normal leading-[19px]">
                    <p>Customer Support</p>        

                    <p>Delivery Details</p>          

                    <p>Terms & Conditions</p>          

                    <p>Privacy Policy </p> 
                </div>
                {/* div3 ends here */}           

            </div>

             {/* div4 starts here */}

             <div className=" flex flex-col gap-[26px] " >
                <h1 className="text-[16px] font-medium leading-[18px] tracking-[3px text-black uppercase">FAQ</h1>
                <div className=" flex flex-col gap-6 font-satoshi text-[16px] text-[#00000099] font-normal leading-[19px]">
                    <p>Account</p>        

                    <p>Manage Deliveries</p>          

                    <p>Orders</p>          

                    <p>Payments </p> 
                </div>
                {/* div4 ends here */}           

            </div>

             {/* div5 starts here */}

             <div className=" flex flex-col gap-[26px]" >
                <h1 className="text-[16px] font-medium leading-[18px] tracking-[3px text-black uppercase">Resources</h1>
                <div className=" flex flex-col gap-6 font-satoshi text-[16px] text-[#00000099] font-normal leading-[19px]">
                    <p>Free eBooks</p>        

                    <p>Development Tutorial</p>          

                    <p>How to - Blog</p>          

                    <p>Youtube Playlist </p> 
                </div>
                {/* div5 ends here */}           

            </div>
             

             
             </div>
        </footer>

       

        </div>
        
        <div className="w-full h-16 md:w-[1441px] md:h-16 flex flex-col md:flex-row items-center justify-center md:justify-between gap-2 md:gap-4 ml-0 md:ml-16">
  <h5 className="text-center md:text-left">
    Shop.co © 2000-2023, All Rights Reserved
  </h5>
  <Image src={"/payment-logo.png"} alt="payment logo" width={281} height={30} />
</div>
        </div>
    )
}