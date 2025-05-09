import React from "react";
import DragSize from "./../../assets/product-pg/dragSize.png";
import Img1 from "./../../assets/product-pg/img1.png";
import Search from "./../../assets/product-pg/search.png";
import Input from "./../../assets/product-pg/input.Png";
import Download from "./../../assets/product-pg/download.Png";

import dragImg1_1 from "../../assets/home/draggableImgSection/drag1(1).png";
import dragImg1_2 from "../../assets/home/draggableImgSection/drag1(2).png";
import dragImg2_1 from "../../assets/home/draggableImgSection/drag2(1).png";
import dragImg2_2 from "../../assets/home/draggableImgSection/drag2(2).png";
import dragImg3_1 from "../../assets/home/draggableImgSection/drag3(1).png";
import dragImg3_2 from "../../assets/home/draggableImgSection/drag3(2).png";
import DraggableImages from "../../components/DraggableImages";

export default function DraggableImagesProducts() {
  return (
    <div>
      <div className="max-w-[100vw] h-[auto] flex flex-col items-center justify-center gap-5 mt-[30px] sm:mt-[70px]">
        <h1 className="max-w-[649px] min-h-[78px] text-black font-bold text-3xl sm:text-[40px] sm:leading-[78px] spacing-[0] text-center">
          With <span className="text-[#007b82]">Stackly.AI</span> Interior
          Designer,
        </h1>

        <p className="max-w-[1064px] min-h-[56px] text-[18px] leading-[28px] text-center font-[400] text-[#B0B0B0]">
          You can now effortlessly bring your design dreams to life using the
          power of AI. Simply take a photo using your camera and watch as our
          advanced AI algorithms work their magic.
        </p>

        <div className="max-w-[1064px] min-h-[28px] text-[18px] leading-[28px] font-medium text-center text-[#2A2A2A]">
          Best quality, lightning fast used by homeowners and professionals
        </div>
      </div>

      {/* DraggableImages */}

      <div>
        <div className="max-w-[100vw] h-auto mt-24">
          <div className="h-auto sm:min-h-[78px] text-3xl sm:text-[48px] font-bold leading-bold spacing-5% text-center text-[#2A2A2A]">
            COLLECTIONS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-15 mt-10  p-5 sm:p-10">
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
                  Living Room
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
                  Living Room
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
                  Living Room
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
                  Living Room
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
          <div className="w-[100vw] text-[22px] relative my-5 sm:pb-0 font-semibold text-[#009A98] underline leading-[140%] text-center">
            <a href="">view more</a>
          </div>
        </div>
      </div>
    </div>
  );
}
