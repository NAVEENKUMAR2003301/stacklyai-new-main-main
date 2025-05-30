// import React, { useState, useEffect } from "react";
// import React, { useContext, useRef, useState } from "react";
// import { UserContext } from "../../context/UserContext";
// import { useNavigate } from "react-router-dom";
// import Interior from "../../assets/product-pg/Vector.png";
// import Home from "../../assets/product-pg/home.png";
// import Tree from "../../assets/product-pg/tree.png";
// import Lock from "../../assets/product-pg/lock.png";
// import Galley from "../../assets/product-pg/gallery.png";
// import I from "../../assets/product-pg/i.png";
// import Magic from "../../assets/product-pg/magic.png";

// export default function Form() {
//   const { userInfo } = useContext(UserContext);
//   const navigate = useNavigate();
//   const inpRef = useRef(null);

//   const [activeTab, setActiveTab] = useState("Interiors");
//   const [formData, setFormData] = useState({
//     buildingType: "",
//     roomType: "",
//     roomStyle: "",
//     noOfDesign: "1",
//     aiTouch: "Low",
//     houseAngle: "", // Added for exterior
//     spaceType: "", // Added for outdoor
//   });
//   const [imgURL, setImgURL] = useState(null);

//   const tabs = [
//     { name: "Interiors", icon: Interior },
//     { name: "Exteriors", icon: Home },
//     { name: "Outdoors", icon: Tree },
//     // { name: "Upgrade to Unlock", icon: Lock },
//   ];

//   // Updated options for each tab
//   const roomTypes = {
//     Interiors: [
//       "Living room",
//       "Bedroom",
//       "Kitchen",
//       "Home office",
//       "Dining room",
//       "Study room",
//       "Family room",
//       "Kid room",
//       "Balcony",
//     ],
//     Exteriors: ["Front side", "Back side", "Left side", "Right side"],
//     Outdoors: [
//       "Front Yard",
//       "Backyard",
//       "Balcony",
//       "Terrace/Rooftop",
//       "Driveway/Parking Area",
//       "Walkway/Path",
//       "Lounge",
//       "Porch",
//       "Fence",
//       "Garden",
//     ],
//   };

//   const styles = {
//     Interiors: [
//       "Classic",
//       "Modern",
//       "Minimal",
//       "Scandinavian",
//       "Contemporary",
//       "Industrial",
//       "Japandi",
//       "Bohemian (Boho)",
//       "Coastal",
//     ],
//     Exteriors: [
//       "Classic",
//       "Modern",
//       "Bohemian (Boho)",
//       "Coastal",
//       "International",
//       "Elephant",
//       "Stone clad",
//       "Glass house",
//       "Red brick",
//       "Painted brick",
//       "Wood accents",
//       "Industrial",
//     ],
//     Outdoors: [
//       "Modern",
//       "Contemporary",
//       "Traditional",
//       "Rustic",
//       "Scandinavian",
//       "Classic Garden",
//       "Coastal Outdoor",
//       "Farmhouse",
//       "Cottage Garden",
//       "Industrial",
//       "Beach",
//     ],
//   };

//   const changeImage = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const preview = URL.createObjectURL(file);
//       setImgURL(preview);
//     }
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     const file = e.dataTransfer.files[0];
//     if (file && file.type.startsWith("image/")) {
//       const preview = URL.createObjectURL(file);
//       setImgURL(preview);
//     } else {
//       alert("Please drop only image files.");
//     }
//   };

//   const handleChange = (value, key) => {
//     setFormData((prev) => {
//       return { ...prev, [key]: value };
//     });
//   };

//   const handleTabChange = (tabName) => {
//     if (tabName === "Upgrade to Unlock") {
//       alert("Please upgrade your account to access this feature");
//     } else {
//       setActiveTab(tabName);
//       // Reset relevant form fields when switching tabs
//       setFormData({
//         buildingType: "",
//         roomType: "",
//         roomStyle: "",
//         noOfDesign: "1",
//         aiTouch: "Low",
//         houseAngle: "",
//         spaceType: "",
//       });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!userInfo.userId) {
//       return navigate("/sign-in");
//     }

//     // Validate based on active tab
//     let isValid = false;
//     const commonFields =
//       formData.roomStyle && formData.noOfDesign && formData.aiTouch && imgURL;

//     if (activeTab === "Interiors") {
//       isValid = commonFields && formData.buildingType && formData.roomType;
//     } else if (activeTab === "Exteriors") {
//       isValid = commonFields && formData.roomType; // roomType used for house angle
//     } else if (activeTab === "Outdoors") {
//       isValid = commonFields && formData.roomType; // roomType used for space type
//     }

//     if (isValid) {
//       console.log("Form Data:", formData);
//       console.log("Image URL:", imgURL);
//       alert("Design generation started!");
//       // Reset form
//       setFormData({
//         buildingType: "",
//         roomType: "",
//         roomStyle: "",
//         noOfDesign: "1",
//         aiTouch: "Low",
//         houseAngle: "",
//         spaceType: "",
//       });
//       setImgURL(null);
//     } else {
//       alert("Please fill out all the required fields!");
//     }
//   };

//   const [isGenerating, setIsGenerating] = useState(false);
//   const [generatedDesigns, setGeneratedDesigns] = useState([]);
//   const [progress, setProgress] = useState(0);

//   const handleGenerate = async () => {
//     if (!imgURL) {
//       alert("Please upload an image first");
//       return;
//     }

//     setIsGenerating(true);
//     setProgress(0);
//     setGeneratedDesigns([]);

//     // Simulate backend processing with progress
//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         const newProgress = prev + 10;
//         if (newProgress >= 100) {
//           clearInterval(interval);
//           return 100;
//         }
//         return newProgress;
//       });
//     }, 300);

