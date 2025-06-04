// import React from "react";
// import DragSize from "./../../assets/product-pg/dragsize.png";
// import Img1 from "./../../assets/product-pg/img1.png";
// import Drag from "../../assets/afterHome/drag.png";
// import Download from "../../assets/afterHome/download.png";
// import Input from "../../assets/afterHome/input.png";
// import Search from "../../assets/afterHome/search.png";
// import More from "../../assets/afterHome/more.png";
// import Share from "../../assets/afterHome/share.png";

// import dragImg1_1 from "../../assets/home/draggableImgSection/drag1(1).png";
// import dragImg1_2 from "../../assets/home/draggableImgSection/drag1(2).png";
// import dragImg2_1 from "../../assets/home/draggableImgSection/drag2(1).png";
// import dragImg2_2 from "../../assets/home/draggableImgSection/drag2(2).png";
// import dragImg3_1 from "../../assets/home/draggableImgSection/drag3(1).png";
// import dragImg3_2 from "../../assets/home/draggableImgSection/drag3(2).png";
// import DraggableImages from "../../components/DraggableImages";
// import Banner from "../../assets/product-pg/bannercode.png";
// import Banner1 from "../../assets/product-pg/bannercode1.png";
// import Star from "../../assets/product-pg/star.png";
// import {Link} from "react-router-dom" 


// export default function DraggableAfter() {
//   return (
//     <div>
//       {/* DraggableImages */}

