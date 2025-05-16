import React from "react";
import { CheckCircle2 } from "lucide-react";
import coin from "../../assets/pricing-pg/coin.png"; // Adjust path if needed

const plans = [
  {
    name: "Basic",
    price: "$0",
    subtext: "(Free)",
    description:
      "Perfect for personal or casual users who want a simple idea of interior design.",
    features: [
      "10 Room Designs per month",
      "Limited AI-generated layouts",
      "Basic furniture suggestions",
      "Download 5D images, no advanced",
      "Email support (Standard)",
      "No customization options",
      "No revision support",
      "Watermark images"
    ],
    highlighted: false,
    cta: "Get Started",
    badge: null,
    discount: null
  },
  {
    name: "Silver",
    price: "$29 or ₹2,399",
    subtext: "/per month",
    description:
      "Ideal for homeowners or renters looking for more creative control and polished designs.",
    features: [
      "50 Room Designs per month",
      "Advanced AI layout suggestions",
      "Access to premium themes & colour palettes",
      "High-resolution image download",
      "25+ design revisions per room",
      "Priority email support",
      "3D walk-through not included",
      "Dedicated designer session",
      "Cancel anytime"
    ],
    highlighted: false,
    cta: "Get Started",
    badge: null,
    discount: "STACKLY10"
  },
  {
    name: "Gold",
    price: "$50 or ₹4,799",
    subtext: "/per month",
    description:
      "Best for professionals, investors, or anyone seeking top-tier results and personalization.",
    features: [
      "Unlimited Room Designs",
      "Commercial use (up to 3-5 members)",
      "Fully customized AI designs with layout and light suggestions",
      "Access to all premium themes + mood boards",
      "360° walkthrough visualizations",
      "High-resolution downloads + mood boards",
      "Unlimited design revisions",
      "Dedicated 1-on-1 consultation with expert designer",
      "Priority support (Live chat + Email)",
      "Cancel anytime"
    ],
    highlighted: true,
    cta: "Get Started",
    badge: "Most Popular",
    discount: "STACKLY20",
    image: coin
  }
];

export default function PricingTable() {
  return (
    <div className="min-h-screen bg-white flex justify-center items-center flex-col">
      <h2 className="w-[922px] min-h-[64px] font-bold text-[48px] leading-[64px] text-center text-[black]">
        Find the Perfect Plan for You
      </h2>
      <p className="text-center w-[759px] min-h-[28px] font-[400] text-[18px] leading-[28px] text-[#B0B0B0]">
        Start free or unlock premium features—choose what fits your journey best.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
  <div className="rounded-lg border shadow-md px-6 py-2 bg-teal-600 text-white text-center">
    <div className="text-xs font-bold uppercase">Get 10% OFF</div>
    <div className="text-[11px]">On Silver Membership!</div>
  </div>
  <div className="rounded-lg border shadow-md px-6 py-2 bg-gray-900 text-white text-center">
    <div className="text-xs font-bold uppercase">Get 20% OFF</div>
    <div className="text-[11px]">On Gold Membership!</div>
  </div>
</div>


      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-xl border p-6 shadow-md flex flex-col justify-between transition-all ${
              plan.highlighted
                ? "border-yellow-500 shadow-yellow-300"
                : "border-gray-200"
            }`}
          >
            {plan.image && (
              <img
                src={plan.image}
                alt="Coin"
                className="absolute top-4 right-4 w-8 h-8"
              />
            )}
            <div>
              <h3
                className={`text-xl font-semibold mb-1 ${
                  plan.name === "Gold"
                    ? "text-yellow-600"
                    : plan.name === "Basic"
                    ? "text-teal-600"
                    : "text-gray-700"
                }`}
              >
                {plan.name} <span className="font-normal">{plan.subtext}</span>
              </h3>
              {plan.badge && (
                <p className="text-xs font-semibold text-yellow-600">
                  ⭐ {plan.badge}
                </p>
              )}
              <p className="text-2xl font-bold mt-4">{plan.price}</p>
              <p className="text-gray-500 text-sm">{plan.subtext}</p>
              <p className="text-sm text-gray-600 mt-3 mb-6">{plan.description}</p>
              <ul className="space-y-3 text-sm">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-500 w-4 h-4 mt-1" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              {plan.discount && (
                <div className="mb-2 text-sm text-center text-teal-600 font-semibold">
                  Use code <span className="font-bold">{plan.discount}</span>
                </div>
              )}
              <button
                className={`w-full mt-2 py-2 rounded-full text-white font-semibold ${
                  plan.highlighted ? "bg-yellow-500" : "bg-gray-800"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          </div>
        ))}
      </div>

      <footer className="mt-16 text-center text-sm text-gray-500">
        Your home. Your designs. Reimagined with{" "}
        <span className="text-teal-600 font-semibold">Stackly.AI</span>
      </footer>
    </div>
  );
}