//     // Simulate API call
//     try {
//       // Replace with actual API call
//       await new Promise((resolve) => setTimeout(resolve, 3000));

//       // Mock generated designs
//       setGeneratedDesigns([
//         { id: 1, url: After },
//         { id: 2, url: After },
//         { id: 3, url: After },
//       ]);
//     } catch (error) {
//       console.error("Generation failed:", error);
//       alert("Design generation failed. Please try again.");
//     } finally {
//       clearInterval(interval);
//       setIsGenerating(false);
//     }
//   };
//   return (
//     <section className="w-full min-h-screen pb-[50px] px-6 sm:px-10 py-10 flex flex-col justify-start items-center gap-y-10 bg-gradient-to-l from-[#002628] to-[#00646A] overflow-hidden">
//       {/* Header */}
//       <div className="w-full max-w-4xl text-center space-y-2">
//         <h1 className="text-[clamp(2rem,5vw,3rem)] font-semibold text-white leading-snug">
//           Let AI Style It
//         </h1>
//         <p className="text-[clamp(1rem,2.5vw,1.5rem)] font-medium text-white leading-snug">
//           Upload a photo to begin your AI-powered {activeTab.toLowerCase()}{" "}
//           design
//         </p>
//       </div>

//       {/* Tabs */}
//       <div className="w-full max-w-6xl flex flex-wrap justify-center items-center gap-4">
//         {tabs.map((tab) => (
//           <div
//             key={tab.name}
//             className="w-[clamp(120px,15vw,200px)] max-w-[200px] h-[clamp(100px,12vh,128px)] flex flex-col justify-center items-center gap-2 cursor-pointer"
//             onClick={() => handleTabChange(tab.name)}
//           >
//             <div
//               className={`w-[clamp(60px,6vw,77px)] aspect-square border-2 p-2 flex justify-center items-center rounded-full transition-all duration-200 ${
//                 activeTab === tab.name
//                   ? "border-white bg-gradient-to-l from-[#00B0BA] via-[#000000] to-[#007B82]"
//                   : "border-[#FFFFFF1A] bg-[#FFFFFF1A] hover:border-blue-300"
//               }`}
//             >
//               <img
//                 src={tab.icon}
//                 alt={tab.name}
//                 className="w-full h-auto max-w-[60%] max-h-[60%] object-contain"
//               />
//             </div>
//             <p className="text-white text-[clamp(0.9rem,1.5vw,1.4rem)] font-semibold text-center">
//               {tab.name}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Form Section */}
//       <div className="w-full max-w-7xl flex flex-col xl:flex-row gap-10 items-start justify-between">
//         {/* Upload */}
//         <div className="w-full xl:w-1/2 max-w-xl flex flex-col items-center gap-4">
//           <div
//             className="w-full aspect-[4/3] max-h-[70vh] border-2 border-dashed border-white rounded-xl flex justify-center items-center cursor-pointer"
//             onClick={() => inpRef.current.click()}
//             onDragOver={handleDragOver}
//             onDrop={handleDrop}
//           >
//             {imgURL ? (
//               <>
//                 <img
//                   src={imgURL}
//                   alt="Preview"
//                   className="w-full h-full object-cover rounded-xl"
//                 />
//                 {/* Generation Overlay */}
//                 {isGenerating && (
//                   <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4">
//                     <div className="w-full max-w-[300px] bg-gray-200 rounded-full h-4 mb-4">
//                       <div
//                         className="bg-[#00B0BA] h-4 rounded-full"
//                         style={{ width: `${progress}%` }}
//                       ></div>
//                     </div>
//                     <p className="text-white text-lg">
//                       {progress < 100
//                         ? `Generating designs... ${progress}%`
//                         : "Finalizing your designs"}
//                     </p>
//                   </div>
//                 )}
//               </>
//             ) : (
//               <div className="w-[clamp(180px,25vw,280px)] flex flex-col items-center gap-2">
//                 <div className="w-[clamp(40px,5vw,70px)] aspect-square rounded-full p-2 bg-[#FFFFFF1A] flex justify-center items-center">
//                   <img src={Galley} alt="gallery" className="w-full h-auto" />
//                 </div>
//                 <p className="text-[#FFFFFFB2] text-center text-[clamp(0.9rem,2vw,1.5rem)] leading-snug">
//                   Drag & drop or click to upload a photo
//                 </p>
//               </div>
//             )}

//             {generatedDesigns.length > 0 && (
//               <div className="w-full mt-6">
//                 <h3 className="text-white text-xl mb-4">Generated Designs</h3>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                   {generatedDesigns.map((design) => (
//                     <div key={design.id} className="relative group">
//                       <img
//                         src={design.url}
//                         alt={`Generated design ${design.id}`}
//                         className="w-full h-auto rounded-lg border-2 border-white"
//                       />
//                       <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
//                         <button
//                           className="bg-white text-[#007B82] px-3 py-1 rounded-md"
//                           onClick={() => handleDownload(design.id)}
//                         >
//                           Download
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             <input
//               type="file"
//               ref={inpRef}
//               onChange={changeImage}
//               accept="image/*"
//               className="hidden"
//             />
//           </div>

