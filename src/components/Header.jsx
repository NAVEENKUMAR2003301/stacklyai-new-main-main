import React, { useState } from "react";
import logoImg from "../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <div>
      <header className="w-full h-[90px] bg-white flex justify-between items-center backdrop-blur-[6px] xl:px-20 xl:py-[25px] md:p-[20px] p-[15px]">
        <img
          className="cursor-pointer max-[400px]:w-[60%]"
          onClick={() => {
            navigate("/");
          }}
          src={logoImg}
          alt="Logo"
        />
        <nav>
          <ul
            className={`hidden gap-12 md:gap-8 min-[900px]:flex`}
            style={{ listStyle: "none" }}
          >
            <li>
              <Link
                className="text-base font-medium text-[#2a2a2a] cursor-pointer no-underline leading-[100%] hover:text-[#007b82] visited:text-[#007b82] visited:font-bold"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-base font-medium text-[#2a2a2a] cursor-pointer no-underline leading-[100%] hover:text-[#007b82] visited:text-[#007b82] visited:font-bold"
                to=""
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                className="text-base font-medium text-[#2a2a2a] cursor-pointer no-underline leading-[100%] hover:text-[#007b82] visited:text-[#007b82] visited:font-bold"
                to=""
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                className="text-base font-medium text-[#2a2a2a] cursor-pointer no-underline leading-[100%] hover:text-[#007b82] visited:text-[#007b82] visited:font-bold"
                to=""
              >
                API
              </Link>
            </li>
            <li>
              <Link
                className="text-base font-medium text-[#2a2a2a] cursor-pointer no-underline leading-[100%] hover:text-[#007b82] visited:text-[#007b82] visited:font-bold"
                to=""
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        <div className="min-[900px]:flex hidden  gap-[24px]">
          <Link to={'/sign-in'} className="w-[107px] h-[39px] text-base font-semibold leading-[100%] border bg-white text-[#007b82] cursor-pointer flex justify-center items-center no-underline rounded-[5px] border-solid border-[#007b82]  active:bg-[#007b82] active:text-white">
            Log In
          </Link>
          <Link to={'/sign-up'} className="w-[107px] h-[39px] text-base font-semibold leading-[100%] border bg-[#007b82] text-white cursor-pointer flex justify-center items-center no-underline rounded-[5px] border-solid border-white active:bg-white active:text-[#007b82]">
            Sign Up
          </Link>
        </div>

        <div
          onClick={() => {
            setShowSideBar(true);
          }}
          className={`hidden max-[900px]:block w-[30px] h-[30px]  cursor-pointer rounded-[5px]`}
        >
          <div className="w-full h-1 rounded-md bg-gray-700 transition-all duration-[0.3s] ease-[ease-in-out] mx-0 my-[5px]"></div>
          <div className="w-full h-1 rounded-md bg-gray-700 transition-all duration-[0.3s] ease-[ease-in-out] mx-0 my-[5px]"></div>
          <div className="w-full h-1 rounded-md bg-gray-700 transition-all duration-[0.3s] ease-[ease-in-out] mx-0 my-[5px]"></div>
        </div>
      </header>

      <section 
        className={`fixed top-0 ${
          showSideBar ? "right-0" : "right-[-200%]"
        } transition-all w-[70vw] sm:w-[50%] bg-white shadow-2xl min-h-[120vh] flex flex-col min-[900px]:hidden gap-7 justify-start items-start p-[40px] z-10`}
        style={{ listStyle: "none" }}
      >
        <svg
          onClick={() => {
            setShowSideBar(false);
          }}
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#1f1f1f"
        >
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
        <Link
          className="text-base font-medium text-[#2a2a2a] cursor-pointer no-underline leading-[100%] hover:text-[#007b82] visited:text-[#007b82] visited:font-bold"
          to=""
        >
          Home
        </Link>

        <Link
          className="text-base font-medium text-[#2a2a2a] cursor-pointer no-underline leading-[100%] hover:text-[#007b82] visited:text-[#007b82] visited:font-bold"
          to=""
        >
          Products
        </Link>

        <Link
          className="text-base font-medium text-[#2a2a2a] cursor-pointer no-underline leading-[100%] hover:text-[#007b82] visited:text-[#007b82] visited:font-bold"
          to=""
        >
          Pricing
        </Link>

        <Link
          className="text-base font-medium text-[#2a2a2a] cursor-pointer no-underline leading-[100%] hover:text-[#007b82] visited:text-[#007b82] visited:font-bold"
          to=""
        >
          API
        </Link>

        <Link
          className="text-base font-medium text-[#2a2a2a] cursor-pointer no-underline leading-[100%] hover:text-[#007b82] visited:text-[#007b82] visited:font-bold"
          to=""
        >
          Contact Us
        </Link>

        <button
          className="w-[107px] h-[39px] text-base font-semibold leading-[100%] border bg-white text-[#007b82] cursor-pointer flex justify-center items-center no-underline rounded-[5px] border-solid border-[#007b82] active:bg-[#007b82] active:text-white"
          onClick={() => {
            navigate("/sign-in");
          }}
        >
          Log In
        </button>
        <button
          className="w-[107px] h-[39px] text-base font-semibold leading-[100%] border bg-[#007b82] text-white cursor-pointer flex justify-center items-center no-underline rounded-[5px] border-solid border-white active:bg-white active:text-[#007b82]"
          onClick={() => {
            navigate("/sign-up");
          }}
        >
          Sign Up
        </button>
      </section>
    </div>
  );
}
