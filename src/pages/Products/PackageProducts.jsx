import React from 'react'
import Coin from '../../../src/assets/product-pg/coin.png'

export default function PackageProducts() {
  return (
    <div className="w-full min-h-[689px] flex justify-center items-center flex-col mt-40">

         <div className="w-full min-h-[234px] bg-gradient-to-l from-[#00B0BA] via-[#000000] to-[#007B82]"></div>
          <div className="max-w-[840px] min-h-[441px] rounded-[20px] border-[2px] p-[40px] flex flex-col items-center justify-center gap-[34px] bg-white mt-[-350px] border-2 border-[#007B82] shadow-sm shadow-[#007B82]">
            {/* <img src={Coin} alt="" /> */}
            <div className="max-w-[760px] min-h-[114px] font-semibold text-[41px] leading-[140%] text-center text-[#2A2A2A]">Step up to <span className="text-[#F3AE00]">GOLD</span> for all Premium Benefits!</div>
            <div className="w-[406px] min-h-[60px] rounded-[5px] bg-gradient-to-l from-[#00B0BA] via-[#000000] to-[#007B82] text-[20px] font-bold leading-[35px] spacing-[8px] text-center text-white flex justify-center items-center">GET STARTED!</div>
          </div>




    </div>
  )
}