//           <div className="w-[147px] h-[40px] rounded-[6px] border-[1.5px] border-solid border-white px-[10px] py-[8px] flex justify-around items-center cursor-pointer">
//             <div className="w-[24px] h-[24px]">
//               <img src={I} alt="i" />
//             </div>
//             <div className="w-[93px] h-[19px] text-[16px] font-[medium] leading-[100%] text-center text-white">
//               Photo guide
//             </div>
//           </div>
//         </div>
//         <button
//         onClick={handleGenerate}
//         disabled={isGenerating}
//         className={`w-full max-w-[899px] min-h-[67px] rounded-[8px] border border-[#FFFFFF4D] flex justify-center items-center ${
//           isGenerating ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'
//         }`}
//         style={{
//           backgroundImage: "linear-gradient(to right, #007c82 0%, rgb(4, 68, 75), rgb(3, 89, 94) 100%)"
//         }}
//       >
//         <div className="w-[200px] min-h-[35px] flex justify-center items-center gap-[10px] text-[20px] font-bold leading-[35px] tracking-[0.5px] text-center text-white">
//           <span>
//             <img src={Magic} alt="magic" />
//           </span>
//           {isGenerating ? 'Generating...' : 'Generate Design'}
//         </div>
//       </button>

//         {/* Form Controls */}
//         <form
//           onSubmit={handleSubmit}
//           className="w-full xl:w-1/2 max-w-xl flex flex-col gap-6"
//         >
//           {/* Building Type (only for Interior) */}
//           {activeTab === "Interiors" && (
//             <div className="space-y-2">
//               <label className="text-white text-lg">Choose Building Type</label>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 {["Commercial", "Residential"].map((type) => (
//                   <div
//                     key={type}
//                     className={`flex-1 flex justify-between items-center px-4 py-2 rounded-md cursor-pointer ${
//                       formData.buildingType === type
//                         ? "bg-white text-[#007B82]"
//                         : "bg-[#00000033] text-[#FFFFFF80]"
//                     }`}
//                     onClick={() => handleChange(type, "buildingType")}
//                   >
//                     <span>{type}</span>
//                     <input
//                       type="radio"
//                       checked={formData.buildingType === type}
//                       onChange={() => {}}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Room Type (dynamic label based on tab) */}
//           <div className="space-y-2">
//             <label className="text-white text-lg">
//               {activeTab === "Interiors"
//                 ? "Select Room Type"
//                 : activeTab === "Exteriors"
//                 ? "Select House Angle"
//                 : "Select Space"}
//             </label>
//             <select
//               name="roomType"
//               value={formData.roomType}
//               onChange={(e) => handleChange(e.target.value, "roomType")}
//               className="w-full p-3 rounded-md bg-white text-[#007B82] cursor-pointer"
//             >
//               <option value="">Select an option</option>
//               {roomTypes[activeTab].map((option) => (
//                 <option key={option} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Style Selection */}
//           <div className="space-y-2">
//             <label className="text-white text-lg">Pick a Style</label>
//             <select
//               name="roomStyle"
//               value={formData.roomStyle}
//               onChange={(e) => handleChange(e.target.value, "roomStyle")}
//               className="w-full p-3 rounded-md bg-white text-[#007B82] cursor-pointer"
//             >
//               <option value="">Select a style</option>
//               {styles[activeTab].map((option) => (
//                 <option key={option} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Number of designs */}
//           <div className="space-y-2">
//             <label className="text-white text-lg">Number of designs</label>
//             <select
//               name="noOfDesign"
//               value={formData.noOfDesign}
//               onChange={(e) => handleChange(e.target.value, "noOfDesign")}
//               className="w-full p-3 rounded-md bg-white text-[#007B82] cursor-pointer"
//             >
//               {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
//                 <option key={num} value={num}>
//                   {num}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* AI Strength */}
//           <div className="space-y-2">
//             <label className="text-white text-lg">AI Styling Strength</label>
//             <div className="flex flex-wrap gap-3">
//               {["Very Low", "Low", "Medium", "High"].map((level) => (
//                 <div
//                   key={level}
//                   className={`flex-1 min-w-[120px] px-4 py-2 rounded-md cursor-pointer text-center ${
//                     formData.aiTouch === level
//                       ? "bg-white text-[#007B82]"
//                       : "bg-[#00000033] text-[#FFFFFF80]"
//                   }`}
//                   onClick={() => handleChange(level, "aiTouch")}
//                 >
//                   {level}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </form>
//       </div>

//       {/* Generate Button */}
//       <div
//         className="w-full max-w-[899px] min-h-[67px] rounded-[8px] border border-[#FFFFFF4D] flex justify-center items-center cursor-pointer"
//         style={{
//           backgroundImage:
//             "linear-gradient(to right, #007c82 0%, rgb(4, 68, 75), rgb(3, 89, 94) 100%)",
//         }}
//       >
//         <button
//           type="button"
//           className="w-[200px] min-h-[35px] flex justify-center items-center gap-[10px] text-[20px] font-bold leading-[35px] tracking-[0.5px] text-center text-white"
//         >
//           <span>
//             <img src={Magic} alt="magic" />
//           </span>
//           Generate Design
//         </button>
//       </div>
//     </section>
//   );
// }


// import React, { useContext, useRef, useState } from "react";
// import { UserContext } from "../../context/UserContext";
// import { useNavigate } from "react-router-dom";
// import Interior from "../../assets/product-pg/Vector.png";
// import Home from "../../assets/product-pg/home.png";
// import Tree from "../../assets/product-pg/tree.png";
// import Lock from "../../assets/product-pg/lock.png";
// import Galley from "../../assets/product-pg/gallery.png";
// import I from "../../assets/product-pg/i.png";
// import Magic from "../../assets/product-pg/magic.png";
// import After from "../../assets/product-pg/After.png";

// export default function Form() {
//   const { userInfo } = useContext(UserContext);
//   const navigate = useNavigate();
//   const inpRef = useRef(null);

//   const [activeTab, setActiveTab] = useState("Interiors");
//   const [formData, setFormData] = useState({
//     buildingType: "",
//     roomType: "",
//     roomStyle: "",
//     noOfDesign: "1",
//     aiTouch: "Low",
//     houseAngle: "",
//     spaceType: "",
//   });
//   const [imgURL, setImgURL] = useState(null);
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [generatedDesigns, setGeneratedDesigns] = useState([]);
//   const [progress, setProgress] = useState(0);

