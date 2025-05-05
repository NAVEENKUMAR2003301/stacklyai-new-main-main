import React from "react";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroTextBlock() {
  return (
    <section className="py-20 px-4 text-center bg-white">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
        With <span className="text-cyan-600">Stackly.AI</span> Interior Designer,
      </h2>

      <p className="text-gray-500 max-w-2xl mx-auto mb-4">
        You can now effortlessly bring your design dreams to life using the power of AI.
        Simply take a photo using your camera and watch as our advanced AI algorithms work their magic.
      </p>

      <p className="font-medium text-black">
        Best quality, lightning fast, used by homeowners and professionals
      </p>
    </section>
    
  );
}
