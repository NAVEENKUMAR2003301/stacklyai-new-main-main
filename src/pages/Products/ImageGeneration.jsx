import React from 'react'
// import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import Interior from "../../assets/product-pg/Vector.png";
import Home from "../../assets/product-pg/home.png";
import Tree from "../../assets/product-pg/tree.png";
import Lock from "../../assets/product-pg/lock.png";
import Galley from "../../assets/product-pg/gallery.png";
import I from "../../assets/product-pg/i.png";
import Magic from "../../assets/product-pg/magic.png";
import SideArrow from "../../assets/pricing-pg/sideArrow.png";
import { Link } from 'react-router-dom';

import Report from "../../assets/product-pg/report.png"
import More from "../../assets/product-pg/more.png"
import Download from "../../assets/product-pg/do.png"
import Share from "../../assets/product-pg/share.png"
import Before from "../../assets/product-pg/Before.png"
import After from "../../assets/product-pg/After.png"
import Split from "../../assets/product-pg/split.png"




export default function ImageGeneration() {
  return (
    <div>
      <section className="w-full h-[1340px] flex justify-center items-center bg-[#002628]">
        <div className="w-[1280px] h-[1199px] ">
          <div className="w-[1280px] h-[287px] rounded-tl-[20px] rounded-tr-[20px] bg-gradient-to-t from-[#002628] to-[#00646A] via-[#00B0BA] flex flex-col justify-center items-center gap-4">
            <div className="w-[658px] h-[53px] font-bold text-[38px] leading-[140%] tracking-[20px] text-center text-white">
              PICK YOUR STYLE
            </div>
            <div className="w-[658px] h-[121px] flex justify-between items-center">
              <div className="w-[101px] h-[121px] flex flex-col justify-center items-center gap-[20px]">
                <div className="w-[70px] h-[70px] rounded-[90px] bg-[#FFFFFF1A] hover:bg-gradient-to-l from-[#00B0BA] via-[black] to-[#007B82] hover:border-[2px] hover:border-solid hover:border-white drop-shadow-[0_2px_4px_0 #00B0BA4D] flex justify-center items-center">
                  <img src={Interior} alt="" />
                </div>
                <div className="w-[101px] h-[31px] font-semibold text-[22px] leading-[140%] text-center text-white">
                  Interior
                </div>
              </div>
              <div className="w-[101px] h-[121px] flex flex-col justify-center items-center gap-[20px]">
                <div className="w-[70px] h-[70px] rounded-[90px] bg-[#FFFFFF1A] hover:bg-gradient-to-l from-[#00B0BA] via-[black] to-[#007B82] hover:border-[2px] hover:border-solid hover:border-white drop-shadow-[0_2px_4px_0 #00B0BA4D] flex justify-center items-center">
                  <img src={Home} alt="" />
                </div>
                <div className="w-[101px] h-[31px] font-semibold text-[22px] leading-[140%] text-center text-white">
                  Exteriors
                </div>
              </div>
              <div className="w-[101px] h-[121px] flex flex-col justify-center items-center gap-[20px]">
                <div className="w-[70px] h-[70px] rounded-[90px] bg-[#FFFFFF1A] hover:bg-gradient-to-l from-[#00B0BA] via-[black] to-[#007B82] hover:border-[2px] hover:border-solid hover:border-white drop-shadow-[0_2px_4px_0 #00B0BA4D] flex justify-center items-center">
                  <img src={Tree} alt="" />
                </div>
                <div className="w-[101px] h-[31px] font-semibold text-[22px] leading-[140%] text-center text-white">
                  Outdoors
                </div>
              </div>
            </div>
          </div>

          {/* below */}

          <div className="w-[1280px] h-[912px] rounded-bl-[20px] rounded-br-[20px] bg-[white] drop-shadow-[0_1px_4px_0 #00000059] p-[20px]">
            <div className="w-[1240px] h-[868px] rounded-[6px] flex flex-col justify-start items-start gap-[30px]">
              <div className="w-[100%] h-[30px] flex justify-between">
                <Link to="">
                  <div className="w-[75px] flex justify-center items-center">
                    <img
                      src={SideArrow}
                      alt="Arrow"
                      className="w-[24px] h-[24px]"
                    />
                    <div className="font-medium text-[16px] leading-[156%] text-[#2A2A2A]">
                      Back
                    </div>
                  </div>
                </Link>

                <div className="w-[350p] h-[25px] flex justify-center items-center gap-[32px]">
                  <Link to="">
                    <div className="w-[105px] flex justify-center items-center gap-1">
                      <img
                        src={Download}
                        alt="Arrow"
                        className="w-[24px] h-[24px]"
                      />
                      <div className="font-medium text-[16px] leading-[156%] text-[#2A2A2A]">
                        Download
                      </div>
                    </div>
                  </Link>
                  <Link to="">
                    <div className="w-[73px] flex justify-center items-center gap-1">
                      <img
                        src={Share}
                        alt="Arrow"
                        className="w-[24px] h-[24px]"
                      />
                      <div className="font-medium text-[16px] leading-[156%] text-[#2A2A2A]">
                        Share
                      </div>
                    </div>
                  </Link>
                  <Link to="">
                    <div className="w-[80px] flex justify-center items-center gap-1">
                      <img
                        src={Report}
                        alt="Arrow"
                        className="w-[24px] h-[24px]"
                      />
                      <div className="font-medium text-[16px] leading-[156%] text-[#2A2A2A]">
                        Report
                      </div>
                    </div>
                  </Link>
                  <Link to="">
                    <div className="w-[75px] flex justify-center items-center gap-1">
                      <img
                        src={More}
                        alt="Arrow"
                        className="w-[24px] h-[24px]"
                      />
                      <div className="font-medium text-[18px] leading-[156%] text-[#2A2A2A]"></div>
                    </div>
                  </Link>
                </div>
              </div>

              {/* options */}

              <div className="w-[1177px] h-[74px] flex justify-between items-center">
                <div className="w-[268px] h-[74px] flex flex-col justify-start items-start gap-[10px]">
                  <div className="w-[100%] h-[22px] font-[400] text-[16px] leading-[140%] text-[#2A2A2A]">
                    Building Type
                  </div>
                  <div className="w-[268px] h-[42px] rounded-[4px] border-[1px] border-solid  border-[#00B0BA] flex justify-center items-center p-[10px]">
                    <select name="" id="" className="w-[100%]">
                      <option value="">Resitential</option>
                    </select>
                  </div>
                </div>
                <div className="w-[268px] h-[74px] flex flex-col justify-start items-start gap-[10px]">
                  <div className="w-[100%] h-[22px] font-[400] text-[16px] leading-[140%] text-[#2A2A2A]">
                    Room Type
                  </div>
                  <div className="w-[268px] h-[42px] rounded-[4px] border-[1px] border-solid  border-[#00B0BA] flex justify-center items-center p-[10px]">
                    <select name="" id="" className="w-[100%]">
                      <option value="">Living Room</option>
                    </select>
                  </div>
                </div>
                <div className="w-[268px] h-[74px] flex flex-col justify-start items-start gap-[10px]">
                  <div className="w-[100%] h-[22px] font-[400] text-[16px] leading-[140%] text-[#2A2A2A]">
                    Room Style
                  </div>
                  <div className="w-[268px] h-[42px] rounded-[4px] border-[1px] border-solid  border-[#00B0BA] flex justify-center items-center p-[10px]">
                    <select name="" id="" className="w-[100%]">
                      <option value="">Modern</option>
                    </select>
                  </div>
                </div>
                <div className="w-[268px] h-[74px] flex flex-col justify-start items-start gap-[10px]">
                  <div className="w-[100%] h-[22px] font-[400] text-[16px] leading-[140%] text-[#2A2A2A]">
                    Number Of Designs
                  </div>
                  <div className="w-[268px] h-[42px] rounded-[4px] border-[1px] border-solid  border-[#00B0BA] flex justify-center items-center p-[10px]">
                    <input type="text" placeholder="1" />
                  </div>
                </div>
              </div>
              {/* picture  */}
              <div className="w-[1176px] h-[360px] flex flex-col gap-[10px] p-[20px]">
                <div className="w-[100%] h-[24px] flex justify-end">
                  <Link to="">
                    <div className="w-[180px] flex justify-center items-center gap-1">
                      <img
                        src={Split}
                        alt="Arrow"
                        className="w-[24px] h-[24px]"
                      />
                      <div className="font-medium text-[18px] leading-[156%] text-[#2A2A2A]">
                        Slide view
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="w-[100%] h-[336px] flex justify-between items-center gap-4">
                  <div>
                    <img src={Before} alt="" />
                  </div>
                  <div>
                    <img src={After} alt="" />
                  </div>
                </div>
              </div>

              <div className="w-[100%] h-[55px] flex justify-center items-center  mt-[50px]">
                <div className="w-[193px] h-[54px] flex justify-center items-center border-[1px] border-solid border-[#00B0BA] font-semibold text-[18px] rounded-[10px] text-[#2A2A2A]">
                  {" "}
                  Create More Designs
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