//   const tabs = [
//     { name: "Interiors", icon: Interior },
//     { name: "Exteriors", icon: Home },
//     { name: "Outdoors", icon: Tree },
//   ];

//   const roomTypes = {
//     Interiors: [
//       "Living room",
//       "Bedroom",
//       "Kitchen",
//       "Home office",
//       "Dining room",
//       "Study room",
//       "Family room",
//       "Kid room",
//       "Balcony",
//     ],
//     Exteriors: ["Front side", "Back side", "Left side", "Right side"],
//     Outdoors: [
//       "Front Yard",
//       "Backyard",
//       "Balcony",
//       "Terrace/Rooftop",
//       "Driveway/Parking Area",
//       "Walkway/Path",
//       "Lounge",
//       "Porch",
//       "Fence",
//       "Garden",
//     ],
//   };

//   const styles = {
//     Interiors: [
//       "Classic",
//       "Modern",
//       "Minimal",
//       "Scandinavian",
//       "Contemporary",
//       "Industrial",
//       "Japandi",
//       "Bohemian (Boho)",
//       "Coastal",
//     ],
//     Exteriors: [
//       "Classic",
//       "Modern",
//       "Bohemian (Boho)",
//       "Coastal",
//       "International",
//       "Elephant",
//       "Stone clad",
//       "Glass house",
//       "Red brick",
//       "Painted brick",
//       "Wood accents",
//       "Industrial",
//     ],
//     Outdoors: [
//       "Modern",
//       "Contemporary",
//       "Traditional",
//       "Rustic",
//       "Scandinavian",
//       "Classic Garden",
//       "Coastal Outdoor",
//       "Farmhouse",
//       "Cottage Garden",
//       "Industrial",
//       "Beach",
//     ],
//   };

//   const changeImage = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const preview = URL.createObjectURL(file);
//       setImgURL(preview);
//     }
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     const file = e.dataTransfer.files[0];
//     if (file && file.type.startsWith("image/")) {
//       const preview = URL.createObjectURL(file);
//       setImgURL(preview);
//     } else {
//       alert("Please drop only image files.");
//     }
//   };

//   const handleChange = (value, key) => {
//     setFormData((prev) => {
//       return { ...prev, [key]: value };
//     });
//   };

//   const handleTabChange = (tabName) => {
//     if (tabName === "Upgrade to Unlock") {
//       alert("Please upgrade your account to access this feature");
//     } else {
//       setActiveTab(tabName);
//       setFormData({
//         buildingType: "",
//         roomType: "",
//         roomStyle: "",
//         noOfDesign: "1",
//         aiTouch: "Low",
//         houseAngle: "",
//         spaceType: "",
//       });
//     }
//   };

//   const handleGenerate = async () => {
//     if (!imgURL) {
//       alert("Please upload an image first");
//       return;
//     }

//     setIsGenerating(true);
//     setProgress(0);
//     setGeneratedDesigns([]);

//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         const newProgress = prev + 10;
//         if (newProgress >= 100) {
//           clearInterval(interval);
//           return 100;
//         }
//         return newProgress;
//       });
//     }, 300);

//     try {
//       await new Promise((resolve) => setTimeout(resolve, 3000));
//       setGeneratedDesigns([
//         { id: 1, url: After },
//         { id: 2, url: After },
//         { id: 3, url: After },
//       ]);
//     } catch (error) {
//       console.error("Generation failed:", error);
//       alert("Design generation failed. Please try again.");
//     } finally {
//       clearInterval(interval);
//       setIsGenerating(false);
//     }
//   };

//   const handleDownload = (id) => {
//     console.log(`Downloading design ${id}`);
//     alert(`Design ${id} download started`);
//   };

//   return (
//     <section className="w-full min-h-screen pb-[50px] px-6 sm:px-10 py-10 flex flex-col justify-start items-center gap-y-10 bg-gradient-to-l from-[#002628] to-[#00646A] overflow-hidden">
//       {/* Header */}
//       <div className="w-full max-w-4xl text-center space-y-2">
//         <h1 className="text-[clamp(2rem,5vw,3rem)] font-semibold text-white leading-snug">
//           Let AI Style It
//         </h1>
//         <p className="text-[clamp(1rem,2.5vw,1.5rem)] font-medium text-white leading-snug">
//           Upload a photo to begin your AI-powered {activeTab.toLowerCase()}{" "}
//           design
//         </p>
//       </div>