//       <div>
//         <div
//           className="max-w-[100vw] h-auto bg-cover bg-center bg-no-repeat"
//           style={{ backgroundImage: 'url("/AfterHome/sec4.png")' }}
//         >
//           <div className="w-full min-h-[158px] flex flex-col justify-center items-center gap-[14px]">
//             <div className="w-[1026px] min-h-[78px] font-bold text-[48px] leading-[78px] text-center text-gradient-to-l from-[#007B82] to-[#001A1C] pt-[70px]">
//               Your Recent <span className="text-[#009A98]">Designs</span>
//             </div>
//             <div className="w-[1026px] min-h-[56px] font-[400] text-[20px] leading-[24px] text-center text-[#000000]">
//               Your latest AI-powered transformations — beautifully rendered and
//               saved in your gallery
//             </div>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-2 gap-10 sm:gap-15 mt-10  p-5 sm:p-10">
//             <div className="max-w-[522px] m-auto w-full h-auto sm:min-h-auto flex flex-col gap-2">
//               <div className="max-w-[520px] min-h-[35px] flex justify-between">
//                 <div className="text-[16px] font-semibold leading-[35px] spacing-[8px] text-center text-[#007B82]">
//                   MM/DD
//                 </div>
//                 <div className="w-[28px] h-[28px]">
//                   <img src={Drag} alt="size" />
//                 </div>
//               </div>
//               <div className="max-w-[522px] w-full h-auto  rounded-[4px]">
//                 <DraggableImages
//                   imageRight={dragImg1_1}
//                   imageLeft={dragImg1_2}
//                 />
//               </div>
//               <div className="max-w-[520px] min-h-[57px] flex justify-between items-center">
//                 <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
//                   <img src={Search} alt="search" />
//                   <div className="max-w-[40px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
//                     show
//                   </div>
//                 </div>
//                 {/* <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
//                   <img src={Input} alt="input" />
//                   <div className="max-w-[40px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
//                     Input
//                   </div>
//                 </div> */}
//                 <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
//                   <img src={Download} alt="download" />
//                   <div className="max-w-[57px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
//                     Download
//                   </div>
//                 </div>
//                 <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
//                   <img src={Share} alt="download" />
//                   <div className="max-w-[57px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
//                     Share
//                   </div>
//                 </div>
//                 <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
//                   <img src={More} alt="download" />
//                   <div className="max-w-[57px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]"></div>
//                 </div>
//               </div>
//             </div>
//             <div className="max-w-[522px] m-auto w-full h-auto sm:min-h-auto flex flex-col gap-2">
//               <div className="max-w-[520px] min-h-[35px] flex justify-between">
//                 <div className="text-[16px] font-semibold leading-[35px] spacing-[8px] text-center text-[#007B82]">
//                   MM/DD
//                 </div>
//                 <div className="w-[28px] h-[28px]">
//                   <img src={Drag} alt="size" />
//                 </div>
//               </div>
//               <div className="max-w-[522px] w-full h-auto  rounded-[4px]">
//                 <DraggableImages
//                   imageRight={dragImg1_1}
//                   imageLeft={dragImg1_2}
//                 />
//               </div>
//               <div className="max-w-[520px] min-h-[57px] flex justify-between items-center">
//                 <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
//                   <img src={Search} alt="search" />
//                   <div className="max-w-[40px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
//                     show
//                   </div>
//                 </div>
//                 {/* <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
//                   <img src={Input} alt="input" />
//                   <div className="max-w-[40px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
//                     Input
//                   </div>
//                 </div> */}
//                 <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
//                   <img src={Download} alt="download" />
//                   <div className="max-w-[57px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
//                     Download
//                   </div>
//                 </div>
//                 <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
//                   <img src={Share} alt="download" />
//                   <div className="max-w-[57px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
//                     Share
//                   </div>
//                 </div>
//                 <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
//                   <img src={More} alt="download" />
//                   <div className="max-w-[57px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]"></div>
//                 </div>
//               </div>
//             </div>
//             <div className="max-w-[522px] m-auto w-full h-auto sm:min-h-auto flex flex-col gap-2">
//               <div className="max-w-[520px] min-h-[35px] flex justify-between">
//                 <div className="text-[16px] font-semibold leading-[35px] spacing-[8px] text-center text-[#007B82]">
//                   MM/DD
//                 </div>
//                 <div className="w-[28px] h-[28px]">
//                   <img src={Drag} alt="size" />
//                 </div>
//               </div>
//               <div className="max-w-[522px] w-full h-auto  rounded-[4px]">
//                 <DraggableImages
//                   imageRight={dragImg1_1}
//                   imageLeft={dragImg1_2}
//                 />
//               </div>
//               <div className="max-w-[520px] min-h-[57px] flex justify-between items-center">
//                 <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
//                   <img src={Search} alt="search" />
//                   <div className="max-w-[40px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
//                     show
//                   </div>
//                 </div>
//                 {/* <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
//                   <img src={Input} alt="input" />
//                   <div className="max-w-[40px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
//                     Input
//                   </div>
//                 </div> */}
//                 <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
//                   <img src={Download} alt="download" />
//                   <div className="max-w-[57px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
//                     Download
//                   </div>
//                 </div>
//                 <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
//                   <img src={Share} alt="download" />
//                   <div className="max-w-[57px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
//                     Share
//                   </div>
//                 </div>
//                 <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
//                   <img src={More} alt="download" />
//                   <div className="max-w-[57px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]"></div>
//                 </div>
//               </div>
//             </div>
//             <div className="max-w-[522px] m-auto w-full h-auto sm:min-h-auto flex flex-col gap-2">
//               <div className="max-w-[520px] min-h-[35px] flex justify-between">
//                 <div className="text-[16px] font-semibold leading-[35px] spacing-[8px] text-center text-[#007B82]">
//                   MM/DD
//                 </div>
//                 <div className="w-[28px] h-[28px]">
//                   <img src={Drag} alt="size" />
//                 </div>
//               </div>
//               <div className="max-w-[522px] w-full h-auto  rounded-[4px]">
//                 <DraggableImages
//                   imageRight={dragImg1_1}
//                   imageLeft={dragImg1_2}
//                 />
//               </div>
//               <div className="max-w-[520px] min-h-[57px] flex justify-between items-center">
//                 <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
//                   <img src={Search} alt="search" />
//                   <div className="max-w-[40px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
//                     show
//                   </div>
//                 </div>
//                 {/* <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
//                   <img src={Input} alt="input" />
//                   <div className="max-w-[40px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
//                     Input
//                   </div>
//                 </div> */}
//                 <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
//                   <img src={Download} alt="download" />
//                   <div className="max-w-[57px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
//                     Download
//                   </div>
//                 </div>
//                 <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
//                   <img src={Share} alt="download" />
//                   <div className="max-w-[57px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
//                     Share
//                   </div>
//                 </div>
//                 <div className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center">
//                   <img src={More} alt="download" />
//                   <div className="max-w-[57px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="w-[146px] h-[38px] rounded-[8px] border-[1px] border-solid border-[#007B82] px-[12px] py-[8px] flex justify-center items-center gap-[8px] relative top-[-960px] right-[-1350px] ">
//             <select
//               name=""
//               id=""
//               className="text-[#007B82] cursor-pointer w-full"
//             >
//               <option value="">Filters</option>
//             </select>
//           </div>
//         </div>
//       </div>
//       <Link to="">
        
