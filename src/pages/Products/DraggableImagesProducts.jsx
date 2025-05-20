import React from "react";
import DragSize from "./../../assets/product-pg/dragsize.png";
import Img1 from "./../../assets/product-pg/img1.png";
import Search from "./../../assets/product-pg/search.png";
import Input from "./../../assets/product-pg/input.png";
import Download from "./../../assets/product-pg/download.png";

import dragImg1_1 from "../../assets/home/draggableImgSection/drag1(1).png";
import dragImg1_2 from "../../assets/home/draggableImgSection/drag1(2).png";
import dragImg2_1 from "../../assets/home/draggableImgSection/drag2(1).png";
import dragImg2_2 from "../../assets/home/draggableImgSection/drag2(2).png";
import dragImg3_1 from "../../assets/home/draggableImgSection/drag3(1).png";
import dragImg3_2 from "../../assets/home/draggableImgSection/drag3(2).png";
import DraggableImages from "../../components/DraggableImages";
import Banner from "../../assets/product-pg/bannercode.png"
import Banner1 from "../../assets/product-pg/bannercode1.png"
import Star from "../../assets/product-pg/star.png"

export default function DraggableImagesProducts() {
  return (
    <div>
      <div className="max-w-[100vw] min-h-[720px] flex flex-col items-center justify-center gap-5 bg-gradient-to-l from-[#007B8214] to-[white]">
        <h1 className="w-full  max-w-[1064px] text-center font-bold text-[70px] leading-[78px] mt-[150px]">
        <span className="text-[#009A98]">Stackly.AI</span> Interior
          Designer
        </h1>

        <p className="max-w-[1064px] min-h-[56px] text-[22px] leading-[28px] text-center font-[400] text-[#0F0F0F]">
          You can now effortlessly bring your design dreams to life using the
          power of AI. Simply take a photo using your camera and watch as our
          advanced AI algorithms work their magic.
        </p>

        <div className="max-w-[1064px] min-h-[28px] text-[18px] leading-[28px] font-semibold text-center text-[#007B82]">
          Best quality, lightning fast used by homeowners and professionals
        </div>

        <div className="absolute">
          <img src={Banner} alt="banner1" className="absolute left-[-60px] top-[70px]" />
          <img src={Banner1} alt="bammer2" className=""/>

        </div>

        <div className="w-[52.38px] h-[50px] relative top-[-300px] left-[-650px]"><img src={Star} alt="star" /></div>
        <div className="w-[30px] h-[28.64px] relative top-[-330px] left-[-630px]"><img src={Star} alt="star" /></div>
        <div className="w-[52.38px] h-[50px] relative top-[50px] left-[550px]"><img src={Star} alt="star" /></div>
        <div className="w-[30px] h-[28.64px] relative top-[20px] left-[580px]"><img src={Star} alt="star" /></div>
        </div>

      {/* DraggableImages */}

      <div>
        <div className="max-w-[100vw] h-auto">
          <div className="w-full min-h-[158px] flex flex-col justify-center items-center gap-[24px]">
            <div className="w-[1026px] min-h-[78px] font-bold text-[48px] leading-[78px] text-center text-gradient-to-l from-[#007B82] to-[#001A1C]">Spaces That Inspire You</div>
            <div className="w-[1026px] min-h-[56px] text-[400] text-[24px] leading-[28px] text-center text-[#000000]">Explore handpicked collections for every corner of your home — from cozy balconies to focused work zones.</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-15 mt-10  p-5 sm:p-10">
            <div className="max-w-[522px] m-auto w-full h-auto sm:min-h-auto flex flex-col gap-2">
              <div className="max-w-[520px] min-h-[35px] flex justify-between">
                <div className="text-[24px] font-semibold leading-[35px] spacing-[8px] text-center text-[#2A2A2A]">
                  Living Room
                </div>
                <div className="w-[28px] h-[28px]">
                  <img src={DragSize} alt="size" />
                </div>
              </div>
              <div className="max-w-[522px] w-full h-auto  rounded-[4px]">
                <DraggableImages
                  imageRight={dragImg1_1}
                  imageLeft={dragImg1_2}
                />
              </div>
              <div className="max-w-[520px] min-h-[57px] flex justify-between items-center">
                <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
                  <img src={Search} alt="search" />
                  <div className="max-w-[40px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
                    show
                  </div>
                </div>
                <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
                  <img src={Input} alt="input" />
                  <div className="max-w-[40px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
                    Input
                  </div>
                </div>
                <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
                  <img src={Download} alt="download" />
                  <div className="max-w-[57px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
                    Download
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-[522px] m-auto w-full h-auto sm:min-h-auto flex flex-col gap-2">
              <div className="max-w-[520px] min-h-[35px] flex justify-between">
                <div className="text-[24px] font-semibold leading-[35px] spacing-[8px] text-center text-[#2A2A2A]">
                  Kitchen
                </div>
                <div className="w-[28px] h-[28px]">
                  <img src={DragSize} alt="size" />
                </div>
              </div>
              <div className="max-w-[522px] w-full h-auto  rounded-[4px]">
                <DraggableImages
                  imageRight={dragImg2_1}
                  imageLeft={dragImg2_2}
                />
              </div>
              <div className="max-w-[520px] min-h-[57px] flex justify-between items-center">
                <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
                  <img src={Search} alt="search" />
                  <div className="max-w-[40px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
                    show
                  </div>
                </div>
                <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
                  <img src={Input} alt="input" />
                  <div className="max-w-[40px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
                    Input
                  </div>
                </div>
                <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
                  <img src={Download} alt="download" />
                  <div className="max-w-[57px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
                    Download
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-[522px] m-auto w-full h-auto sm:min-h-auto flex flex-col gap-2">
              <div className="max-w-[520px] min-h-[35px] flex justify-between">
                <div className="text-[24px] font-semibold leading-[35px] spacing-[8px] text-center text-[#2A2A2A]">
                  Kid's Room
                </div>
                <div className="w-[28px] h-[28px]">
                  <img src={DragSize} alt="size" />
                </div>
              </div>
              <div className="max-w-[522px] w-full h-auto  rounded-[4px]">
                <DraggableImages
                  imageRight={dragImg3_1}
                  imageLeft={dragImg3_2}
                />
              </div>
              <div className="max-w-[520px] min-h-[57px] flex justify-between items-center">
                <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
                  <img src={Search} alt="search" />
                  <div className="max-w-[40px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
                    show
                  </div>
                </div>
                <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
                  <img src={Input} alt="input" />
                  <div className="max-w-[40px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
                    Input
                  </div>
                </div>
                <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
                  <img src={Download} alt="download" />
                  <div className="max-w-[57px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
                    Download
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-[522px] m-auto w-full h-auto sm:min-h-auto flex flex-col gap-2">
              <div className="max-w-[520px] min-h-[35px] flex justify-between">
                <div className="text-[24px] font-semibold leading-[35px] spacing-[8px] text-center text-[#2A2A2A]">
                  Dining Room
                </div>
                <div className="w-[28px] h-[28px]">
                  <img src={DragSize} alt="size" />
                </div>
              </div>
              <div className="max-w-[522px] w-full h-auto  rounded-[4px]">
                <DraggableImages
                  imageRight={dragImg1_1}
                  imageLeft={dragImg1_2}
                />
              </div>
              <div className="max-w-[520px] min-h-[57px] flex justify-between items-center">
                <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
                  <img src={Search} alt="search" />
                  <div className="max-w-[40px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
                    show
                  </div>
                </div>
                <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
                  <img src={Input} alt="input" />
                  <div className="max-w-[40px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
                    Input
                  </div>
                </div>
                <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
                  <img src={Download} alt="download" />
                  <div className="max-w-[57px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
                    Download
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-[522px] m-auto w-full h-auto sm:min-h-auto flex flex-col gap-2">
              <div className="max-w-[520px] min-h-[35px] flex justify-between">
                <div className="text-[24px] font-semibold leading-[35px] spacing-[8px] text-center text-[#2A2A2A]">
                  Laundry Room
                </div>
                <div className="w-[28px] h-[28px]">
                  <img src={DragSize} alt="size" />
                </div>
              </div>
              <div className="max-w-[522px] w-full h-auto  rounded-[4px]">
                <DraggableImages
                  imageRight={dragImg2_1}
                  imageLeft={dragImg2_2}
                />
              </div>
              <div className="max-w-[520px] min-h-[57px] flex justify-between items-center">
                <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
                  <img src={Search} alt="search" />
                  <div className="max-w-[40px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
                    show
                  </div>
                </div>
                <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
                  <img src={Input} alt="input" />
                  <div className="max-w-[40px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
                    Input
                  </div>
                </div>
                <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
                  <img src={Download} alt="download" />
                  <div className="max-w-[57px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
                    Download
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-[522px] m-auto w-full h-auto sm:min-h-auto flex flex-col gap-2">
              <div className="max-w-[520px] min-h-[35px] flex justify-between">
                <div className="text-[24px] font-semibold leading-[35px] spacing-[8px] text-center text-[#2A2A2A]">
                  Study Room
                </div>
                <div className="w-[28px] h-[28px]">
                  <img src={DragSize} alt="size" />
                </div>
              </div>
              <div className="max-w-[522px] w-full h-auto  rounded-[4px]">
                <DraggableImages
                  imageRight={dragImg3_1}
                  imageLeft={dragImg3_2}
                />
              </div>
              <div className="max-w-[520px] min-h-[57px] flex justify-between items-center">
                <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
                  <img src={Search} alt="search" />
                  <div className="max-w-[40px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
                    show
                  </div>
                </div>
                <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
                  <img src={Input} alt="input" />
                  <div className="max-w-[40px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
                    Input
                  </div>
                </div>
                <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
                  <img src={Download} alt="download" />
                  <div className="max-w-[57px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
                    Download
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[146px] h-[38px] rounded-[8px] border-[1px] border-solid border-[#007B82] px-[12px] py-[8px] flex justify-center items-center gap-[8px] relative top-[-860px] right-[-1350px] ">
             <select name="" id="" className="text-[#007B82] cursor-pointer">
                <option value="">Choose Area</option>
             </select>
          </div>
        </div>
      </div>
    </div>
  );
}
