import React from "react";
import Banner1 from "../../assets/pricing-pg/banner1.png";
import Banner2 from "../../assets/pricing-pg/banner2.png";
import CreditStats from "./CreditStats";
import Graph from "./Graph";
import PricingTable from "./PricingTable";

export default function HeroPricing() {
    const features = [
        "Unlimited Designs",
        "High-Resolution 4K Images",
        "Watermark-Free Downloads",
        "Highly Advanced AI Designs",
        "24/7 Support Assistance",
        "Cancel Anytime",
      ];
  return (


         <div>

    {/* section-1  */}  


    <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center bg-black overflow-hidden">
      
      <div className="absolute inset-0 z-0 rotate-[45deg] scale-[2] origin-center">
        <img
          src={Banner1}
          alt="Diagonal Grid 1"
          className="absolute top-[-190px] left-[20%] w-[1000px] max-w-none"
        />
        <img
          src={Banner2}
          alt="Diagonal Grid 2"
          className="absolute top-[230px] left-[-10%] w-[1300px] max-w-none"
        />
      </div>

     
      <div className="relative z-10 text-center text-white px-4">
        <h2 className="text-[50px]  font-bold leading-[100%] text-center">
          See How <span className="text-teal-400">Stackly.AI</span> Powers Innovation
        </h2>
        <p className="mt-8 text-[22px]  max-w-[937px] mx-auto text-white font-medium text-center">
          Trusted by thousands of creators, developers, and teams. Explore live usage stats and see how our community is growing every day.
        </p>
      </div>
    </section>

    {/* section-2  */}

    <CreditStats/>

    {/* section-3  */}

    <Graph />

    {/* section-4  */}

    <section className="bg-[#001E20] text-white text-center py-16 px-4">
      {/* Heading */}
      <h2 className="text-[44px] font-semibold leading-[140%] text-center mb-6">
        Ready to Experience the Power?
      </h2>

      {/* CTA Button */}
      <button className="bg-gradient-to-r from-[#00B0BA] via-[black] to-[#007B82] hover:from-cyan-600  text-white font-bold py-3 px-8 rounded-md text-[20px] transition-all duration-300">
        Get Started for Free
      </button>

      {/* Subtext */}
      <p className="mt-6 text-[16px] leading-[28px] font-[400] text-[#f5f5f5] ">
        No credit card needed. Sign up and explore your free credits today.
      </p>
    </section>

    {/* section-5  */}
     <PricingTable/>

    {/* section-6  */}

   


   
    </div>

  );
}