//         <div className="w-full h-[20px] flex justify-center items-center font-[400] text-[20px] leading-[140%] text-center underline text-[#007B82] mb-[50px]">
//           View all
//         </div>
//       </Link>
//     </div>
//   );
// }



import React, { useState } from "react";
import DragSize from "./../../assets/product-pg/dragsize.png";
import Img1 from "./../../assets/product-pg/img1.png";
import Drag from "../../assets/afterHome/drag.png";
import Download from "../../assets/afterHome/download.png";
import Input from "../../assets/afterHome/input.png";
import Search from "../../assets/afterHome/search.png";
import More from "../../assets/afterHome/more.png";
import Share from "../../assets/afterHome/share.png";

import dragImg1_1 from "../../assets/home/draggableImgSection/drag1(1).png";
import dragImg1_2 from "../../assets/home/draggableImgSection/drag1(2).png";
import dragImg2_1 from "../../assets/home/draggableImgSection/drag2(1).png";
import dragImg2_2 from "../../assets/home/draggableImgSection/drag2(2).png";
import dragImg3_1 from "../../assets/home/draggableImgSection/drag3(1).png";
import dragImg3_2 from "../../assets/home/draggableImgSection/drag3(2).png";
import DraggableImages from "../../components/DraggableImages";
import Banner from "../../assets/product-pg/bannercode.png";
import Banner1 from "../../assets/product-pg/bannercode1.png";
import Star from "../../assets/product-pg/star.png";
import { Link } from "react-router-dom";

