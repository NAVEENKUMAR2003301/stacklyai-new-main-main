import React from 'react'




const DraggableImages = [
  "Living Room",
  "Kitchen",
  "Dining Room",
  "Kids' Room",
  "Laundry Room",
  "Entertainment Room",
];
export default function DraggableImages() {
  return (

    
   
      <div className="max-w-[100vw] h-[auto] flex flex-col items-center justify-center gap-5 mt-[70px]">
      <h1 className="max-w-[649px] min-h-[78px] text-black font-bold text-[40px] leading-[78px] spacing-[0] text-center">
        With <span className="text-[#007b82]">Stackly.AI</span> Interior Designer,
      </h1>
      
      <p className="max-w-[1064px] min-h-[56px] text-[18px] leading-[28px] text-center font-[400] text-[#B0B0B0]">
        You can now effortlessly bring your design dreams to life using the power of AI. 
        Simply take a photo using your camera and watch as our advanced AI algorithms work their magic.
      </p>
      
      <div className="max-w-[1064px] min-h-[28px] text-[18px] leading-[28px] font-medium text-center text-[#2A2A2A]">
        
            Best quality, 
           lightning fast
          used by homeowners and professionals
        
      
    </div>


{/* DraggableImages */}
      
      <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-10">COLLECTIONS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {DraggableImages.map((room) => (
          <div
            key={room}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="relative">
              <img
                src="/path/to/your/image.jpg"
                alt={room}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">Before</div>
              <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">After</div>
              <div className="absolute inset-y-0 left-1/2 w-0.5 bg-white opacity-50"></div>
              <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-teal-500 text-white p-2 rounded-full shadow-md">
                ↔
              </button>
            </div>
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-2">{room}</h2>
              <div className="flex justify-between text-gray-500 text-sm">
                <button className="hover:text-black">Show</button>
                <button className="hover:text-black">Input</button>
                <button className="hover:text-black">Download</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="text-teal-600 hover:underline font-medium">View More</button>
      </div>
    </div>
      </div>
   
  )
}
