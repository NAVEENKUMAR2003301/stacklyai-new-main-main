import React, { useContext, useEffect, useRef, useState } from "react";
import Form from "./Form";
import sec3Pattern1 from "../../assets/home/sec3/arcticons_ai-chat-alt-1.png";
import sec3Pattern2 from "../../assets/home/sec3/arcticons_ai-chat-alt-2.png";
import sec3Pattern3 from "../../assets/home/sec3/material-icon-theme_gemini-ai.png";
import sec3Pattern4 from "../../assets/home/sec3/material-icon-theme_gemini-ai(1).png";
import sec3Design1 from "../../assets/home/sec3/design1.jpeg";
import sec3Design2 from "../../assets/home/sec3/design2.jpeg";
import sec3Design3 from "../../assets/home/sec3/design3.jpeg";
import Footer from "../../components/Footer";

import sec4Icon1 from "../../assets/home/sec4/1.png";
import sec4Icon2 from "../../assets/home/sec4/2.png";
import sec4Icon3 from "../../assets/home/sec4/3.png";
import sec4Icon4 from "../../assets/home/sec4/4.png";

import sec5BlockImg from "../../assets/home/sec5/Frame 182.png";
import sec5Frame1 from "../../assets/home/sec5/Frame 175.png";
import sec5Frame2 from "../../assets/home/sec5/Frame 176.png";
import sec5Frame3 from "../../assets/home/sec5/Frame 177.png";
import sec5Frame4 from "../../assets/home/sec5/Frame 178.png";
import sec5Frame5 from "../../assets/home/sec5/Frame 181.png";
import sec5Frame6 from "../../assets/home/sec5/Frame 180.png";
import sec5Frame7 from "../../assets/home/sec5/Frame 183.png";
import sec5Frame8 from "../../assets/home/sec5/Frame 184.png";

import sec6Img1 from "../../assets/home/sec6/1.png";
import sec6Img2 from "../../assets/home/sec6/2.png";
import sec6Img3 from "../../assets/home/sec6/3.png";
import sec6Img4 from "../../assets/home/sec6/4.png";
import sec6Img5 from "../../assets/home/sec6/1 (1).png";
import sec6Img6 from "../../assets/home/sec6/2 (1).png";
import sec6Img7 from "../../assets/home/sec6/3 (1).png";
import sec6Img8 from "../../assets/home/sec6/4 (1).png";
import sec6Logo from "../../assets/home/sec6/Logo.png";

import sec9Frame from "../../assets/home/sec9/Frame 168.png";

import sec10Img1 from "../../assets/home/sec10/3d-interior-design-free-png 1.png";
import sec10Img2 from "../../assets/home/sec10/3d-interior-design-png 1.png";


import sec13Img1 from "../../assets/home/sec13/img1.jpg";
import sec13Img2 from "../../assets/home/sec13/img2.jpg";

import sec14Img2 from "../../assets/home/sec14/Vector.png";
import sec14Img3 from "../../assets/home/sec14/m1.jpg";
import sec14Img4 from "../../assets/home/sec14/m2.jpg";
import sec14Img5 from "../../assets/home/sec14/m3.jpg";
import FAQ from "./FAQ";
import HeroBanner from "./HeroBanner";
import DraggableImageSection from "./DraggableImageSection";
import ImageSlider from "./ImageSlider";

