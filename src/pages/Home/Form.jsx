
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
  });
  const [imgURL, setImgURL] = useState(null);

  const tabs = [
    { name: "Interiors", icon: Interior },
    { name: "Exteriors", icon: Home },
    { name: "Outdoors", icon: Tree },
    { name: "Upgrade to Unlock", icon: Lock },
  ];

  const roomTypes = {
    Interiors: [
      "Living room",
      "Bedroom",
      "Kitchen",
      "Dining Room",
      "Study Room",
      "Home Office",
      "Family Room",
      "Kids Room",
      "Balcony",
    ],
    Exteriors: [
      "Front Yard",
      "Backyard",
      "Garden",
      "Patio",
      "Deck",
      "Pool Area",
      "Driveway",
    ],
    Outdoors: [
      "Park",
      "Camping Site",
      "Beach",
      "Mountain View",
      "Forest",
      "Lake Side",
    ],
  };

  const styles = [
    "Modern",
    "Tropical",
    "Rustic",
    "Tribal",
    "Cyberpunk",
    "Zen",
    "Japanese Design",
    "Biophilic",
    "Christmas",
    "Bohemian",
    "Contemporary",
    "Maximalist",
    "Vintage",
    "Baroque",
    "Farmhouse",
    "Minimalist",
    "Gaming Room",
    "French Country",
    "Art Deco",
    "Art Nouveau",
    "Halloween",
    "Ski Chalet",
    "Sketch",
    "Scandinavian",
    "Industrial",
    "Neoclassic",
    "Medieval",
    "Shabby Chic",
    "Eclectic",
    "Asian Traditional",
    "Hollywood Glam",
    "Western Traditional",
    "Transitional",
  ];

  const changeImage = (e) => {
    // if (!userInfo.userId) {
    //   return navigate("/sign-in");
    // }
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
    // if (!userInfo.userId) {
    //   return navigate("/sign-in");
    // }
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userInfo.userId) {
      return navigate("/sign-in");
    }
    if (
      formData.aiTouch &&
      formData.noOfDesign &&
      formData.roomStyle &&
      formData.roomType &&
      formData.buildingType &&
      imgURL
    ) {
      console.log("Form Data:", formData);
      console.log("Image URL:", imgURL);
      // Here you would typically send the data to your backend
      alert("Design generation started!");
      // Reset form
      setFormData({
        buildingType: "",
        roomType: "",
        roomStyle: "",
        noOfDesign: "1",
        aiTouch: "Low",
      });
      setImgURL(null);
    } else {
      alert("Please fill out all the fields!");
    }
  };
  


  return (
  

   <section className="w-[full] max-w-[full] min-h-[1216px] px-[86px] py-[68px] flex flex-col justify-start items-center gap-[40px] bg-gradient-to-l from-[#002628] to-[#00646A]">
      <div className="max-w-[1268px] min-h-[113px]">
        <div className="max-w-[1268px] min-h-[67px] font-semibold text-[48px] leading-[140%] text-center text-white">
          Let AI Style It
        </div>
        <div className="max-w-[1268px] min-h-[34px] font-semibold text-[24px] leading-[140%] text-center text-white">
          Upload a photo to begin your AI-powered room design
        </div>
      </div>

      <div className="max-w-[1268px] min-h-[150px] flex flex-col items-center justify-start">
        <div className="max-w-[920px] min-h-[128px] flex justify-center items-center gap-[40px] flex-wrap">
          {tabs.map((tab) => (
            <div
              key={tab.name}
              className="w-[200px] h-[128px] flex flex-col justify-center items-center gap-[20px] cursor-pointer"
              onClick={() => {
                if (tab.name === "Upgrade to Unlock") {
                  alert("Please upgrade your account to access this feature");
                } else {
                  setActiveTab(tab.name);
                  setFormData((prev) => ({
                    ...prev,
                    roomType: "",
                    buildingType: "",
                  }));
                }
              }}
            >
              <div
                className={`w-[80px] h-[77px] border-[2px] px-[20px] py-[24px] flex justify-center items-center gap-[10px] rounded-[90px] transition-all duration-200 ${
                  activeTab === tab.name
                    ? "border-white bg-gradient-to-l from-[#00B0BA] via-[#000000] to-[#007B82]"
                    : "border-[#FFFFFF1A] bg-[#FFFFFF1A] hover:border-blue-300"
                }`}
              >
                <img src={tab.icon} alt={tab.name} />
              </div>
              <div className="max-w-[200px] min-h-[31px] text-[22px] font-semibold leading-[140%] text-center text-white">
                {tab.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1068px] min-h-[727px] flex flex-col justify-start items-center gap-[56px] ">
        <form
          onSubmit={handleSubmit}
          className="max-w-[1668px] min-h-[604px] flex justify-around items-center gap-[82px] flex-wrap"
        >
          <div className="max-w-[500px] min-h-[604px] flex flex-col justify-center items-center gap-[12px]">
            <div
              className="w-[550px] min-h-[552px] rounded-[12px] border-[1px] border-dashed border-white flex justify-center items-center cursor-pointer"
              onClick={() => inpRef.current.click()}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              {imgURL ? (
                <img
                  src={imgURL}
                  alt="Preview"
                  className="w-full h-full object-cover rounded-[12px]"
                />
              ) : (
                <div className="w-[280px] min-h-[133px] flex flex-col justify-center items-center">
                  <div className="w-[70px] h-[70px] rounded-[40px] px-[18px] py-[16px] rouned-[40px] bg-[#FFFFFF1A] flex justify-center items-center">
                    <img src={Galley} alt="gallery" />
                  </div>
                  <div className="w-[280px] h-[68px] font-[400] text-[24px] leading-[140%] text-center text-[#FFFFFFB2]">
                    Drag & drop or click to upload a photo
                  </div>
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

            <div className="w-[147px] h-[40px] rounded-[6px] border-[1.5px] border-solid border-white px-[10px] py-[8px] flex justify-around items-center cursor-pointer">
              <div className="w-[24px] h-[24px]">
                <img src={I} alt="i" />
              </div>
              <div className="w-[93px] h-[19px] text-[16px] font-[medium] leading-[100%] text-center text-white">
                Photo guide
              </div>
            </div>
          </div>

          <div className="w-[400px] h-[604px] flex flex-col items-start justify-start gap-[52px]">
            <div className="w-[550px] min-h-[411px] flex flex-col items-center justify-start gap-[31px]">
              <div className="w-[550px] min-h-[81px] flex flex-col justify-start items-center gap-[12px]">
                <div className="w-[550px] min-h-[27px] font-[400] text-[19px] leading-[140%] text-white">
                  Choose Building Type
                </div>
                <div className="w-[100%] max-w-[550px] min-h-[42px] flex justify-between items-center">
                  <div
                    className={`w-full max-w-[255px] min-h-[42px] rounded-[4px] flex justify-between items-center px-[20px] cursor-pointer ${
                      formData.buildingType === "Commercial"
                        ? "bg-white"
                        : "bg-[#00000033]"
                    }`}
                    onClick={() => handleChange("Commercial", "buildingType")}
                  >
                    <span
                      className={`w-[92px] min-h-[22px] font-medium text-[16px] leading-[140%] text-center ${
                        formData.buildingType === "Commercial"
                          ? "text-[#007B82]"
                          : "text-[#FFFFFF80]"
                      }`}
                    >
                      Commercial
                    </span>
                    <input
                      type="radio"
                      checked={formData.buildingType === "Commercial"}
                      onChange={() => {}}
                    />
                  </div>

                  <div
                    className={`w-full max-w-[255px] min-h-[42px] rounded-[4px] flex justify-between items-center px-[20px] cursor-pointer ${
                      formData.buildingType === "Residential"
                        ? "bg-white"
                        : "bg-[#00000033]"
                    }`}
                    onClick={() => handleChange("Residential", "buildingType")}
                  >
                    <span
                      className={`w-[92px] min-h-[22px] font-medium text-[16px] leading-[140%] text-center ${
                        formData.buildingType === "Residential"
                          ? "text-[#007B82]"
                          : "text-[#FFFFFF80]"
                      }`}
                    >
                      Residential
                    </span>
                    <input
                      type="radio"
                      checked={formData.buildingType === "Residential"}
                      onChange={() => {}}
                    />
                  </div>
                </div>
              </div>

              <div className="w-[550px] min-h-[81px] flex flex-col justify-start items-start gap-[12px]">
                <div className="w-[550px] min-h-[27px] font-[400] text-[19px] leading-[140%] text-white">
                  Select Room Type
                </div>
                <div className="w-full max-w-[550px] min-h-[42px] rounded-[4px] bg-white flex justify-between items-center px-[20px]">
                  <select
                    name="roomType"
                    value={formData.roomType}
                    onChange={(e) => handleChange(e.target.value, "roomType")}
                    className="w-[510px] h-[42px] cursor-pointer text-[#007B82]"
                  >
                    <option value="">Select room type</option>
                    {roomTypes[activeTab]?.map((room) => (
                      <option key={room} value={room}>
                        {room}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="w-[550px] min-h-[81px] flex flex-col justify-start items-start gap-[12px]">
                <div className="w-[550px] min-h-[27px] font-[400] text-[19px] leading-[140%] text-white">
                  Pick a Style
                </div>
                <div className="w-full max-w-[550px] min-h-[42px] rounded-[4px] bg-white flex justify-between items-center px-[20px]">
                  <select
                    name="roomStyle"
                    value={formData.roomStyle}
                    onChange={(e) => handleChange(e.target.value, "roomStyle")}
                    className="w-[510px] h-[42px] cursor-pointer text-[#007B82]"
                  >
                    <option value="">Select style</option>
                    {styles.map((style) => (
                      <option key={style} value={style}>
                        {style}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="w-[550px] min-h-[81px] flex flex-col justify-start items-start gap-[12px]">
                <div className="w-[550px] min-h-[27px] font-[400] text-[19px] leading-[140%] text-white">
                  Number of designs
                </div>
                <div className="w-full max-w-[550px] min-h-[42px] rounded-[4px] bg-white flex justify-between items-center px-[20px]">
                  <select
                    name="noOfDesign"
                    value={formData.noOfDesign}
                    onChange={(e) => handleChange(e.target.value, "noOfDesign")}
                    className="w-[510px] h-[42px] cursor-pointer text-[#007B82]"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="w-full max-w-[550px] min-h-[141px] flex flex-col justify-start items-start gap-[12px]">
              <div className="w-[550px] min-h-[81px] flex flex-col justify-start items-start gap-[12px]">
                <div className="w-[550px] min-h-[27px] font-[400] text-[19px] leading-[140%] text-white">
                  AI Styling Strength
                </div>
                <div className="w-[100%] max-w-[550px] min-h-[42px] flex justify-between items-center">
                  <div
                    className={`w-full max-w-[255px] min-h-[42px] rounded-[4px] flex justify-between items-center px-[20px] cursor-pointer ${
                      formData.aiTouch === "Very Low" ? "bg-white" : "bg-[#00000033]"
                    }`}
                    onClick={() => handleChange("Very Low", "aiTouch")}
                  >
                    <span
                      className={`w-[92px] min-h-[22px] font-medium text-[16px] leading-[140%] text-center ${
                        formData.aiTouch === "Very Low"
                          ? "text-[#007B82]"
                          : "text-[#FFFFFF80]"
                      }`}
                    >
                      Very Low
                    </span>
                    <input
                      type="radio"
                      checked={formData.aiTouch === "Very Low"}
                      onChange={() => {}}
                    />
                  </div>

                  <div
                    className={`w-full max-w-[255px] min-h-[42px] rounded-[4px] flex justify-between items-center px-[20px] cursor-pointer ${
                      formData.aiTouch === "Low" ? "bg-white" : "bg-[#00000033]"
                    }`}
                    onClick={() => handleChange("Low", "aiTouch")}
                  >
                    <span
                      className={`w-[92px] min-h-[22px] font-medium text-[16px] leading-[140%] text-center ${
                        formData.aiTouch === "Low"
                          ? "text-[#007B82]"
                          : "text-[#FFFFFF80]"
                      }`}
                    >
                      Low
                    </span>
                    <input
                      type="radio"
                      checked={formData.aiTouch === "Low"}
                      onChange={() => {}}
                    />
                  </div>
                </div>
                <div className="w-[100%] max-w-[550px] min-h-[42px] flex justify-between items-center">
                  <div
                    className={`w-full max-w-[255px] min-h-[42px] rounded-[4px] flex justify-between items-center px-[20px] cursor-pointer ${
                      formData.aiTouch === "Medium" ? "bg-white" : "bg-[#00000033]"
                    }`}
                    onClick={() => handleChange("Medium", "aiTouch")}
                  >
                    <span
                      className={`w-[92px] min-h-[22px] font-medium text-[16px] leading-[140%] text-center ${
                        formData.aiTouch === "Medium"
                          ? "text-[#007B82]"
                          : "text-[#FFFFFF80]"
                      }`}
                    >
                      Medium
                    </span>
                    <input
                      type="radio"
                      checked={formData.aiTouch === "Medium"}
                      onChange={() => {}}
                    />
                  </div>

                  <div
                    className={`w-full max-w-[255px] min-h-[42px] rounded-[4px] flex justify-between items-center px-[20px] cursor-pointer ${
                      formData.aiTouch === "High" ? "bg-white" : "bg-[#00000033]"
                    }`}
                    onClick={() => handleChange("High", "aiTouch")}
                  >
                    <span
                      className={`w-[92px] min-h-[22px] font-medium text-[16px] leading-[140%] text-center ${
                        formData.aiTouch === "High"
                          ? "text-[#007B82]"
                          : "text-[#FFFFFF80]"
                      }`}
                    >
                      High
                    </span>
                    <input
                      type="radio"
                      checked={formData.aiTouch === "High"}
                      onChange={() => {}}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-[899px] min-h-[67px] rounded-[8px] border-[1px] border-solid border-[#FFFFFF4D] bg-gradient-to-l from-[#00B0BA] via-[#000000] to-[#007B82] flex justify-center items-center cursor-pointer">
            <button
              type="submit"
              className="w-full min-h-[35px] flex justify-center items-center gap-[10px] text-[20px] font-bold leading-[35px] spacing-[8px] text-center text-white"
            >
              <span>
                <img src={Magic} alt="magic" />
              </span>
              Generate Design
            </button>
          </div>
        </form>
      </div>
    </section>



  );
}
