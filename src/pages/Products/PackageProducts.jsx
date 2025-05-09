import React from "react";
import Coin from "../../../src/assets/product-pg/coin.png";

export default function PackageProducts() {
  return (
    <div className="w-full h-auto sm:min-h-[689px] flex justify-center items-center flex-col mt-[400px] mb-[-200px]">
      <div className="w-full h-auto sm:min-h-[234px] bg-gradient-to-l from-[#00B0BA] via-[#000000] to-[#007B82]"></div>
      <div className="w-[90%] max-w-[840px] h-auto sm:min-h-[441px] rounded-[20px] p-5 sm:p-[40px] flex flex-col items-center justify-center gap-[34px] bg-white mt-[-200px] sm:mt-[-350px] border-2 border-[#007B82] shadow-sm shadow-[#007B82]">
        <div className="max-w-[760px] w-full sm:min-h-[114px] font-semibold text-3xl sm:text-[41px] leading-[140%] text-center text-[#2A2A2A]">
          Step up to <span className="text-[#F3AE00]">GOLD</span> for all
          Premium Benefits!
        </div>
        <div className="w-[406px] min-h-[60px] rounded-[5px] bg-gradient-to-l from-[#00B0BA] via-[#000000] to-[#007B82] text-[20px] font-bold leading-[35px] spacing-[8px] text-center text-white flex justify-center items-center">
          GET STARTED!
        </div>
      </div>

      <div className="w-[57.1px] h-[37.47px] rotate-[30deg] relative top-[-300px] sm:top-[-400px] right-[-20px]">
        <img src={Coin} alt="" />
      </div>
      <div className="w-[25.22px] h-[16.55px] rotate-[-30deg] relative top-[-300px] sm:top-[-400px] right-[10px]">
        <img src={Coin} alt="" />
      </div>
      <div className="w-[25.22px] h-[16.55px] rotate-[-30deg] relative top-[-350px] sm:top-[-450px] right-[20px]">
        <img src={Coin} alt="" />
      </div>

      <div className="w-[65.84px] h-[43.2px] rotate-[-30deg] relative top-[-300px] left-[-590px]">
        <img src={Coin} alt="" />
      </div>
      <div className="w-[33.03px] h-[21.68px] rotate-[-30deg] opacity-[60%] relative top-[-320px] left-[-630px]">
        <img src={Coin} alt="" />
      </div>
      <div className="w-[65.84px] h-[43.2px] rotate-[30deg] relative top-[-350px] right-[-590px]">
        <img src={Coin} alt="" />
      </div>
      <div className="w-[33.03px] h-[21.68px] rotate-[30deg] opacity-[60%] relative top-[-380px] right-[-630px]">
        <img src={Coin} alt="" />
      </div>

      <div className="w-[65.84px] h-[43.2px] rotate-[-30deg] relative top-[-650px] left-[-420px] -z-10">
        <img src={Coin} alt="" />
      </div>
      <div className="w-[65.84px] h-[55.18px] rotate-[-30deg] relative top-[-710px] -z-10">
        <img src={Coin} alt="" />
      </div>
      <div className="w-[103.57px] h-[86.81px] rotate-[-30deg] opacity-[20%] relative left-[200px] top-[-300px] sm:top-[-930px]">
        <img src={Coin} alt="" />
      </div>
      <div className="w-[65.84px] h-[43.2px] rotate-[30deg] opacity-[20%] relative left-[-200px] top-[-1000px]">
        <img src={Coin} alt="" />
      </div>
      <div className="w-[103.57px] h-[86.81px] rotate-[-30deg] opacity-[20%] relative top-[-400px] sm:top-[-300px]">
        <img src={Coin} alt="" />
      </div>
    </div>
  );
}