export default function Home() {
  

  const faqs = [
    {
      question: "What is Stackly AI?",
      answer:
        "Stackly AI is an intelligent platform designed to streamline your tasks using automation and smart tools. It helps enhance productivity by offering tailored solutions based on your needs.",
    },
    {
      question: "How does Stackly AI work?",
      answer:
        "Stackly AI works by analyzing your input and tasks, then offering automated suggestions, integrations, and tools to make your workflow more efficient and seamless.",
    },
    {
      question: "Is Stackly AI free to use?",
      answer:
        "Stackly AI offers both free and premium plans. The free plan includes essential features, while premium plans unlock advanced capabilities and integrations.",
    },
    {
      question: "How do I contact Stackly AI?",
      answer:
        "You can reach out to Stackly AI through our support page, via email at support@stackly.ai, or use the chat feature on our website for instant assistance.",
    },
  ];

  return (
    <div>

      {/* banner  */}

      <HeroBanner />

      {/* section 2 */}

      <section className="max-w-[100vw] w-full min-h-[552px] flex flex-col justify-center items-center gap-5 p-[30px] max-[500px]:py -10 max-[500px]:min-h-0">
        <h3 className="max-w-[220px] w-full min-h-[46px] text-[38px] font-semibold leading-[100%] text-[#2a2a2a] text-center">
          STACKLY AI
        </h3>
        <h2 className="max-w-[951px] w-full min-h-[53px] text-[44px] font-bold leading-[100%] text-center text-[#00b0ba]">
          Smart, fast, and built for excellence.
        </h2>
        <p className="max-w-[839px] w-full min-h-[76px] text-xl font-normal leading-[100%] h-[38px] text-center text-[#b0b0b0]">
          Delivering rapid, photo-realistic designs with advanced AI
          technology—trusted by professionals and homeowners alike.
        </p>
      </section>

      {/* section 3 */}
      <section className="w-full min-h-[1394px]">
        <div className="w-full min-h-[1394px] bg-[#002628]">
          <div className="home-bg-img relative w-full min-h-[1371px] overflow-hidden px-[5%] py-[100px]">
            <img
              src={sec3Pattern1}
              alt=""
              style={{
                position: "absolute",
                width: "240px",
                height: "240px",
                top: 0,
                left: 0,
                mixBlendMode: "overlay",
              }}
            />
            <img
              src={sec3Pattern2}
              alt=""
              style={{
                position: "absolute",
                width: "60px",
                height: "60px",
                top: "554px",
                left: "1080px",
                mixBlendMode: "overlay",
              }}
            />
            <img
              src={sec3Pattern3}
              style={{
                position: "absolute",
                width: "44px",
                height: "44px",
                top: "747px",
                left: "260px",
              }}
              alt=""
            />
            <img
              src={sec3Pattern4}
              style={{
                position: "absolute",
                width: "44px",
                height: "44px",
                top: "932px",
                left: "70%",
              }}
              alt=""
            />

            <h1 className="text-[40px] font-bold text-[white] text-center mb-5">
              Ultimate{" "}
              <span style={{ color: "#00D1DD", opacity: "100%" }}>
                AI Design Tool
              </span>{" "}
              for Interiors & Exteriors
            </h1>
            <p className="text-[22px] font-medium text-[white] text-center">
              Transform Any Space Effortlessly
            </p>

            <div className="w-full mt-[100px]">
              <div className="design flex items-center justify-center gap-5 absolute left-5 top-5 max-[600px]:static max-[600px]:flex-col max-[600px]:p-3">
                <p className="rounded-tl-[100px] rounded-tr-[20px] rounded-bl-[100px] text-[22px] font-semibold text-black bg-white p-5">
                  AI-Powered Interior Designs
                </p>
                <img
                  className="w-full max-w-[400px] max-h-[400px] rounded-[50%] border-8 border-solid border-[white]"
                  src={sec3Design1}
                  alt=""
                />
              </div>
              <div className="design flex items-center justify-center gap-5 absolute right-5 top-[300px] max-[600px]:static max-[600px]:flex-col max-[600px]:p-3">
                <img
                  className="w-full max-w-[400px] max-h-[400px] rounded-[50%] border-8 border-solid border-[white]"
                  src={sec3Design2}
                  alt=""
                />
                <p className="rounded-tl-[20px] rounded-tr-[100px] rounded-br-[100px] text-[22px] font-semibold text-black bg-white p-5">
                  Stunning Exterior Makeovers
                </p>
              </div>
              <div className="design flex items-center justify-center gap-5 absolute left-5 top-[600px] max-[600px]:static max-[600px]:flex-col max-[600px]:p-3">
                <p className="rounded-tl-[100px] rounded-tr-[50px] rounded-bl-[100px] text-[22px] font-semibold text-black bg-white p-5">
                  Outdoor Spaces Reimagined
                </p>
                <img
                  className="w-full max-w-[400px] max-h-[400px] rounded-[50%] border-8 border-solid border-[white]"
                  src={sec3Design3}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 */}

      <section className="max-[500px]:p-5 max-w-[100vw] w-full min-h-[983px] overflow-x-hidden flex justify-center items-center p-[50px]">
        <div className="max-w-[1279px] w-full min-h-[778px] bg-white shadow-[0px_0px_5px_2px_#00000040] flex flex-col justify-center items-center gap-10 px-5 py-10 rounded-[15px]">
          <p className="max-w-[951px] w-full min-h-[29px] text-2xl font-semibold leading-[100%] text-center text-[#007b82]">
            First-of-Its-Kind Features
          </p>
          <h2 className="max-w-[820px] w-full min-h-[53px] text-[44px] font-bold leading-[100%] text-center text-black">
            The <span className="text-[#00b0ba]">All You Need</span> AI Home
            Design Tool
          </h2>

          <div className="max-w-[1219px] w-full min-h-[310px] flex justify-center items-center max-[900px]:flex-wrap">
            <div className="max-w-[250px] w-full min-h-[310px] flex flex-col justify-center items-center gap-5">
              <img
                src={sec4Icon1}
                alt="icon1"
                className="max-w-[100px] w-full min-h-[100px]"
              />
              <h3 className="max-w-[211px] w-full min-h-[48px] text-xl font-semibold leading-[100%] text-center text-[#2a2a2a]">
                Interior & Exterior Image Generation
              </h3>
              <p className="max-w-[250px] w-full min-h-[102px] text-[17px] font-medium leading-[100%] h-[34px] text-center text-[#b0b0b0]">
                Get design ideas for every part of your home—both indoors and
                outdoors.
              </p>
            </div>

            <div className="max-w-[250px] w-full min-h-[310px] flex flex-col justify-center items-center gap-5">
              <img
                src={sec4Icon2}
                alt="icon1"
                className="max-w-[100px] w-full min-h-[100px]"
              />
              <h3 className="max-w-[211px] w-full min-h-[48px] text-xl font-semibold leading-[100%] text-center text-[#2a2a2a]">
                Unlimited AI Ideas
              </h3>
              <p className="max-w-[250px] w-full min-h-[102px] text-[17px] font-medium leading-[100%] h-[34px] text-center text-[#b0b0b0]">
                Generate endless creative ideas to transform any space with
                ease.
              </p>
            </div>

            <div className="max-w-[250px] w-full min-h-[310px] flex flex-col justify-center items-center gap-5">
              <img
                src={sec4Icon3}
                alt="icon1"
                className="max-w-[100px] w-full min-h-[100px]"
              />
              <h3 className="max-w-[211px] w-full min-h-[48px] text-xl font-semibold leading-[100%] text-center text-[#2a2a2a]">
                High-Resolution Images
              </h3>
              <p className="max-w-[250px] w-full min-h-[102px] text-[17px] font-medium leading-[100%] h-[34px] text-center text-[#b0b0b0]">
                Download crystal-clear, AI-generated images that capture every
                detail.
              </p>
            </div>

            <div className="max-w-[250px] w-full min-h-[310px] flex flex-col justify-center items-center gap-5">
              <img
                src={sec4Icon4}
                alt="icon1"
                className="max-w-[100px] w-full min-h-[100px]"
              />
              <h3 className="max-w-[211px] w-full min-h-[48px] text-xl font-semibold leading-[100%] text-center text-[#2a2a2a]">
                Fast Image Generation
              </h3>
              <p className="max-w-[250px] w-full min-h-[102px] text-[17px] font-medium leading-[100%] h-[34px] text-center text-[#b0b0b0]">
                Create stunning, AI-powered images in just seconds.
              </p>
            </div>
          </div>
          <div className="max-w-[406px] w-full min-h-[60px] bg-[#007b82] flex justify-center items-center rounded-[5px] hover:bg-[#4bb0b5]">
            <p
              className="max-w-[137px] w-full min-h-[35px] text-xl font-bold leading-[100%] h-[35px] text-center text-white no-underline"
              style={{ wordSpacing: "2px" }}
            >
              Generate now
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section
        className="  relative w-full min-[500px]:min-h-[1116px] bg-center object-cover bg-cover bg-no-repeat bg-scroll overflow-hidden"
        style={{ backgroundImage: "url('/home/sec5/banner.png')" }}
      >
        <div className="w-full min-h-[896px] flex flex-col justify-center items-center gap-[30px]">
          <h1 className="max-w-[688px] w-full min-h-[67px] text-5xl font-semibold leading-[100%] h-[140%] text-center text-white">
            DESIGN YOUR{" "}
            <span className="max-w-[688px] w-full min-h-[67px] text-5xl font-semibold leading-[100%] h-[140%] text-center text-[#00d1dd]">
              FUTURE HOME
            </span>
          </h1>
          <p className="max-w-[941px] w-full min-h-[76px] text-xl font-medium leading-[100%] h-[38px] text-center text-white">
            Bring your dream home to life! Explore innovative designs, customize
            every detail, and create a space that reflects your style and vision
          </p>
          <div className="group">
            <img
              src={sec5BlockImg}
              alt="gallery"
              id="gall"
              className="max-w-[250px] w-full min-h-[250px] transition-all duration-[2s] rounded-sm"
            />
            <div
              className="hidden max-[300px]:hidden min-[300px]:group-hover:block transition-all duration-[2s]"
              id="gally"
            >
              <img src={sec5Frame1} className="absolute left-0 top-[370px]" />
              <img src={sec5Frame2} className="absolute left-0 bottom-5" />
              <img src={sec5Frame3} className="absolute right-0 top-[400px]" />
              <img src={sec5Frame4} className="absolute left-20 top-[600px]" />
              <img src={sec5Frame5} className="absolute left-[50%] bottom-0" />
              <img
                src={sec5Frame6}
                className="absolute left-[50%] bottom-[30%]"
              />
              <img src={sec5Frame7} className="absolute bottom-0" />
              <img src={sec5Frame8} className="absolute right-[40%]" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 */}

      <section className="min-h-[500px]">
        <div className="h-[500px] max-[1000px]:flex-col flex justify-center items-center">
          <div className="max-w-[400px] min-h-[165px] text-center flex flex-col justify-center items-center">
            <div className="flex justify-center items-center relative left-[60px]">
              <div className="img1 lite">
                <img src={sec6Img1} alt="Design1" />
              </div>
              <div className="relative left-[-30px]">
                <img src={sec6Img2} alt="Design2" />
              </div>
              <div className="relative left-[-60px]">
                <img src={sec6Img3} alt="Design3" />
              </div>
              <div className="relative left-[-90px]">
                <img src={sec6Img4} alt="Design4" />
              </div>
              <div className="w-[100px] h-[100px] bg-white shadow-[0_1px_4px_0_#00000040] flex justify-center items-center relative left-[-120px] p-2.5 rounded-[50%]">
                <span className="max-w-[75px] min-h-[45px] text-[32px] font-semibold leading-[100%] text-align-center text-[#007B82]">
                  45+
                </span>
              </div>
            </div>
            <div className="w-[380px] min-h-[39px] flex justify-center items-center">
              <span className="min-w-[185px] text-center text-[28px] font-medium leading-[100%] text-[#2A2A2A]">
                Design Styles
              </span>
            </div>
          </div>

          <div className="min-w-[245px] min-h-[71.62px] text-center flex items-baseline justify-center">
            <img src={sec6Logo} alt="logo" />
          </div>

          <div className="max-w-[400px] min-h-[165px] text-center flex flex-col justify-center items-center">
            <div className="flex justify-center items-center relative left-[60px]">
              <div className="img1  lite">
                <img src={sec6Img5} alt="" />
              </div>
              <div className=" relative left-[-30px]">
                <img src={sec6Img6} alt="" />
              </div>
              <div className=" relative left-[-60px]">
                <img src={sec6Img7} alt="" />
              </div>
              <div className=" relative left-[-90px]">
                <img src={sec6Img8} alt="" />
              </div>
              <div className="w-[100px] h-[100px] bg-white shadow-[0_1px_4px_0_#00000040] flex justify-center items-center relative left-[-120px] p-2.5 rounded-[50%]">
                <span className="max-w-[75px] min-h-[45px] text-[32px] font-semibold leading-[100%] text-center text-[#007B82]">
                  100+
                </span>
              </div>
            </div>
            <div className="w-[380px] min-h-[39px] flex justify-center items-center">
              <span className="min-w-[185px] text-center text-[28px] font-medium leading-[100%] h-[140%] text-[#2A2A2A]">
                Design Styles
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 */}

      <Form />

      {/* Section 7.5 */}

      <section className="w-full pb-20 px-5 ">
        <div className="text-center w-full min-h-[300px] flex flex-col justify-center items-center gap-5">
          <h1 className=" w-full min-h-[67px] text-3xl md:text-5xl font-semibold leading-[140%] text-center text-black">
            <span className="text-[aqua]">SIMPLIFY DESIGN </span>WITH{" "}
            <span className="text-[#078C8C]">STACKLYAI</span>
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
          <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center">
            <span className="text-[aqua]"> Upload </span>a photo of your room,
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
          <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center">
            <span className="text-[aqua]"> Personalize your experience </span>—
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
          <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center">
            <span className="text-[aqua]">Generate</span> stunning new décor and
            design concepts in under 25 seconds.
          </p>
        </div>
      </section>

      {/* Section 8 */}

      <section
        className="w-screen min-h-[612px] bg-center bg-cover object-cover bg-no-repeat flex justify-center items-center"
        style={{ background: "url('/home/sec8/Bg.png')" }}
      >
        <div className="max-w-[727px] w-full min-h-[274px] bg-[#00000099] backdrop-blur-[2] flex flex-col justify-center items-center gap-6 px-[30px] py-10 rounded-xl">
          <h1 className="max-w-[667px] w-full min-h-[62px] text-[44px] font-bold leading-[140%] text-center text-[white]">
            Sign Up Quickly! Get <span className="text-[aqua]">25%</span>Offer
          </h1>
          <div className="ul-list">
            <ul className="max-w-[405px] w-full min-h-[24px] flex justify-between items-center">
              <li
                className='before:content-["."] text-[white] text-[17px] font-medium leading-[140%] text-center before:text-[aqua] before:text-[50px] before:m-2.5'
                style={{ listStyle: "none" }}
              >
                30 free outputs
              </li>
              <li
                className='before:content-["."] text-[white] text-[17px] font-medium leading-[140%] text-center before:text-[aqua] before:text-[50px] before:m-2.5'
                style={{ listStyle: "none" }}
              >
                No credit card required
              </li>
            </ul>
          </div>
          <div
            className="max-w-[406px] w-full min-h-[60px] flex justify-center items-center gap-2.5 text-xl font-bold leading-[35px] text-center text-[white] cursor-pointer rounded-xl"
            style={{
              background:
                "linear-gradient(to right,#00B0BA 0%,#0000004D 50%,#007B82 100%)",
              wordSpacing: "8px",
            }}
          >
            Signup
          </div>
        </div>
      </section>

      {/* Section 9 */}

      <section className="max-w-[100vw]  flex flex-col justify-center items-center gap-[50px] p-5 py-32">
        <h1 className="max-w-[1320px] w-full min-w-[134px] md:text-5xl text-3xl font-semibold leading-[140%] text-center text-black">
          Plan Your Future{" "}
          <span className="text-[aqua]">Interiors, Exteriors, </span> and{" "}
          <span>Outdoor Spaces </span>with{" "}
          <span className="text-[rgb(5,128,128)]">Stackly</span>
        </h1>
        <img
          className="max-w-[1115px] h-auto w-full"
          src={sec9Frame}
          alt="section 9 frame image"
        />
      </section>

      {/* Section 10 */}

      <section className="max-w-[100vw] min-h-[926px] flex flex-col justify-center items-center gap-[30px]">
        <h1 className="max-w-[1320px] min-h-[67px] w-full text-5xl font-semibold leading-[140%] text-center text-black">
          Compare Design, Find Your{" "}
          <span className="text-[aqua]">Perfect style</span>
        </h1>
        <p className="max-w-[736px] w-full min-h-[72px] text-lg font-medium leading-[200%] text-center text-[#B0B0B0]">
          Explore and compare multiple interior, exterior, and outdoor designs
          to discover the one that matches your unique taste.
        </p>
        <div className="flex justify-center items-center max-[1000px]:flex-wrap gap-2.5 p-5">
          <div className="max-w-[577px]  flex flex-col justify-center items-center gap-6 bg-[white] shadow-[0_0_4px_0_#00000040] px-[18px] py-[30px] rounded-[10px]">
            <img
              className="max-w-[541px]  w-full"
              src={sec10Img1}
              alt="image1"
            />
            <p className="max-w-[541px] min-h-[72px] w-full text-center text-[17px] font-medium leading-[140%] text-black">
              <span className="text-[aqua]">
                "Your style is sleek and sophisticated.{" "}
              </span>
              This brown-themed office design blends modern functionality with
              warm, earthy tones—perfect for a productive and stylish
              workspace."
            </p>
          </div>

          <div className="max-w-[577px]  flex flex-col justify-center items-center gap-6 bg-[white] shadow-[0_0_4px_0_#00000040] px-[18px] py-[30px] rounded-[10px]">
            <img
              className="max-w-[541px]  w-full"
              src={sec10Img2}
              alt="image2"
            />
            <p className="max-w-[541px] min-h-[72px] w-full text-center text-[17px] font-medium leading-[140%] text-black">
              <span className="text-[aqua]">
                "Embrace comfort with a touch of elegance.
              </span>{" "}
              This brown-themed lounge offers a cozy yet professional
              atmosphere, balancing work and relaxation effortlessly."
            </p>
          </div>
        </div>
      </section>

      {/* {section:11} */}


            <ImageSlider/>

      {/* Section: Community Showcase */}
      




      {/* {section-12} */}
      <section className="w-full min-h-[200px] py-10 px-4 bg-teal-100 flex flex-col md:flex-row justify-center items-center gap-6">
        <h2 className="text-black text-center md:text-left text-2xl md:text-3xl font-medium max-w-[900px]">
          Get started with 10 free outputs – No credit card needed!
        </h2>

        <a
          href="#"
          className="bg-gradient-to-r from-teal-900 via-teal-700 to-cyan-500 text-white font-bold py-3 px-6 rounded-md hover:opacity-90 transition"
        >
          Start Free Trial
        </a>
      </section>
      {/* {section-13} */}
      <section className="w-full py-16 px-4 flex flex-col justify-center items-center">
        <h2 className="text-3xl md:text-5xl font-medium text-center text-gray-800 leading-tight">
          Discover Our{" "}
          <span className="text-cyan-400">Advanced AI Interior Tools</span> and
          Redesign
        </h2>
        <h2 className="text-3xl md:text-5xl font-medium text-center text-gray-800 mt-2">
          Your Space Instantly
        </h2>
      </section>

      {/* {section-14} */}

      <DraggableImageSection/>

      {/* {section-15} */}

      <section className="w-full py-16 px-6 flex flex-col items-center bg-white text-gray-800">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-lg font-medium text-gray-500">
            Transform in <span className="text-cyan-500">Seconds</span>, Not
            Days
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            StacklyAI is for <span className="text-cyan-500">Homeowners</span>{" "}
            and <span className="text-cyan-500">Professionals</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full">
          {/* Personal Use Card */}
          <div className="flex flex-col items-center text-center">
            <img
              src={sec13Img2}
              alt="Personal Use"
              className="rounded-lg shadow-md mb-6 w-full object-cover"
            />
            <h3 className="text-2xl font-semibold mb-2">
              For Personal Use <span className="text-cyan-500">01</span>
            </h3>
            <p className="text-gray-500 max-w-sm">
              Explore your unique style and create endless realistic designs for
              both your home's interior and exterior spaces.
            </p>
          </div>

          {/* Professional Use Card */}
          <div className="flex flex-col items-center text-center">
            <img
              src={sec13Img1}
              alt="Professional Use"
              className="rounded-lg shadow-md mb-6 w-full object-cover"
            />
            <h3 className="text-2xl font-medium mb-2">
              For Professional Use <span className="text-cyan-500">02</span>
            </h3>
            <p className="text-gray-500 max-w-sm">
              Impress clients instantly by showcasing stunning design
              transformations while saving time on every project.
            </p>
          </div>
        </div>
      </section>

      {/* {section-16} */}

      <section
        className="relative w-full  absolute-0  bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/src/assets/home/sec14/bg1.jpg')" }}
      >
        <div className="py-20 px-6 bg-[#00000096]">
          <div className="flex flex-col items-center text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-6xl font-bold">“</span> Meet Our Members{" "}
              <span className="text-6xl font-bold">”</span>
            </h2>
            <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-8">
              You're in good company with{" "}
              <span className="text-cyan-400 font-semibold">Stackly AI</span>,
              trusted by people in all 195 countries.
            </p>
            {/* Center logo */}
            <div className="mb-16">
              <div className="bg-white rounded-full p-4 shadow-lg">
                <img src={sec14Img2} alt="Center Icon" className="w-12 h-12" />
              </div>
            </div>

            {/* Member Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full">
              {/* Card 1 */}
              <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center">
                <div className="flex items-center mb-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">Guru Ragav Auditor</h3>
                    <p className="text-gray-500 text-sm">Auditor</p>
                  </div>
                  <img
                    src={sec14Img3}
                    alt="Member 1"
                    className="w-12 h-12 rounded-full object-cover ml-4"
                  />
                </div>
                <p className="text-gray-600 text-sm">
                  “I use Stackly AI to help my clients visualize how their
                  backyard could look like if they hire me for the job. It works
                  flawlessly!”
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center">
                <div className="flex items-center mb-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">Cristian Rama</h3>
                    <p className="text-gray-500 text-sm">Architect</p>
                  </div>
                  <img
                    src={sec14Img4}
                    alt="Member 2"
                    className="w-12 h-12 rounded-full object-cover ml-4"
                  />
                </div>
                <p className="text-gray-600 text-sm">
                  “I needed to replace my living room furniture so I generated a
                  few design ideas with Stackly AI. Awesome technology!”
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center">
                <div className="flex items-center mb-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">Ram Krishnan</h3>
                    <p className="text-gray-500 text-sm">Architect</p>
                  </div>
                  <img
                    src={sec14Img5}
                    alt="Member 3"
                    className="w-12 h-12 rounded-full object-cover ml-4"
                  />
                </div>
                <p className="text-gray-600 text-sm">
                  “I run a real estate agency and my clients send me pictures
                  with their empty properties. I use Stackly AI to furnish them
                  automatically!”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {section faq} */}

      {/* {section-15} */}

      <FAQ faqs={faqs} />

      {/* {section-17} */}
      <Footer />
    </div>
  );
}
