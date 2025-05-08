import React from 'react'

export default function StepsHome() {
  return (
    <section className="w-full pb-20 px-5 ">
        <div className="text-center w-full min-h-[300px] flex flex-col justify-center items-center gap-5">
          <h1 className=" w-full min-h-[67px] text-3xl md:text-5xl font-semibold leading-[140%] text-center text-black">
            <span className="text-[#007B82]">SIMPLIFY DESIGN </span>WITH{" "}
            <span className="text-[#007B82]">STACKLYAI</span>
          </h1>
          <p className="max-w-[294px] w-full min-h-[31px] text-[22px] font-semibold leading-[140%] text-center text-[#2A2A2A]">
            3 Easy Steps to Get Started
          </p>
        </div>

        <div className="step1">
          <div
            className="max-w-[411px] w-full min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5"
            style={{ backgroundImage: "url('/home/sec7-5/step1.jpeg')" }}
          >
            <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold leading-[100%] text-[white] rounded-[60px]">
              Step 1:
            </div>
          </div>
          <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5 mb-10">
            <span className="text-[#007B82]"> Upload </span>a photo of your room,
            home, or outdoor space.
          </p>
        </div>
        <div className="step2 flex flex-col items-center">
          <div
            className="max-w-[411px] w-full min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5"
            style={{ backgroundImage: "url('/home/sec7-5/step2.jpeg')" }}
          >
            <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold leading-[100%] text-[white] rounded-[60px]">
              Step 2:
            </div>
          </div>
          <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5 mb-10">
            <span className="text-[#007B82]"> Personalize your experience </span>—
            choose the room type, adjust AI creativity, add special
            instructions, and select your favorite design style
          </p>
        </div>

        <div className="step3 flex flex-col items-end">
          <div
            className="max-w-[411px] w-full min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5"
            style={{ backgroundImage: "url('/home/sec7-5/step3.jpeg')" }}
          >
            <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold leading-[100%] text-[white] rounded-[60px]">
              Step 3:
            </div>
          </div>
          <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center mt-5 mb-10">
            <span className="text-[#007B82]">Generate</span> stunning new decor and
            design concepts in under 25 seconds.
          </p>
        </div>
      </section>
  )
}
