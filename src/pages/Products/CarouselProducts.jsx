import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// section1

import before from "../../../public/product/sec1/before.png"
import after from "../../../public/product/sec1/after.png"
import before1 from "../../../public/product/sec1/before1.png"
import after1 from "../../../public/product/sec1/after1.png"
import before2 from "../../../public/product/sec1/before2.png"
import after2 from "../../../public/product/sec1/after2.png"




import React from "react";
import Slider from "react-slick";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    before: before,
    after: after,
  },
  {
    before: before1,
    after: after1,
  },
  {
    before: before2,
    after: after2,
  },
];

function CarouselArrow({ onClick, direction }) {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full"
      style={{ [direction]: "10px" }}
    >
      <Icon />
    </button>
  );
}

export default function CarouselProducts() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CarouselArrow direction="left" />,
    nextArrow: <CarouselArrow direction="right" />,
  };

  return (
    <div className="bg-gradient-to-r from-teal-700 to-cyan-800 py-10 px-4 text-white text-center">
      <h2 className="text-3xl font-semibold mb-8">
        Latest <span className="text-cyan-300">Design Trends</span>
      </h2>

      <div className="relative max-w-4xl mx-auto mb-6">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="relative px-4">
              <div className="flex overflow-hidden rounded-xl shadow-lg">
                <div className="w-1/2 relative">
                  <img src={img.before} alt="Before" className="w-full h-full object-cover" />
                  <span className="absolute top-2 left-2 bg-black/60 px-2 py-1 text-xs rounded">Before</span>
                </div>
                <div className="w-1/2 relative">
                  <img src={img.after} alt="After" className="w-full h-full object-cover" />
                  <span className="absolute top-2 right-2 bg-black/60 px-2 py-1 text-xs rounded">After</span>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-teal-700 p-2 rounded-full shadow-lg">
                <Sparkles size={20} />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full flex items-center justify-center gap-2 mx-auto mt-4 transition">
        <Sparkles size={18} /> Create Magic
      </button>
    </div>
  );
}
