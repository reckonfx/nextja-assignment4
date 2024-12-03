
import { TfiEmail } from "react-icons/tfi";
export default function NewsLetter() {
  return (
    <>
      <div className=" w-[435px] h-auto md:w-[1240px] md:h-[180px] flex items-center justify-between gap-4 flex-col md:flex-row ml-8 md:ml-[100px] rounded-[20px] bg-black py-9 px-16 ">

        {/* left div */}
        <div className=" flex-1 text-[40px] font-bold leading-[45px] text-white font-integral text-wrap   ">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS{" "}
        </div>

        {/* right div  */}
        <div className=" flex-1 w-[349px] h-[108px] flex flex-col items-center justify-center gap-[14px]">
          <div className="  relative w-[349px] h-[46px] rounded-[62px] overflow-x-hidden-hidden py-2 px-4 bg-white">
            <span className="absolute inset-y-0 left-5 top-1 flex items-center pl-3 text-[#00000066]">
              <TfiEmail />
            </span>
            <input
              type="email"
              className="pl-10 pr-4 py-1  rounded-md border-none"
              placeholder="Enter your email"
            />
          </div>

          <div className="w-[349px] h-[46px] flex-1  flex items center justify-center rounded-[62px] py-3 px-4 bg-white">
            <button className="text-[#000000]"><span>Subscribe to Newsletter</span></button>
          </div>
        </div>


      </div>
    </>
  );
}