//       {/* Tabs */}
//       <div className="w-full max-w-6xl flex flex-wrap justify-center items-center gap-4">
//         {tabs.map((tab) => (
//           <div
//             key={tab.name}
//             className="w-[clamp(120px,15vw,200px)] max-w-[200px] h-[clamp(100px,12vh,128px)] flex flex-col justify-center items-center gap-2 cursor-pointer"
//             onClick={() => handleTabChange(tab.name)}
//           >
//             <div
//               className={`w-[clamp(60px,6vw,77px)] aspect-square border-2 p-2 flex justify-center items-center rounded-full transition-all duration-200 ${
//                 activeTab === tab.name
//                   ? "border-white bg-gradient-to-l from-[#00B0BA] via-[#000000] to-[#007B82]"
//                   : "border-[#FFFFFF1A] bg-[#FFFFFF1A] hover:border-blue-300"
//               }`}
//             >
//               <img
//                 src={tab.icon}
//                 alt={tab.name}
//                 className="w-full h-auto max-w-[60%] max-h-[60%] object-contain"
//               />
//             </div>
//             <p className="text-white text-[clamp(0.9rem,1.5vw,1.4rem)] font-semibold text-center">
//               {tab.name}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Form Section */}
//       <div className="w-full max-w-7xl flex flex-col xl:flex-row gap-10 items-start justify-between">
//         {/* Upload */}
//         <div className="w-full xl:w-1/2 max-w-xl flex flex-col items-center gap-4">
//           <div
//             className="w-full aspect-[4/3] max-h-[70vh] border-2 border-dashed border-white rounded-xl flex justify-center items-center cursor-pointer relative"
//             onClick={() => inpRef.current.click()}
//             onDragOver={handleDragOver}
//             onDrop={handleDrop}
//           >
//             {imgURL ? (
//               <>
//                 <img
//                   src={imgURL}
//                   alt="Preview"
//                   className="w-full h-full object-cover rounded-xl"
//                 />
//                 {isGenerating && (
//                   <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4">
//                     <div className="w-full max-w-[300px] bg-gray-200 rounded-full h-4 mb-4">
//                       <div
//                         className="bg-[#00B0BA] h-4 rounded-full"
//                         style={{ width: `${progress}%` }}
//                       ></div>
//                     </div>
//                     <p className="text-white text-lg">
//                       {progress < 100
//                         ? `Generating designs... ${progress}%`
//                         : "Finalizing your designs"}
//                     </p>
//                   </div>
//                 )}
//               </>
//             ) : (
//               <div className="w-[clamp(180px,25vw,280px)] flex flex-col items-center gap-2">
//                 <div className="w-[clamp(40px,5vw,70px)] aspect-square rounded-full p-2 bg-[#FFFFFF1A] flex justify-center items-center">
//                   <img src={Galley} alt="gallery" className="w-full h-auto" />
//                 </div>
//                 <p className="text-[#FFFFFFB2] text-center text-[clamp(0.9rem,2vw,1.5rem)] leading-snug">
//                   Drag & drop or click to upload a photo
//                 </p>
//               </div>
//             )}
//             <input
//               type="file"
//               ref={inpRef}
//               onChange={changeImage}
//               accept="image/*"
//               className="hidden"
//             />
//           </div>

//           {/* Generated Designs */}
//           {generatedDesigns.length > 0 && (
//             <div className="w-full mt-4">
//               <h3 className="text-white text-xl mb-4">Generated Designs</h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                 {generatedDesigns.map((design) => (
//                   <div key={design.id} className="relative group">
//                     <img
//                       src={design.url}
//                       alt={`Generated design ${design.id}`}
//                       className="w-full h-auto rounded-lg border-2 border-white"
//                     />
//                     <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
//                       <button
//                         className="bg-white text-[#007B82] px-3 py-1 rounded-md"
//                         onClick={() => handleDownload(design.id)}
//                       >
//                         Download
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           <div className="w-[147px] h-[40px] rounded-[6px] border-[1.5px] border-solid border-white px-[10px] py-[8px] flex justify-around items-center cursor-pointer">
//             <div className="w-[24px] h-[24px]">
//               <img src={I} alt="i" />
//             </div>
//             <div className="w-[93px] h-[19px] text-[16px] font-[medium] leading-[100%] text-center text-white">
//               Photo guide
//             </div>
//           </div>
//         </div>

//         {/* Form Controls */}
//         <form className="w-full xl:w-1/2 max-w-xl flex flex-col gap-6">
//           {/* Building Type (only for Interior) */}
//           {activeTab === "Interiors" && (
//             <div className="space-y-2">
//               <label className="text-white text-lg">Choose Building Type</label>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 {["Commercial", "Residential"].map((type) => (
//                   <div
//                     key={type}
//                     className={`flex-1 flex justify-between items-center px-4 py-2 rounded-md cursor-pointer ${
//                       formData.buildingType === type
//                         ? "bg-white text-[#007B82]"
//                         : "bg-[#00000033] text-[#FFFFFF80]"
//                     }`}
//                     onClick={() => handleChange(type, "buildingType")}
//                   >
//                     <span>{type}</span>
//                     <input
//                       type="radio"
//                       checked={formData.buildingType === type}
//                       onChange={() => {}}
//                       className="hidden"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Room Type */}
//           <div className="space-y-2">
//             <label className="text-white text-lg">
//               {activeTab === "Interiors"
//                 ? "Select Room Type"
//                 : activeTab === "Exteriors"
//                 ? "Select House Angle"
//                 : "Select Space"}
//             </label>
//             <select
//               value={formData.roomType}
//               onChange={(e) => handleChange(e.target.value, "roomType")}
//               className="w-full p-3 rounded-md bg-white text-[#007B82] cursor-pointer"
//             >
//               <option value="">Select an option</option>
//               {roomTypes[activeTab].map((option) => (
//                 <option key={option} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Style Selection */}
//           <div className="space-y-2">
//             <label className="text-white text-lg">Pick a Style</label>
//             <select
//               value={formData.roomStyle}
//               onChange={(e) => handleChange(e.target.value, "roomStyle")}
//               className="w-full p-3 rounded-md bg-white text-[#007B82] cursor-pointer"
//             >
//               <option value="">Select a style</option>
//               {styles[activeTab].map((option) => (
//                 <option key={option} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Number of designs */}
//           <div className="space-y-2">
//             <label className="text-white text-lg">Number of designs</label>
//             <select
//               value={formData.noOfDesign}
//               onChange={(e) => handleChange(e.target.value, "noOfDesign")}
//               className="w-full p-3 rounded-md bg-white text-[#007B82] cursor-pointer"
//             >
//               {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
//                 <option key={num} value={num}>
//                   {num}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* AI Strength */}
//           <div className="space-y-2">
//             <label className="text-white text-lg">AI Styling Strength</label>
//             <div className="flex flex-wrap gap-3">
//               {["Very Low", "Low", "Medium", "High"].map((level) => (
//                 <div
//                   key={level}
//                   className={`flex-1 min-w-[120px] px-4 py-2 rounded-md cursor-pointer text-center ${
//                     formData.aiTouch === level
//                       ? "bg-white text-[#007B82]"
//                       : "bg-[#00000033] text-[#FFFFFF80]"
//                   }`}
//                   onClick={() => handleChange(level, "aiTouch")}
//                 >
//                   {level}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </form>
//       </div>

