import Image from "next/image";

export default function Hero() {
    return (
        <section className="w-full h-auto bg-[#F2F0F1] flex flex-col md:flex-row justify-between font-sans">
            {/* Left Content */}
            <div className="flex-1 flex flex-col justify-center items-start gap-6 p-8 md:ml-[100px]">
                <h1 className="w-[315px] h-[93px] md:w-[577px] md:h-[173px] text-[36px] leading-8 ml-4 md:text-[64px] font-extrabold  md:leading-[64px] md:mb-5 font-integral">
                    FIND CLOTHES THAT MATCHES YOUR STYLE
                </h1>
                <p className="w-[358px] h-[50px] md:w-[545px] md:h-[33px] text-[16px] leading-[22px] text-[#00000099] ml-4 mb-5 font-satoshi">
                    Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                </p>
                <button className="w-[358px] h-[52px] md:w-[210px] md:h-[52px] flex justify-center items-center ml-4  px-[54px] py-4 bg-black text-white rounded-[62px] hover:bg-gray-800">
                    Shop Now
                </button> 

                <div className="mt-8 flex gap-8 flex-wrap items-center justify-around">
                    <div className="text-left">
                        <h2 className="text-[24px] leading-[32.5px] md:text-[54px] md:leading-[54px] font-semibold">200+</h2>
                        <p className=" text-sm md:text-[16px] md:leading-[22px]">International Brands</p>
                    </div>
                    <div className="text-left border-l-2 border-gray-400 px-5 ">
                        <h2 className="text-[24px] leading-[32.5px] md:text-[54px] md:leading-[54px] font-semibold">2,000+</h2>
                        <p className=" text-sm md:text-[16px] md:leading-[22px] ">High-Quality Products</p>
                    </div>
                    <div className="text-left md:border-l-2 border-gray-400 px-5">
                        <h2 className="text-[24px] leading-[32.5px] md:text-[54px] md:leading-[54px] font-semibold">30,000+</h2>
                        <p className=" text-sm md:text-[16px] md:leading-[22px]">Happy Customers</p>
                    </div>
                </div>
            </div>                                

            {/* Right Background */}
            <div className="md:flex-1 relative overflow-hidden w-full h-[400px] md:h-[600px]">
                <Image
                    src={'/hero-background.jpeg'}
                    alt="hero image"
                    width={550}
                    height={600} // Ensures the image covers the parent div
                    objectFit="cover" // Ensures the image scales properly within the div
                    className="absolute top-0 left-0"
                />
                <Image
                    src={"/star.png"}
                    alt={"star image"}
                    width={56}
                    height={56}
                    className="absolute top-[200px] md:top-[331px] left-[50px] md:left-[27px]"
                />
                <Image
                    src={"/star.png"}
                    alt={"star image"}
                    width={104}
                    height={104}
                    className="absolute top-[27px] md:top-[100px] right-5"
                />
            </div>
        </section>
    );
}
