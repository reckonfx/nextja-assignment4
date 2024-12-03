<<<<<<< HEAD
import Image from "next/image";
export default function Hero() {
    return (
        <section className="w-full h-auto md:h-[600px] bg-[#F2F0F1] flex-col flex md:flex-row justify-between  font-sans">
            {/* Left Content */}
            <div className="flex-1 flex flex-col justify-center items-start gap-6 p-8 md:ml-[100px]">
                <h1 className="w-[315px] h-[93px] md:w-[577px] md:h-[173px] text-[36px] leading-8 md:ml-4 md:text-[64px] font-bold md:leading-[64px] md:mb-5 font-IntegralCF-Bold">
                FIND CLOTHES THAT MATCHES YOUR STYLE
                </h1>
                <p className="w-[358px] h-[50px] md:w-[545px] md:h-[33px] text-[16px] leading-[22px] text-[#00000099] mb-5 font-satoshi">
                    Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                </p>
                <button className=" w-[358px] h-[52px] md:w-[210px] md:h-[52px] flex justify-center items-center px-[54px] py-4 bg-black text-white rounded-[62px] hover:bg-gray-800">
                    Shop Now
                </button> 

                <div className="mt-8 flex gap-8 flex-wrap items-center justify-around">
                    <div className="text-center">
                        <h2 className="text-[40px] leading-[54px] font-bold">200+</h2>
                        <p className="text-[16px] leading-[22px]">International Brands</p>
                    </div>
                    <div className="text-center">
                        <h2 className="text-[40px] leading-[54px] font-bold">2,000+</h2>
                        <p className="text-[16px] leading-[22px]">High-Quality Products</p>
                    </div>
                    <div className="text-center">
                        <h2 className="text-[40px] leading-[54px] font-bold">30,000+</h2>
                        <p className="text-[16px] leading-[22px]">Happy Customers</p>
                    </div>
                </div>
            </div>                                

            {/* Right Background */}
            <div
                className=" md:flex-1  relative overflow-hidden"
                
                
                
            >
                <Image 
                src={'/hero-background.jpeg'} alt="hero image" width={550} height={600} className="absolute top-0 left-30 object-cover"/>
                <Image src={"/star.png"} alt={"star image"} width={56} height={56} className="absolute top-[331px] left-5" />
                <Image src={"/star.png"} alt={"star image"} width={104} height={104} className="absolute top-[100px] right-5" />
            </div>
        </section>
    );
}
=======
import Image from "next/image";
export default function Hero() {
    return (
        <section className="w-full h-auto md:h-[600px] bg-[#F2F0F1] flex-col flex md:flex-row justify-between  font-sans">
            {/* Left Content */}
            <div className="flex-1 flex flex-col justify-center items-start gap-6 p-8 md:ml-[100px]">
                <h1 className="w-[315px] h-[93px] md:w-[577px] md:h-[173px] text-[36px] leading-8 md:ml-4 md:text-[64px] font-bold md:leading-[64px] md:mb-5 font-IntegralCF-Bold">
                FIND CLOTHES THAT MATCHES YOUR STYLE
                </h1>
                <p className="w-[358px] h-[50px] md:w-[545px] md:h-[33px] text-[16px] leading-[22px] text-[#00000099] mb-5 font-satoshi">
                    Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                </p>
                <button className=" w-[358px] h-[52px] md:w-[210px] md:h-[52px] flex justify-center items-center px-[54px] py-4 bg-black text-white rounded-[62px] hover:bg-gray-800">
                    Shop Now
                </button> 

                <div className="mt-8 flex gap-8 flex-wrap items-center justify-around">
                    <div className="text-center">
                        <h2 className="text-[40px] leading-[54px] font-bold">200+</h2>
                        <p className="text-[16px] leading-[22px]">International Brands</p>
                    </div>
                    <div className="text-center">
                        <h2 className="text-[40px] leading-[54px] font-bold">2,000+</h2>
                        <p className="text-[16px] leading-[22px]">High-Quality Products</p>
                    </div>
                    <div className="text-center">
                        <h2 className="text-[40px] leading-[54px] font-bold">30,000+</h2>
                        <p className="text-[16px] leading-[22px]">Happy Customers</p>
                    </div>
                </div>
            </div>                                

            {/* Right Background */}
            <div
                className=" md:flex-1  relative overflow-hidden"
                
                
                
            >
                <Image 
                src={'/hero-background.jpeg'} alt="hero image" width={550} height={600} className="absolute top-0 left-30 object-cover"/>
                <Image src={"/star.png"} alt={"star image"} width={56} height={56} className="absolute top-[331px] left-5" />
                <Image src={"/star.png"} alt={"star image"} width={104} height={104} className="absolute top-[100px] right-5" />
            </div>
        </section>
    );
}
>>>>>>> 66fd3bf70c27f544ac82cef12fe432e9115e2ee4
