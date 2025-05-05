import React from "react";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Collection() {
  return (
    <section className="py-20 px-4 text-center bg-white">
      <motion.h2
        className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        With <span className="text-cyan-600">Stackly.AI</span> Interior Designer,
      </motion.h2>

      <motion.p
        className="text-gray-500 max-w-2xl mx-auto mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        You can now effortlessly bring your design dreams to life using the power of AI.
        Simply take a photo using your camera and watch as our advanced AI algorithms work their magic.
      </motion.p>

      <motion.p
        className="font-medium text-black mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Best quality, lightning fast, used by homeowners and professionals
      </motion.p>

      <motion.button
        className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-3 rounded-full flex items-center justify-center gap-2 mx-auto shadow-md transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => alert("AI Design Magic Coming Soon!")}
      >
        <Sparkles size={18} /> Try Stackly.AI Now
      </motion.button>
    </section>
  );
}