//       {/* Generate Button */}
//       <button
//         onClick={handleGenerate}
//         disabled={isGenerating}
//         className={`w-full max-w-[899px] min-h-[67px] rounded-[8px] border border-[#FFFFFF4D] flex justify-center items-center ${
//           isGenerating ? "opacity-70 cursor-not-allowed" : "cursor-pointer"
//         }`}
//         style={{
//           backgroundImage:
//             "linear-gradient(to right, #007c82 0%, rgb(4, 68, 75), rgb(3, 89, 94) 100%)",
//         }}
//       >
//         <div className="w-[200px] min-h-[35px] flex justify-center items-center gap-[10px] text-[20px] font-bold leading-[35px] tracking-[0.5px] text-center text-white">
//           <span>
//             <img src={Magic} alt="magic" />
//           </span>
//           {isGenerating ? "Generating..." : "Generate Design"}
//         </div>
//       </button>
//     </section>
//   );
// }

// import React, { useContext, useRef, useState } from "react";
// import { UserContext } from "../../context/UserContext";
// import { useNavigate } from "react-router-dom";
// import Interior from "../../assets/product-pg/Vector.png";
// import Home from "../../assets/product-pg/home.png";
// import Tree from "../../assets/product-pg/tree.png";
// import Galley from "../../assets/product-pg/gallery.png";
// import I from "../../assets/product-pg/i.png";
// import Magic from "../../assets/product-pg/magic.png";
// import After from "../../assets/product-pg/After.png";

// export default function Form() {
//   // ... existing state and other functions ...

//   const handleGenerate = async () => {
//     if (!imgURL) {
//       alert("Please upload an image first");
//       return;
//     }

//     setIsGenerating(true);
//     setProgress(0);
//     setGeneratedDesigns([]);

//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         const newProgress = Math.min(prev + Math.floor(Math.random() * 15) + 5, 100);
//         if (newProgress >= 100) {
//           clearInterval(interval);
//           return 100;
//         }
//         return newProgress;
//       });
//     }, 500);

//     try {
//       await new Promise((resolve) => setTimeout(resolve, 3000));
//       setGeneratedDesigns([
//         { id: 1, url: After },
//         { id: 2, url: After },
//         { id: 3, url: After },
//       ]);
//     } catch (error) {
//       console.error("Generation failed:", error);
//       alert("Design generation failed. Please try again.");
//     } finally {
//       clearInterval(interval);
//       setIsGenerating(false);
//     }
//   };

//   return (
//     <section className="w-full min-h-screen pb-[50px] px-6 sm:px-10 py-10 flex flex-col justify-start items-center gap-y-10 bg-gradient-to-l from-[#002628] to-[#00646A] overflow-hidden">
//       {/* ... existing header and tabs ... */}

//       {/* Upload Area */}
//       <div className="w-full xl:w-1/2 max-w-xl flex flex-col items-center gap-4">
//         <div
//           className="w-full aspect-[4/3] max-h-[70vh] border-2 border-dashed border-white rounded-xl flex justify-center items-center cursor-pointer relative"
//           onClick={() => inpRef.current.click()}
//           onDragOver={handleDragOver}
//           onDrop={handleDrop}
//         >
//           {imgURL ? (
//             <>
//               <img
//                 src={imgURL}
//                 alt="Preview"
//                 className="w-full h-full object-cover rounded-xl"
//               />
//               {isGenerating && (
//                 <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4">
//                   <div className="relative w-24 h-24 mb-4">
//                     <svg className="w-full h-full" viewBox="0 0 100 100">
//                       <circle
//                         cx="50"
//                         cy="50"
//                         r="45"
//                         fill="none"
//                         stroke="#FFFFFF20"
//                         strokeWidth="8"
//                       />
//                       <circle
//                         cx="50"
//                         cy="50"
//                         r="45"
//                         fill="none"
//                         stroke="#00B0BA"
//                         strokeWidth="8"
//                         strokeLinecap="round"
//                         strokeDasharray="283"
//                         strokeDashoffset={283 - (283 * progress) / 100}
//                         transform="rotate(-90 50 50)"
//                       />
//                     </svg>
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <span className="text-white text-xl font-bold">
//                         {progress}%
//                       </span>
//                     </div>
//                   </div>
//                   <p className="text-white text-lg text-center">
//                     {progress < 100 
//                       ? 'AI is styling your space' 
//                       : 'Finalizing designs...'}
//                   </p>
//                 </div>
//               )}
//             </>
//           ) : (
//             // ... existing upload prompt ...
//           )}
//           <input
//             type="file"
//             ref={inpRef}
//             onChange={changeImage}
//             accept="image/*"
//             className="hidden"
//           />
//         </div>

//         {/* ... generated designs and photo guide button ... */}
//       </div>

//       {/* ... rest of the component ... */}
//     </section>
//   );
// }
 

// loading functions above working

import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import Interior from "../../assets/product-pg/Vector.png";
import Home from "../../assets/product-pg/home.png";
import Tree from "../../assets/product-pg/tree.png";
import Lock from "../../assets/product-pg/lock.png";
import Galley from "../../assets/product-pg/gallery.png";
import I from "../../assets/product-pg/i.png";
import Magic from "../../assets/product-pg/magic.png";
import After from "../../assets/product-pg/After.png";