export default function DraggableAfter() {
  const [showOptions, setShowOptions] = useState(true);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const handleDownload = (imageUrl) => {
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "design-after.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = () => {
    setShowShareOptions(!showShareOptions);
  };

  const handleDragClick = (imageUrl) => {
    setFullscreenImage(imageUrl);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
    if (showShareOptions) setShowShareOptions(false);
  };

  const designItems = [
    { id: 1, date: "MM/DD", before: dragImg1_1, after: dragImg1_2 },
    { id: 2, date: "MM/DD", before: dragImg1_1, after: dragImg1_2 },
    { id: 3, date: "MM/DD", before: dragImg1_1, after: dragImg1_2 },
    { id: 4, date: "MM/DD", before: dragImg1_1, after: dragImg1_2 },
  ];

  return (
    <div>
      {/* Fullscreen Image Modal */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex justify-center items-center p-4"
          onClick={closeFullscreen}
        >
          <img
            src={fullscreenImage}
            alt="Fullscreen"
            className="max-w-full max-h-full"
          />
        </div>
      )}

      {/* Share Options Modal */}
      {showShareOptions && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-bold mb-4 text-[#007B82]">
              Share Design
            </h3>
            <div className="flex justify-around mb-4">
              <button className="flex flex-col items-center">
                <span className="text-2xl">📱</span>
                <span>WhatsApp</span>
              </button>
              <button className="flex flex-col items-center">
                <span className="text-2xl">📘</span>
                <span>Facebook</span>
              </button>
              <button className="flex flex-col items-center">
                <span className="text-2xl">🐦</span>
                <span>Twitter</span>
              </button>
            </div>
            <div className="flex items-center">
              <input
                type="text"
                value="https://example.com/share/design123"
                readOnly
                className="flex-grow p-2 border rounded-l"
              />
              <button className="bg-[#007B82] text-white p-2 rounded-r">
                Copy
              </button>
            </div>
            <button
              onClick={() => setShowShareOptions(false)}
              className="mt-4 w-full bg-gray-200 p-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* DraggableImages */}
      <div>
        <div
          className="max-w-[100vw] h-auto bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/AfterHome/sec4.png")' }}
        >
          <div className="w-full min-h-[158px] flex flex-col justify-center items-center gap-[14px]">
            <div className="w-[1026px] min-h-[78px] font-bold text-[48px] leading-[78px] text-center text-gradient-to-l from-[#007B82] to-[#001A1C] pt-[70px]">
              Your Recent <span className="text-[#009A98]">Designs</span>
            </div>
            <div className="w-[1026px] min-h-[56px] font-[400] text-[20px] leading-[24px] text-center text-[#000000]">
              Your latest AI-powered transformations — beautifully rendered and
              saved in your gallery
            </div>
          </div>

          <div className="relative">
            <div className="absolute top-[-20px] right-0 mt-4 mr-4 z-10">
              <div className="w-[146px] h-[38px] rounded-[8px] border-[1px] border-solid border-[#007B82] px-[12px] py-[8px] flex justify-center items-center gap-[8px]">
                <select
                  name=""
                  id=""
                  className="text-[#007B82] cursor-pointer w-full bg-transparent"
                >
                  <option value="">Filters</option>
                  <option value="recent">Most Recent</option>
                  <option value="oldest">Oldest</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-10 sm:gap-15 mt-10 p-5 sm:p-10">
              {designItems.map((item) => (
                <div
                  key={item.id}
                  className="max-w-[522px] m-auto w-full h-auto sm:min-h-auto flex flex-col gap-2"
                >
                  <div className="max-w-[520px] min-h-[35px] flex justify-between">
                    <div className="text-[16px] font-semibold leading-[35px] spacing-[8px] text-center text-[#007B82]">
                      {item.date}
                    </div>
                    <div
                      className="w-[28px] h-[28px] cursor-pointer"
                      onClick={() => handleDragClick(item.before)}
                    >
                      <img src={Drag} alt="size" />
                    </div>
                  </div>
                  <div className="max-w-[522px] w-full h-auto rounded-[4px]">
                    <DraggableImages
                      imageRight={item.before}
                      imageLeft={item.after}
                    />
                  </div>
                  <div className="max-w-[520px] min-h-[57px] flex justify-between items-center">
                    {showOptions && (
                      <>
                        <div
                          className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center cursor-pointer"
                          onClick={() => handleDragClick(item.before)}
                        >
                          <img src={Search} alt="search" />
                          <div className="max-w-[40px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
                            show
                          </div>
                        </div>
                        <div
                          className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center cursor-pointer"
                          onClick={() => handleDownload(item.after)}
                        >
                          <img src={Download} alt="download" />
                          <div className="max-w-[57px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
                            Download
                          </div>
                        </div>
                        <div
                          className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center cursor-pointer"
                          onClick={handleShare}
                        >
                          <img src={Share} alt="download" />
                          <div className="max-w-[57px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
                            Share
                          </div>
                        </div>
                      </>
                    )}
                    <div
                      className="max-w-[40px] min-h-[57px] flex flex-col justify-center items-center cursor-pointer"
                      onClick={toggleOptions}
                    >
                      <img src={More} alt="more options" />
                      <div className="max-w-[57px] min-h-[17px] text-[12px] leading-[140%] text-center font-[400] text-[#2A2A2A]">
                        {showOptions ? "Less" : "More"}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <Link to="">
        <div className="w-full h-[20px] flex justify-center items-center font-[400] text-[20px] leading-[140%] text-center underline text-[#007B82] mb-[50px]">
          View all
        </div>
      </Link> */}
    </div>
  );
}