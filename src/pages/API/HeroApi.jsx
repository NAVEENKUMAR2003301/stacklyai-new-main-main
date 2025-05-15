import React from 'react'
import apiBackground from '../../assets/api/back.png';
import Keys from './keys';
import ApiIntegrate from './ApiIntegrate';
import Plan from './Plan';
import ApiAccess from './ApiAccess';
import HowItWorks from './HowItWorks';

export default function HeroApi() {
  return (
    <div>
      {/* section1 */}
      <div className="w-full h-[514px] flex flex-col items-center justify-center bg-white">
      <h1 className="w-[816px] h-[128px] font-bold text-[48px] leading-[64px] text-center text-[#2a2a2a]">
        "Transform Spaces Effortlessly with <span className="text-[#00B0BA]">StacklyAI API</span>"
      </h1>
      <p className="w-[672px] h-[56px] font-[400] text-[18px] leading-[28px] text-center text-[#b0b0b0] mt-4">
        Explore limitless possibilities to redesign and enhance any home interior, exterior, or outdoor space — all through powerful AI integration.
      </p>
      <button
        className="w-[306px] h-[45px] mt-8 rounded-[6px] border-[1px] border-solid border-transparent bg-gradient-to-l from-[#00B0BA] via-[#000000] to-[#007B82] text-white font-semibold text-[18px] leading-[100%]"
      >
        Let’s Connect!
      </button>
    </div>


    {/* section-2  */}

    
    <div className="relative w-full h-[848px] flex items-center justify-center bg-black">
      {/* Background API Image */}
      <img
        src={apiBackground}
        alt="API Background"
        className="absolute w-[1150.91px] h-[848px] p-[34px] opacity-60"
      />

      {/* Text Content */}
      <div className="relative z-10 w-[1172px] h-[242px] flex flex-col items-center justify-center text-white text-center">
        <h2 className="w-[816px] h-[64px] font-semibold text-[48px] leading-[64px]">
          What Is StacklyAI API?
        </h2>
        <p className="w-[1172px] h-[113px] font-[400] text-[22px] leading-[36px] mt-4">
          StacklyAI API allows developers, platforms, and businesses to generate high-quality AI-rendered images from user-submitted photos. Whether it's a room makeover, architectural facade, or outdoor setting — the API delivers instant visual transformations, directly into your product.
        </p>
      </div>
    </div>


    {/* section-3  */}

    <Keys />
    
    {/* section 4  */}

    <ApiIntegrate/>

    {/* section-5  */}

    <Plan />

    {/* section-6  */}

    <ApiAccess />

    {/* section-7  */}

    <HowItWorks/>


    </div>
  )
}