export default function Form() {
  const { userInfo } = useContext(UserContext);
  const navigate = useNavigate();
  const inpRef = useRef(null);

  const [activeTab, setActiveTab] = useState("Interiors");
  const [formData, setFormData] = useState({
    buildingType: "",
    roomType: "",
    roomStyle: "",
    noOfDesign: "1",
    aiTouch: "Low",
    houseAngle: "",
    spaceType: "",
  });
  const [imgURL, setImgURL] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedDesigns, setGeneratedDesigns] = useState([]);
  const [progress, setProgress] = useState(0);

  const tabs = [
    { name: "Interiors", icon: Interior },
    { name: "Exteriors", icon: Home },
    { name: "Outdoors", icon: Tree },
  ];

  const roomTypes = {
    Interiors: ["Living Room", "Bedroom", "Kitchen", "Bathroom", "Dining Room", "Home Office"],
    Exteriors: ["Front View", "Back View", "Side View", "Aerial View"],
    Outdoors: ["Garden", "Patio", "Deck", "Pool Area", "Backyard"]
  };

  const styles = {
    Interiors: ["Modern", "Contemporary", "Minimalist", "Industrial", "Scandinavian"],
    Exteriors: ["Modern", "Traditional", "Farmhouse", "Mediterranean"],
    Outdoors: ["Modern", "Rustic", "Tropical", "Japanese Zen"]
  };

  const changeImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setImgURL(preview);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const preview = URL.createObjectURL(file);
      setImgURL(preview);
    } else {
      alert("Please drop only image files.");
    }
  };

  const handleChange = (value, key) => {
    setFormData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const handleTabChange = (tabName) => {
    if (tabName === "Upgrade to Unlock") {
      alert("Please upgrade your account to access this feature");
    } else {
      setActiveTab(tabName);
      setFormData({
        buildingType: "",
        roomType: "",
        roomStyle: "",
        noOfDesign: "1",
        aiTouch: "Low",
        houseAngle: "",
        spaceType: "",
      });
    }
  };

  const handleGenerate = async () => {
    if (!imgURL) {
      alert("Please upload an image first");
      return;
    }

    setIsGenerating(true);
    setProgress(0);
    setGeneratedDesigns([]);

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = Math.min(
          prev + Math.floor(Math.random() * 15) + 5,
          100
        );
        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });
    }, 500);

    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setGeneratedDesigns([
        { id: 1, url: After },
        { id: 2, url: After },
        { id: 3, url: After },
      ]);
    } catch (error) {
      console.error("Generation failed:", error);
      alert("Design generation failed. Please try again.");
    } finally {
      clearInterval(interval);
      setIsGenerating(false);
    }
  };

  const handleDownload = (id) => {
    console.log(`Downloading design ${id}`);
    alert(`Design ${id} download started`);
  };

  return (
    <section className="w-full min-h-screen pb-[50px] px-6 sm:px-10 py-10 flex flex-col justify-start items-center gap-y-10 bg-gradient-to-l from-[#002628] to-[#00646A] overflow-hidden">
      {/* Header */}
      <div className="w-full max-w-4xl text-center space-y-2">
        <h1 className="text-[clamp(2rem,5vw,3rem)] font-semibold text-white leading-snug">
          Let AI Style It
        </h1>
        <p className="text-[clamp(1rem,2.5vw,1.5rem)] font-medium text-white leading-snug">
          Upload a photo to begin your AI-powered {activeTab.toLowerCase()} design
        </p>
      </div>

      {/* Tabs */}
      <div className="w-full max-w-6xl flex flex-wrap justify-center items-center gap-4">
        {tabs.map((tab) => (
          <div
            key={tab.name}
            className="w-[clamp(120px,15vw,200px)] max-w-[200px] h-[clamp(100px,12vh,128px)] flex flex-col justify-center items-center gap-2 cursor-pointer"
            onClick={() => handleTabChange(tab.name)}
          >
            <div
              className={`w-[clamp(60px,6vw,77px)] aspect-square border-2 p-2 flex justify-center items-center rounded-full transition-all duration-200 ${
                activeTab === tab.name
                  ? "border-white bg-gradient-to-l from-[#00B0BA] via-[#000000] to-[#007B82]"
                  : "border-[#FFFFFF1A] bg-[#FFFFFF1A] hover:border-blue-300"
              }`}
            >
              <img
                src={tab.icon}
                alt={tab.name}
                className="w-full h-auto max-w-[60%] max-h-[60%] object-contain"
              />
            </div>
            <p className="text-white text-[clamp(0.9rem,1.5vw,1.4rem)] font-semibold text-center">
              {tab.name}
            </p>
          </div>
        ))}
      </div>

      {/* Form Section */}
      <div className="w-full max-w-7xl flex flex-col xl:flex-row gap-10 items-start justify-between">
        {/* Upload */}
        <div className="w-full xl:w-1/2 max-w-xl flex flex-col items-center gap-4">
          <div
            className="w-full aspect-[4/3] max-h-[70vh] border-2 border-dashed border-white rounded-xl flex justify-center items-center cursor-pointer relative"
            onClick={() => inpRef.current.click()}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            {imgURL ? (
              <>
                <img
                  src={imgURL}
                  alt="Preview"
                  className="w-full h-full object-cover rounded-xl"
                />
                {isGenerating && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4">
                    <div className="relative w-24 h-24 mb-4">
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke="#FFFFFF20"
                          strokeWidth="8"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke="#00B0BA"
                          strokeWidth="8"
                          strokeLinecap="round"
                          strokeDasharray="283"
                          strokeDashoffset={283 - (283 * progress) / 100}
                          transform="rotate(-90 50 50)"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white text-xl font-bold">
                          {progress}%
                        </span>
                      </div>
                    </div>
                    <p className="text-white text-lg text-center">
                      {progress < 100
                        ? "AI is styling your space"
                        : "Finalizing designs..."}
                    </p>
                  </div>
                )}
              </>
            ) : (
              <div className="w-[clamp(180px,25vw,280px)] flex flex-col items-center gap-2">
                <div className="w-[clamp(40px,5vw,70px)] aspect-square rounded-full p-2 bg-[#FFFFFF1A] flex justify-center items-center">
                  <img src={Galley} alt="gallery" className="w-full h-auto" />
                </div>
                <p className="text-[#FFFFFFB2] text-center text-[clamp(0.9rem,2vw,1.5rem)] leading-snug">
                  Drag & drop or click to upload a photo
                </p>
              </div>
            )}
            <input
              type="file"
              ref={inpRef}
              onChange={changeImage}
              accept="image/*"
              className="hidden"
            />
          </div>

          {/* Generated Designs */}
          {generatedDesigns.length > 0 && (
            <div className="w-full mt-4">
              <h3 className="text-white text-xl mb-4">Generated Designs</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {generatedDesigns.map((design) => (
                  <div key={design.id} className="relative group">
                    <img
                      src={design.url}
                      alt={`Generated design ${design.id}`}
                      className="w-full h-auto rounded-lg border-2 border-white"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                      <button
                        className="bg-white text-[#007B82] px-3 py-1 rounded-md"
                        onClick={() => handleDownload(design.id)}
                      >
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="w-[147px] h-[40px] rounded-[6px] border-[1.5px] border-solid border-white px-[10px] py-[8px] flex justify-around items-center cursor-pointer">
            <div className="w-[24px] h-[24px]">
              <img src={I} alt="i" />
            </div>
            <div className="w-[93px] h-[19px] text-[16px] font-[medium] leading-[100%] text-center text-white">
              Photo guide
            </div>
          </div>
        </div>

        {/* Form Controls */}
        <form className="w-full xl:w-1/2 max-w-xl flex flex-col gap-6">
          {/* Building Type (only for Interior) */}
          {activeTab === "Interiors" && (
            <div className="space-y-2">
              <label className="text-white text-lg">Choose Building Type</label>
              <div className="flex flex-col sm:flex-row gap-4">
                {["Commercial", "Residential"].map((type) => (
                  <div
                    key={type}
                    className={`flex-1 flex justify-between items-center px-4 py-2 rounded-md cursor-pointer ${
                      formData.buildingType === type
                        ? "bg-white text-[#007B82]"
                        : "bg-[#00000033] text-[#FFFFFF80]"
                    }`}
                    onClick={() => handleChange(type, "buildingType")}
                  >
                    <span>{type}</span>
                    <input
                      type="radio"
                      checked={formData.buildingType === type}
                      onChange={() => {}}
                      className="hidden"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Room Type */}
          <div className="space-y-2">
            <label className="text-white text-lg">
              {activeTab === "Interiors"
                ? "Select Room Type"
                : activeTab === "Exteriors"
                ? "Select House Angle"
                : "Select Space"}
            </label>
            <select
              value={formData.roomType}
              onChange={(e) => handleChange(e.target.value, "roomType")}
              className="w-full p-3 rounded-md bg-white text-[#007B82] cursor-pointer"
            >
              <option value="">Select an option</option>
              {roomTypes[activeTab].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Style Selection */}
          <div className="space-y-2">
            <label className="text-white text-lg">Pick a Style</label>
            <select
              value={formData.roomStyle}
              onChange={(e) => handleChange(e.target.value, "roomStyle")}
              className="w-full p-3 rounded-md bg-white text-[#007B82] cursor-pointer"
            >
              <option value="">Select a style</option>
              {styles[activeTab].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Number of designs */}
          <div className="space-y-2">
            <label className="text-white text-lg">Number of designs</label>
            <select
              value={formData.noOfDesign}
              onChange={(e) => handleChange(e.target.value, "noOfDesign")}
              className="w-full p-3 rounded-md bg-white text-[#007B82] cursor-pointer"
            >
              {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          {/* AI Strength */}
          <div className="space-y-2">
            <label className="text-white text-lg">AI Styling Strength</label>
            <div className="flex flex-wrap gap-3">
              {["Very Low", "Low", "Medium", "High"].map((level) => (
                <div
                  key={level}
                  className={`flex-1 min-w-[120px] px-4 py-2 rounded-md cursor-pointer text-center ${
                    formData.aiTouch === level
                      ? "bg-white text-[#007B82]"
                      : "bg-[#00000033] text-[#FFFFFF80]"
                  }`}
                  onClick={() => handleChange(level, "aiTouch")}
                >
                  {level}
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>

      {/* Generate Button */}
      <button
        onClick={handleGenerate}
        disabled={isGenerating}
        className={`w-full max-w-[899px] min-h-[67px] rounded-[8px] border border-[#FFFFFF4D] flex justify-center items-center ${
          isGenerating ? "opacity-70 cursor-not-allowed" : "cursor-pointer"
        }`}
        style={{
          backgroundImage:
            "linear-gradient(to right, #007c82 0%, rgb(4, 68, 75), rgb(3, 89, 94) 100%)",
        }}
      >
        <div className="w-[200px] min-h-[35px] flex justify-center items-center gap-[10px] text-[20px] font-bold leading-[35px] tracking-[0.5px] text-center text-white">
          <span>
            <img src={Magic} alt="magic" />
          </span>
          {isGenerating ? "Generating..." : "Generate Design"}
        </div>
      </button>
    </section>
  );
}