import React, { useState } from "react";
import { Home, TreePine, Building2 } from "lucide-react";

const categories = [
  { name: "Interiors", icon: <Home size={28} /> },
  { name: "Exteriors", icon: <Building2 size={28} /> },
  { name: "Outdoors", icon: <TreePine size={28} /> },
];

const rooms = [
  "Living Room", "Bedroom", "Kitchen", "Dining Room", "Bathroom", "Home Office", "Kids’ Room",
  "Library", "Walk-in Closet", "Hallway", "Foyer", "Laundry Room", "Guest Room",
  "Study Room", "Entertainment Room", "Home Gym", "Home Theater"
];

export default function HeroProducts() {
  const [selectedCategory, setSelectedCategory] = useState("Interiors");

  return (
    <div className="text-center p-6 md:p-12 max-w-6xl mx-auto">
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold mb-2">
        Discover the <span className="text-teal-600">Future of Space</span><br />Transformation
      </h1>
      <p className="text-gray-500 mb-8 text-sm md:text-base">
        Smart AI Solutions for Interiors, Exteriors, and Outdoors
      </p>

      {/* Category Tabs */}
      <div className="bg-gradient-to-r from-teal-900 to-cyan-700 rounded-2xl py-6 mb-6 shadow-lg">
        <h2 className="text-white text-lg tracking-widest font-semibold mb-4">
          PICK YOUR STYLE
        </h2>
        <div className="flex justify-center flex-wrap gap-8">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`flex flex-col items-center px-4 py-2 rounded-lg transition ${
                selectedCategory === cat.name ? "text-white" : "text-gray-300 hover:text-white"
              }`}
            >
              <div className="mb-1">{cat.icon}</div>
              <span className="font-medium">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Room Buttons */}
      <div className="flex flex-wrap justify-center gap-3">
        {rooms.map((room) => (
          <button
            key={room}
            className="border border-teal-500 text-teal-700 px-4 py-2 rounded-full hover:bg-teal-500 hover:text-white transition text-sm"
          >
            {room}
          </button>
        ))}
      </div>
    </div>
  );
}
