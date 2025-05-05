import React from "react";

export default function HeroProducts() {
  return (
    <div className="px-[20px] sm:px-[50px] pb-[20px] w-full">
      <div className="w-full my-[20px] sm:my-[60px] text-center flex flex-col justify-center items-center">
        <h1 className="text-[#2a2a2a] text-4xl font-bold md:text-[58px] mb-[10px] sm:text-[40px]">
          Discover the <span className="text-[#009a98]">Future of Space </span>
          Transformation
        </h1>
        <p className="text-[18px] font-normal text-[#b0b0b0]">
          Smart AI Solutions for Interiors, Exteriors, and Outdoors
        </p>
      </div>

      <div className="w-full rounded-[20px] p-[20px] bg-gradient-to-b from-[#00b0ba] via-[#00646a] to-[#002628] sm:p-[25px]">
        <h2 className="text-2xl font-bold text-white tracking-[20px] text-center mb-[30px] sm:text-[28px]">
          PICK YOUR STYLE
        </h2>
        <div className="w-full flex justify-evenly items-center flex-wrap gap-[30px]">
          {/* Interiors */}
          <div className="flex flex-col items-center justify-center gap-[8px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 37 27"
              fill="none"
              className="rounded-full w-[50px] h-[50px] border-2 border-white p-[10px]"
            >
              <path
                d="M19.1667 3.33333C19.1667 1.48333 20.65 0 22.5 0H28.3333C30.1667 0 31.6667 1.5 31.6667 3.33333V6.93333C29.7333 7.61667 28.3333 9.45 28.3333 11.6167V15H19.1667V3.33333ZM8.33333 11.6V15H17.5V3.33333C17.5 1.48333 16.0167 0 14.1667 0H8.33333C6.5 0 5 1.5 5 3.33333V6.91667C6.93333 7.6 8.33333 9.45 8.33333 11.6ZM32.7667 8.38333C31.1333 8.65 30 10.2 30 11.8667V16.6667H6.66667V11.6667C6.66667 10.7826 6.31548 9.93477 5.69036 9.30964C5.06523 8.68452 4.21739 8.33333 3.33333 8.33333C2.44928 8.33333 1.60143 8.68452 0.976311 9.30964C0.351189 9.93477 0 10.7826 0 11.6667V20C0 21.8333 1.5 23.3333 3.33333 23.3333V26.6667H6.66667V23.3333H30V26.6667H33.3333V23.3333C35.1667 23.3333 36.6667 21.8333 36.6667 20V11.6667C36.6667 9.65 34.85 8.03333 32.7667 8.38333Z"
                fill="white"
              />
            </svg>
            <p className="text-[22px] font-semibold text-white">Interiors</p>
          </div>

          {/* Exteriors */}
          <div className="flex flex-col items-center justify-center gap-[8px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 39 25"
              fill="none"
              className="rounded-full w-[50px] h-[50px] border-2 border-white p-[10px]"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.236 0.0484619L6.07079 8.14226V22.3064H1.0118C0.743453 22.3064 0.486098 22.413 0.296349 22.6027C0.1066 22.7925 0 23.0498 0 23.3181C0 23.5865 0.1066 23.8438 0.296349 24.0335C0.486098 24.2233 0.743453 24.3299 1.0118 24.3299H37.4365C37.7049 24.3299 37.9622 24.2233 38.152 24.0335C38.3417 23.8438 38.4483 23.5865 38.4483 23.3181C38.4483 23.0498 38.3417 22.7925 38.152 22.6027C37.9622 22.413 37.7049 22.3064 37.4365 22.3064H34.4011V8.14226L20.236 0.0484619ZM24.2832 22.3064V11.1774H30.354V22.3064H24.2832ZM21.2478 11.1774H10.118V17.2478H21.2478V11.1774Z"
                fill="white"
              />
            </svg>
            <p className="text-[22px] font-semibold text-white">Exteriors</p>
          </div>

          {/* Outdoors */}
          <div className="flex flex-col items-center justify-center gap-[8px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 35"
              fill="none"
              className="rounded-full w-[50px] h-[50px] border-2 border-white p-[10px]"
            >
              <path
                d="M0 20C0 23.9782 1.58035 27.7936 4.3934 30.6066C7.20644 33.4196 11.0218 35 15 35C15 26.6667 8.28333 20 0 20ZM15 7.5C16.1051 7.5 17.1649 7.93899 17.9463 8.72039C18.7277 9.50179 19.1667 10.5616 19.1667 11.6667C19.1667 12.7717 18.7277 13.8315 17.9463 14.6129C17.1649 15.3943 16.1051 15.8333 15 15.8333C13.8949 15.8333 12.8351 15.3943 12.0537 14.6129C11.2723 13.8315 10.8333 12.7717 10.8333 11.6667C10.8333 10.5616 11.2723 9.50179 12.0537 8.72039C12.8351 7.93899 13.8949 7.5 15 7.5ZM4.33333 15.4167C4.33333 16.5217 4.77232 17.5815 5.55372 18.3629C6.33512 19.1443 7.39493 19.5833 8.5 19.5833C9.38333 19.5833 10.2 19.3 10.8333 18.85V19.1667C10.8333 20.2717 11.2723 21.3315 12.0537 22.1129C12.8351 22.8943 13.8949 23.3333 15 23.3333C16.1051 23.3333 17.1649 22.8943 17.9463 22.1129C18.7277 21.3315 19.1667 20.2717 19.1667 19.1667V18.85C19.8 19.3 20.6167 19.5833 21.5 19.5833C22.6051 19.5833 23.6649 19.1443 24.4463 18.3629C25.2277 17.5815 25.6667 16.5217 25.6667 15.4167C25.6667 13.75 24.6833 12.3333 23.2833 11.6667C24.6833 11 25.6667 9.56667 25.6667 7.91667C25.6667 6.8116 25.2277 5.75179 24.4463 4.97039C23.6649 4.18899 22.6051 3.75 21.5 3.75C20.6167 3.75 19.8 4.01667 19.1667 4.48333V4.16667C19.1667 3.0616 18.7277 2.00179 17.9463 1.22039C17.1649 0.438987 16.1051 0 15 0C13.8949 0 12.8351 0.438987 12.0537 1.22039C11.2723 2.00179 10.8333 3.0616 10.8333 4.16667V4.48333C10.2 4.01667 9.38333 3.75 8.5 3.75C7.39493 3.75 6.33512 4.18899 5.55372 4.97039C4.77232 5.75179 4.33333 6.8116 4.33333 7.91667C4.33333 9.56667 5.31667 11 6.71667 11.6667C5.31667 12.3333 4.33333 13.75 4.33333 15.4167ZM15 35C18.9782 35 22.7936 33.4196 25.6066 30.6066C28.4196 27.7936 30 23.9782 30 20C21.6667 20 15 26.6667 15 35Z"
                fill="white"
              />
            </svg>
            <p className="text-[22px] font-semibold text-white">Outdoors</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-[20px] mt-[40px]">
        {[
          "Living Room",
          "Bedroom",
          "Kitchen",
          "Dining Room",
          "Bathroom",
          "Home Office",
          "Kids’ Room",
          "Library",
          "Walk-In Closet",
          "Hallway",
          "Foyer",
          "Laundry Room",
          "Guest Room",
          "Study Room",
          "Entertainment Room",
          "Home Gym",
          "Home Theater",
        ].map((item, index) => (
          <p
            key={index}
            className="rounded-full cursor-pointer border-2 border-solid border-[#007b82] p-2 sm:px-[15px] sm:py-[10px] w-fit"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
