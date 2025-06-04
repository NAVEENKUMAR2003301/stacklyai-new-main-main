// // import React from 'react'
// // import Banner from "../../assets/profile/banner.jpg"
// // import Pimage from "../../assets/profile/pimage.png"
// // import Eye from "../../assets/profile/eye.png"
// // import { Link } from "react-router-dom";
// // import { NavLink } from "react-router-dom";

// // export default function HeroProfile() {
// //   return (
// //     <div>
// //       <section className="w-full h-auto p-[50px] flex flex-col justify-start items-center gap-[15px]">
// //         <div className="w-[1280px] text-start h-[31px] text-[26px] font-medium text-[#2A2A2A] flex justify-start leading-[100%]">
// //           <div className="w-[100%] flex justify-start ml-[5px]">My Profile</div>
// //         </div>

// //         <img
// //           src={Banner}
// //           alt="banner"
// //           className="w-[1280px] h-[357px] rounded-[10px] bg-[#00000033] bg-cover bg-center bg-no-repeat fit"
// //         />

// //         {/* profiles  */}

// //         <div className="w-[1280px] h-[869px] flex justify-center items-start gap-[20px] mt-[-100px]">
// //           {/* profile1  */}

// //           <div className="w-[373px] h-[859px] rounded-[12px] bg-[#FFFFFFCC] backdrop-blur-[3px] shadow-[0_1px_4px_0] shadow-[#00000040]">
// //             <div className="w-[100%] h-[97px] rounded-[12px] bg-[#00B0BA33]">
// //               <div className="text-center flex flex-col justify-center items-center gap-[20px] pt-[40px]">
// //                 <img src={Pimage} alt="profile-pic" className="" />
// //                 <div className="w-[112px] h-[29px] font-medium text-[24px] leading-[100%] text-[#2A2A2A]">
// //                   John Paul
// //                 </div>
// //                 <div className="w-[100%] h-[2px] bg-[#E0E4E7]"></div>

// //                 {/* basic-info  */}

// //                 <div className="w-[100%] h-auto p-[20px] flex flex-col gap-[20px]">
// //                   <div className="w-[89px] h-[22px] font-medium text-[18px] leading-[100%] text-[#00B0BA]">
// //                     Basic info:
// //                   </div>

// //                   <div className="w-[147px] h-[19px] flex justify-between font-[400] text-[16px] text-[#2A2A2A]">
// //                     First name : <span className="text-[#B0B0B0]">John</span>
// //                   </div>
// //                   <div className="w-[147px] h-[19px] flex justify-between font-[400] text-[16px] text-[#2A2A2A]">
// //                     Last name : <span className="text-[#B0B0B0]">Paul</span>
// //                   </div>
// //                   <div className="w-[247px] h-[19px] flex justify-between font-[400] text-[16px] text-[#2A2A2A]">
// //                     Email :{" "}
// //                     <span className="text-[#B0B0B0]">johnpaul@gamil.com</span>
// //                   </div>
// //                   <div className="w-[270px] h-[19px] flex justify-between font-[400] text-[16px] text-[#2A2A2A]">
// //                     Contact number :{" "}
// //                     <span className="text-[#B0B0B0]">+91 1234567890</span>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* profile 2  */}

// //           <div className="w-[807px] h-[869px] rounded-[10px] bg-[#FFFFFFCC] backdrop-blur-[6px] shadow-[0_1px_4px_0] shadow-[#0000003D]">
// //             {/* header  */}
// //             <div className="w-[100%] h-[98px] flex justify-between items-center px-[30px]">
// //               {/* <Link to="/HeroProfile">
// //                 <button className="w-[94px] h-[98px] flex justify-center items-center font-medium text-[18px] leading-[100%] text-[black] hover:text-[#007B82] hover:border-b-[#007B82] hover:border-solid hover:border-b-[2px] focus-within:text-[#007B82] focus-within:border-b-[#007B82] cursor-pointer active:text-[#007B82] active:border-b-[#007B82]">
// //                   Edit Profile
// //                 </button>
// //               </Link> */}
// //               <NavLink
// //                 to="/HeroProfile"
// //                 className={({ isActive }) =>
// //                   `w-[94px] h-[98px] flex justify-center items-center font-medium text-[18px] leading-[100%] text-black hover:text-[#007B82] border-b-[2px] border-solid ${
// //                     isActive
// //                       ? "text-[#007B82] border-[#007B82]"
// //                       : "border-transparent hover:border-[#007B82]"
// //                   }`
// //                 }
// //               >
// //                 Edit Profile
// //               </NavLink>
// //               {/* <Link to="/Myplan">
// //                 <button className="w-[94px] h-[98px] flex justify-center items-center font-medium text-[18px] leading-[100%] text-[black] hover:text-[#007B82] hover:border-b-[#007B82] hover:border-solid hover:border-b-[2px] focus:text-[#007B82] focus:border-b-[#007B82] cursor-pointer active:text-[#007B82]">
// //                   My Plan
// //                 </button>
// //               </Link> */}
// //               <Link
// //                 to="/Myplan"
// //                 className={`w-[94px] h-[98px] flex justify-center items-center font-medium text-[18px] leading-[100%] text-black hover:text-[#007B82] border-b-[2px] border-solid ${
// //                   window.location.pathname === "/Myplan"
// //                     ? "text-[#007B82] border-[#007B82]"
// //                     : "border-transparent hover:border-[#007B82]"
// //                 }`}
// //               >
// //                 My Plan
// //               </Link>
// //               {/* <Link to="/Mybilling">
// //                 <button className="w-[94px] h-[98px] flex justify-center items-center font-medium text-[18px] leading-[100%] text-[black] hover:text-[#007B82] hover:border-b-[#007B82] hover:border-solid hover:border-b-[2px] focus:text-[#007B82] focus:border-b-[#007B82] cursor-pointer active:text-[#007B82]">
// //                   My Billing
// //                 </button>
// //               </Link> */}
// //               <Link
// //                 to="/Mybilling"
// //                 className={`w-[94px] h-[98px] flex justify-center items-center font-medium text-[18px] leading-[100%] text-black hover:text-[#007B82] border-b-[2px] border-solid ${
// //                   window.location.pathname === "/Mybilling"
// //                     ? "text-[#007B82] border-[#007B82]"
// //                     : "border-transparent hover:border-[#007B82]"
// //                 }`}
// //               >
// //                 My Billing
// //               </Link>
// //               {/* <Link to="/HelpCenter">
// //                 <button className="w-[150px] h-[98px] flex justify-center items-center font-medium text-[18px] leading-[100%] text-[black] hover:text-[#007B82] hover:border-b-[#007B82] hover:border-solid hover:border-b-[2px] focus:text-[#007B82] focus:border-b-[#007B82] cursor-pointer active:text-[#007B82]">
// //                   Help Center
// //                 </button>
// //               </Link> */}
// //               <Link
// //                 to="/HelpCenter"
// //                 className={`w-[150px] h-[98px] flex justify-center items-center font-medium text-[18px] leading-[100%] text-black hover:text-[#007B82] border-b-[2px] border-solid ${
// //                   window.location.pathname === "/HelpCenter"
// //                     ? "text-[#007B82] border-[#007B82]"
// //                     : "border-transparent hover:border-[#007B82]"
// //                 }`}
// //               >
// //                 Help Center
// //               </Link>
// //             </div>

// //             {/* profile  */}

// //             <div className="w-[807px] h-[771px] py-[30px] px-[40px] flex flex-col gap-[30px] justify-start items-start">
// //               {/* logo  */}

// //               <div className="w-[100%] h-[109px] flex flex-col justify-center items-center gap-[12px] ">
// //                 <img
// //                   src={Pimage}
// //                   alt="logo"
// //                   className="border-[2px] border-solid border-[#007B82] rounded-[50%]"
// //                 />
// //                 <Link to="">
// //                   <div className="w-[111px] h-[17px] font-[400] leading-[100%] text-center text-[14px] text-[#007B82] ">
// //                     Change image
// //                   </div>
// //                 </Link>
// //               </div>

// //               {/* form  */}

// //               <div className="w-[687px] h-[488px] flex flex-col justify-start items-start gap-[32px]">
// //                 <div className="w-[687px] h-[70px] flex justify-start items-start gap-[27px]">
// //                   <div className="w-[330px] h-[70px]">
// //                     <label
// //                       htmlFor=""
// //                       className="w-[328px] h-[19px] font-[400] text-[16px] leading-[100%] text-[#2A2A2A]"
// //                     >
// //                       First Name
// //                     </label>
// //                     <input
// //                       type="text"
// //                       placeholder="John"
// //                       className="focus:placeholder:text-[black] active:placeholder:text-[black] w-[328px] h-[44px] rounded-[10px] border-[1px] border-solid active:border-[#00B0BA] focus:border-[#00B0BA] border-[#A0A0A0] px-[20px]"
// //                     />
// //                   </div>
// //                   <div className="w-[330px] h-[70px]">
// //                     <label
// //                       htmlFor=""
// //                       className="w-[328px] h-[19px] font-[400] text-[16px] leading-[100%] text-[#2A2A2A]"
// //                     >
// //                       Last Name
// //                     </label>
// //                     <input
// //                       type="text"
// //                       placeholder="Paul"
// //                       className="focus:placeholder:text-[black] active:placeholder:text-[black] w-[328px] h-[44px] rounded-[10px] border-[1px] border-solid active:border-[#00B0BA] focus:border-[#00B0BA] border-[#A0A0A0] px-[20px]"
// //                     />
// //                   </div>
// //                 </div>

// //                 {/* email  */}

// //                 <div className="w-[687px] h-[69px] flex justify-start items-start gap-[27px]">
// //                   <div className="w-[330px] h-[70px]">
// //                     <label
// //                       htmlFor=""
// //                       className="w-[328px] h-[19px] font-[400] text-[16px] leading-[100%] text-[#2A2A2A]"
// //                     >
// //                       Email
// //                     </label>
// //                     <input
// //                       type="email"
// //                       placeholder="Johnpaul@gmail.com"
// //                       className="focus:placeholder:text-[black] active:placeholder:text-[black] w-[328px] h-[44px] rounded-[10px] border-[1px] border-solid active:border-[#00B0BA] focus:border-[#00B0BA] border-[#A0A0A0] px-[20px]"
// //                     />
// //                   </div>
// //                   <div className="w-[330px] h-[70px]">
// //                     <label
// //                       htmlFor=""
// //                       className="w-[328px] h-[19px] font-[400] text-[16px] leading-[100%] text-[#2A2A2A]"
// //                     >
// //                       Contact Number
// //                     </label>
// //                     <input
// //                       type="number"
// //                       placeholder="+91 1234567890"
// //                       className="focus:placeholder:text-[black] active:placeholder:text-[black] w-[328px] h-[44px] rounded-[10px] border-[1px] border-solid active:border-[#00B0BA] focus:border-[#00B0BA] border-[#A0A0A0] px-[20px]"
// //                     />
// //                   </div>
// //                 </div>

// //                 {/* password  */}

// //                 <div className="w-[687px] h-[141px] flex flex-col justify-start items-start gap-[13px]">
// //                   <div className="w-[687px] h-[22px] font-medium text-[18px] leading-[100%] text-[#007B82]">
// //                     Password
// //                   </div>

// //                   <div className="w-[687px] h-[90px] flex flex-col gap-[5px]">
// //                     <div className="w-[687px] h-[19px] font-[400] text-[16px] leading-[100%] text-[#2A2A2A]">
// //                       Current Password
// //                     </div>
// //                     <div className="focus:placeholder:text-[black] active:placeholder:text-[black] w-[687px] h-[44px] border-[1px] border-solid border-[#A0A0A0] rounded-[10px] px-[20px] flex justify-between items-center focus:border-[1px] active:border-[1px] active:border-solid  active:border-[#00B0BA] focus-within:border-[#00B0BA]">
// //                       <input
// //                         type="password"
// //                         placeholder="John@stackly10"
// //                         className="w-[100%] focus:placeholder:text-[black] active:placeholder:text-[black] active:border-[#00B0BA] focus:border-[#00B0BA]"
// //                       />
// //                       <img
// //                         src={Eye}
// //                         alt="eye"
// //                         className="w-[23.25px] h-[13.56px]"
// //                       />
// //                     </div>
// //                     <Link to="">
// //                       <div className="w-[687px] h-[17px] font-[400] text-[14px] leading-[100%] text-right text-[400] text-[#007B82] underline">
// //                         Reset Password
// //                       </div>
// //                     </Link>
// //                   </div>
// //                 </div>

// //                 {/* reset password  */}

// //                 <div className="w-[687px] h-[112px] flex flex-col items-start justify-start gap-[20px]">
// //                   <div className="w-[687px] h-[22px] font-medium text-[18px] leading-[100%] text-[#007B82]">
// //                     Reset Password
// //                   </div>
// //                   <div className="w-[687px] h-[70px] flex justify-start items-start gap-[27px]">
// //                     <div className="w-[330px] h-[70px]">
// //                       <label
// //                         htmlFor=""
// //                         className="w-[328px] h-[19px] font-[400] text-[16px] leading-[100%] text-[#2A2A2A]"
// //                       >
// //                         New Password
// //                       </label>
// //                       <input
// //                         type="text"
// //                         placeholder="Johnpaulstackly10"
// //                         className="focus:placeholder:text-[black] active:placeholder:text-[black] w-[328px] h-[44px] rounded-[10px] border-[1px] border-solid active:border-[#00B0BA] focus:border-[#00B0BA] border-[#A0A0A0] px-[20px]"
// //                       />
// //                     </div>
// //                     <div className="w-[330px] h-[70px]">
// //                       <label
// //                         htmlFor=""
// //                         className="w-[328px] h-[19px] font-[400] text-[16px] leading-[100%] text-[#2A2A2A]"
// //                       >
// //                         Confirm Password
// //                       </label>
// //                       <input
// //                         type="text"
// //                         placeholder="Johnpaulstackly10"
// //                         className="focus:placeholder:text-[black] active:placeholder:text-[black] w-[328px] h-[44px] rounded-[10px] border-[1px] border-solid active:border-[#00B0BA] focus:border-[#00B0BA] border-[#A0A0A0] px-[20px]"
// //                       />
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* buttons  */}
// //                 <div className="w-[100%] h-[41px] flex justify-end items-center gap-[24px]">
// //                   <div className="w-[223px] h-[41px] flex gap-[24px] justify-between ">
// //                     <Link to="">
// //                       <div className="w-[99px] h-[41px] rounded-[10px] border-[1px] border-solid border-[#007B82] px-[20px] py-[6px] gap-[8px] flex justify-center items-center text-[#007B82]">
// //                         Discard
// //                       </div>
// //                     </Link>
// //                     <Link to="">
// //                       <div className="w-[100px] h-[41px] rounded-[10px] px-[10px] py-[6px] bg-[#007B82] text-[white] flex justify-center items-center">
// //                         Save
// //                       </div>
// //                     </Link>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }

// import React, { useState, useRef } from "react";
// import Banner from "../../assets/profile/banner.jpg";
// import Pimage from "../../assets/profile/pimage.png";
// import Eye from "../../assets/profile/eye.png";
// import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";

// export default function HeroProfile() {
//   const [profileImage, setProfileImage] = useState(Pimage);
//   const fileInputRef = useRef(null);

//   // Form state
//   const [formData, setFormData] = useState({
//     firstName: "John",
//     lastName: "Paul",
//     email: "johnpaul@gmail.com",
//     contactNumber: "+91 1234567890",
//     currentPassword: "John@stackly10",
//     newPassword: "",
//     confirmPassword: "",
//   });

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfileImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleChangeImageClick = () => {
//     fileInputRef.current.click();
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log("Form submitted:", formData);
//   };

//   const handleDiscard = () => {
//     // Reset form to initial values
//     setFormData({
//       firstName: "John",
//       lastName: "Paul",
//       email: "johnpaul@gmail.com",
//       contactNumber: "+91 1234567890",
//       currentPassword: "John@stackly10",
//       newPassword: "",
//       confirmPassword: "",
//     });
//     setProfileImage(Pimage);
//   };

//   return (
//     <div>
//       <section className="w-full h-auto p-[50px] flex flex-col justify-start items-center gap-[15px]">
//         <div className="w-[1280px] text-start h-[31px] text-[26px] font-medium text-[#2A2A2A] flex justify-start leading-[100%]">
//           <div className="w-[100%] flex justify-start ml-[5px]">My Profile</div>
//         </div>

//         <img
//           src={Banner}
//           alt="banner"
//           className="w-[1280px] h-[357px] rounded-[10px] bg-[#00000033] bg-cover bg-center bg-no-repeat fit"
//         />

//         {/* profiles  */}

//         <div className="w-[1280px] h-[869px] flex justify-center items-start gap-[20px] mt-[-100px]">
//           {/* profile1  */}

//           <div className="w-[373px] h-[859px] rounded-[12px] bg-[#FFFFFFCC] backdrop-blur-[3px] shadow-[0_1px_4px_0] shadow-[#00000040]">
//             <div className="w-[100%] h-[97px] rounded-[12px] bg-[#00B0BA33]">
//               <div className="text-center flex flex-col justify-center items-center gap-[20px] pt-[40px]">
//                 <img src={profileImage} alt="profile-pic" className="" />
//                 <div className="w-[112px] h-[29px] font-medium text-[24px] leading-[100%] text-[#2A2A2A]">
//                   {formData.firstName} {formData.lastName}
//                 </div>
//                 <div className="w-[100%] h-[2px] bg-[#E0E4E7]"></div>

//                 {/* basic-info  */}

//                 <div className="w-[100%] h-auto p-[20px] flex flex-col gap-[20px]">
//                   <div className="w-[89px] h-[22px] font-medium text-[18px] leading-[100%] text-[#00B0BA]">
//                     Basic info:
//                   </div>

//                   <div className="w-[147px] h-[19px] flex justify-between font-[400] text-[16px] text-[#2A2A2A]">
//                     First name :{" "}
//                     <span className="text-[#B0B0B0]">{formData.firstName}</span>
//                   </div>
//                   <div className="w-[147px] h-[19px] flex justify-between font-[400] text-[16px] text-[#2A2A2A]">
//                     Last name :{" "}
//                     <span className="text-[#B0B0B0]">{formData.lastName}</span>
//                   </div>
//                   <div className="w-[247px] h-[19px] flex justify-between font-[400] text-[16px] text-[#2A2A2A]">
//                     Email :{" "}
//                     <span className="text-[#B0B0B0]">{formData.email}</span>
//                   </div>
//                   <div className="w-[270px] h-[19px] flex justify-between font-[400] text-[16px] text-[#2A2A2A]">
//                     Contact number :{" "}
//                     <span className="text-[#B0B0B0]">
//                       {formData.contactNumber}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* profile 2  */}

//           <div className="w-[807px] h-[869px] rounded-[10px] bg-[#FFFFFFCC] backdrop-blur-[6px] shadow-[0_1px_4px_0] shadow-[#0000003D]">
//             {/* header  */}
//             <div className="w-[100%] h-[98px] flex justify-between items-center px-[30px]">
//               <NavLink
//                 to="/HeroProfile"
//                 className={({ isActive }) =>
//                   `w-[94px] h-[98px] flex justify-center items-center font-medium text-[18px] leading-[100%] text-black hover:text-[#007B82] border-b-[2px] border-solid ${
//                     isActive
//                       ? "text-[#007B82] border-[#007B82]"
//                       : "border-transparent hover:border-[#007B82]"
//                   }`
//                 }
//               >
//                 Edit Profile
//               </NavLink>
//               <Link
//                 to="/Myplan"
//                 className={`w-[94px] h-[98px] flex justify-center items-center font-medium text-[18px] leading-[100%] text-black hover:text-[#007B82] border-b-[2px] border-solid ${
//                   window.location.pathname === "/Myplan"
//                     ? "text-[#007B82] border-[#007B82]"
//                     : "border-transparent hover:border-[#007B82]"
//                 }`}
//               >
//                 My Plan
//               </Link>
//               <Link
//                 to="/Mybilling"
//                 className={`w-[94px] h-[98px] flex justify-center items-center font-medium text-[18px] leading-[100%] text-black hover:text-[#007B82] border-b-[2px] border-solid ${
//                   window.location.pathname === "/Mybilling"
//                     ? "text-[#007B82] border-[#007B82]"
//                     : "border-transparent hover:border-[#007B82]"
//                 }`}
//               >
//                 My Billing
//               </Link>
//               <Link
//                 to="/HelpCenter"
//                 className={`w-[150px] h-[98px] flex justify-center items-center font-medium text-[18px] leading-[100%] text-black hover:text-[#007B82] border-b-[2px] border-solid ${
//                   window.location.pathname === "/HelpCenter"
//                     ? "text-[#007B82] border-[#007B82]"
//                     : "border-transparent hover:border-[#007B82]"
//                 }`}
//               >
//                 Help Center
//               </Link>
//             </div>

//             {/* profile  */}

//             <div className="w-[807px] h-[771px] py-[30px] px-[40px] flex flex-col gap-[30px] justify-start items-start">
//               {/* logo  */}

//               <div className="w-[100%] h-[109px] flex flex-col justify-center items-center gap-[12px] ">
//                 <img
//                   src={profileImage}
//                   alt="logo"
//                   className="border-[2px] border-solid border-[#007B82] rounded-[50%] w-[100px] h-[100px] object-cover"
//                 />
//                 <input
//                   type="file"
//                   ref={fileInputRef}
//                   onChange={handleImageChange}
//                   accept="image/*"
//                   className="hidden"
//                 />
//                 <button
//                   onClick={handleChangeImageClick}
//                   className="w-[111px] h-[17px] font-[400] leading-[100%] text-center text-[14px] text-[#007B82] hover:underline cursor-pointer"
//                 >
//                   Change image
//                 </button>
//               </div>

//               {/* form  */}

//               <form
//                 onSubmit={handleSubmit}
//                 className="w-[687px] h-[488px] flex flex-col justify-start items-start gap-[32px]"
//               >
//                 <div className="w-[687px] h-[70px] flex justify-start items-start gap-[27px]">
//                   <div className="w-[330px] h-[70px]">
//                     <label
//                       htmlFor="firstName"
//                       className="w-[328px] h-[19px] font-[400] text-[16px] leading-[100%] text-[#2A2A2A]"
//                     >
//                       First Name
//                     </label>
//                     <input
//                       type="text"
//                       id="firstName"
//                       name="firstName"
//                       value={formData.firstName}
//                       onChange={handleInputChange}
//                       placeholder="John"
//                       className="focus:placeholder:text-[black] active:placeholder:text-[black] w-[328px] h-[44px] rounded-[10px] border-[1px] border-solid active:border-[#00B0BA] focus:border-[#00B0BA] border-[#A0A0A0] px-[20px]"
//                     />
//                   </div>
//                   <div className="w-[330px] h-[70px]">
//                     <label
//                       htmlFor="lastName"
//                       className="w-[328px] h-[19px] font-[400] text-[16px] leading-[100%] text-[#2A2A2A]"
//                     >
//                       Last Name
//                     </label>
//                     <input
//                       type="text"
//                       id="lastName"
//                       name="lastName"
//                       value={formData.lastName}
//                       onChange={handleInputChange}
//                       placeholder="Paul"
//                       className="focus:placeholder:text-[black] active:placeholder:text-[black] w-[328px] h-[44px] rounded-[10px] border-[1px] border-solid active:border-[#00B0BA] focus:border-[#00B0BA] border-[#A0A0A0] px-[20px]"
//                     />
//                   </div>
//                 </div>

//                 {/* email  */}

//                 <div className="w-[687px] h-[69px] flex justify-start items-start gap-[27px]">
//                   <div className="w-[330px] h-[70px]">
//                     <label
//                       htmlFor="email"
//                       className="w-[328px] h-[19px] font-[400] text-[16px] leading-[100%] text-[#2A2A2A]"
//                     >
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       placeholder="Johnpaul@gmail.com"
//                       className="focus:placeholder:text-[black] active:placeholder:text-[black] w-[328px] h-[44px] rounded-[10px] border-[1px] border-solid active:border-[#00B0BA] focus:border-[#00B0BA] border-[#A0A0A0] px-[20px]"
//                     />
//                   </div>
//                   <div className="w-[330px] h-[70px]">
//                     <label
//                       htmlFor="contactNumber"
//                       className="w-[328px] h-[19px] font-[400] text-[16px] leading-[100%] text-[#2A2A2A]"
//                     >
//                       Contact Number
//                     </label>
//                     <input
//                       type="tel"
//                       id="contactNumber"
//                       name="contactNumber"
//                       value={formData.contactNumber}
//                       onChange={handleInputChange}
//                       placeholder="+91 1234567890"
//                       className="focus:placeholder:text-[black] active:placeholder:text-[black] w-[328px] h-[44px] rounded-[10px] border-[1px] border-solid active:border-[#00B0BA] focus:border-[#00B0BA] border-[#A0A0A0] px-[20px]"
//                     />
//                   </div>
//                 </div>

//                 {/* password  */}

//                 <div className="w-[687px] h-[141px] flex flex-col justify-start items-start gap-[13px]">
//                   <div className="w-[687px] h-[22px] font-medium text-[18px] leading-[100%] text-[#007B82]">
//                     Password
//                   </div>

//                   <div className="w-[687px] h-[90px] flex flex-col gap-[5px]">
//                     <div className="w-[687px] h-[19px] font-[400] text-[16px] leading-[100%] text-[#2A2A2A]">
//                       Current Password
//                     </div>
//                     <div className="focus:placeholder:text-[black] active:placeholder:text-[black] w-[687px] h-[44px] border-[1px] border-solid border-[#A0A0A0] rounded-[10px] px-[20px] flex justify-between items-center focus:border-[1px] active:border-[1px] active:border-solid  active:border-[#00B0BA] focus-within:border-[#00B0BA]">
//                       <input
//                         type="password"
//                         id="currentPassword"
//                         name="currentPassword"
//                         value={formData.currentPassword}
//                         onChange={handleInputChange}
//                         placeholder="John@stackly10"
//                         className="w-[100%] focus:placeholder:text-[black] active:placeholder:text-[black] active:border-[#00B0BA] focus:border-[#00B0BA]"
//                       />
//                       <img
//                         src={Eye}
//                         alt="eye"
//                         className="w-[23.25px] h-[13.56px] cursor-pointer"
//                       />
//                     </div>
//                     <Link to="">
//                       <div className="w-[687px] h-[17px] font-[400] text-[14px] leading-[100%] text-right text-[400] text-[#007B82] underline">
//                         Reset Password
//                       </div>
//                     </Link>
//                   </div>
//                 </div>

//                 {/* reset password  */}

//                 <div className="w-[687px] h-[112px] flex flex-col items-start justify-start gap-[20px]">
//                   <div className="w-[687px] h-[22px] font-medium text-[18px] leading-[100%] text-[#007B82]">
//                     Reset Password
//                   </div>
//                   <div className="w-[687px] h-[70px] flex justify-start items-start gap-[27px]">
//                     <div className="w-[330px] h-[70px]">
//                       <label
//                         htmlFor="newPassword"
//                         className="w-[328px] h-[19px] font-[400] text-[16px] leading-[100%] text-[#2A2A2A]"
//                       >
//                         New Password
//                       </label>
//                       <input
//                         type="password"
//                         id="newPassword"
//                         name="newPassword"
//                         value={formData.newPassword}
//                         onChange={handleInputChange}
//                         placeholder="Johnpaulstackly10"
//                         className="focus:placeholder:text-[black] active:placeholder:text-[black] w-[328px] h-[44px] rounded-[10px] border-[1px] border-solid active:border-[#00B0BA] focus:border-[#00B0BA] border-[#A0A0A0] px-[20px]"
//                       />
//                     </div>
//                     <div className="w-[330px] h-[70px]">
//                       <label
//                         htmlFor="confirmPassword"
//                         className="w-[328px] h-[19px] font-[400] text-[16px] leading-[100%] text-[#2A2A2A]"
//                       >
//                         Confirm Password
//                       </label>
//                       <input
//                         type="password"
//                         id="confirmPassword"
//                         name="confirmPassword"
//                         value={formData.confirmPassword}
//                         onChange={handleInputChange}
//                         placeholder="Johnpaulstackly10"
//                         className="focus:placeholder:text-[black] active:placeholder:text-[black] w-[328px] h-[44px] rounded-[10px] border-[1px] border-solid active:border-[#00B0BA] focus:border-[#00B0BA] border-[#A0A0A0] px-[20px]"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* buttons  */}
//                 <div className="w-[100%] h-[41px] flex justify-end items-center gap-[24px]">
//                   <div className="w-[223px] h-[41px] flex gap-[24px] justify-between ">
//                     <button
//                       type="button"
//                       onClick={handleDiscard}
//                       className="w-[99px] h-[41px] rounded-[10px] border-[1px] border-solid border-[#007B82] px-[20px] py-[6px] gap-[8px] flex justify-center items-center text-[#007B82] hover:bg-[#007B8210]"
//                     >
//                       Discard
//                     </button>
//                     <button
//                       type="submit"
//                       className="w-[100px] h-[41px] rounded-[10px] px-[10px] py-[6px] bg-[#007B82] text-[white] flex justify-center items-center hover:bg-[#00656C]"
//                     >
//                       Save
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


import React, { useState, useRef, useEffect } from "react";
import Banner from "../../assets/profile/banner.jpg";
import Pimage from "../../assets/profile/pimage.png";
import Eye from "../../assets/profile/eye.png";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
// import { toast } from "react-toastify";

export default function HeroProfile() {
  const [profileImage, setProfileImage] = useState(Pimage);
  const fileInputRef = useRef(null);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(true);
        const token = localStorage.getItem("token");
        const response = await axios.get("/api/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const userData = response.data;
        setFormData({
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: userData.email,
          contactNumber: userData.contactNumber,
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        });

        if (userData.profileImage) {
          setProfileImage(userData.profileImage);
        }
      } catch (error) {
        toast.error("Failed to fetch user data");
        console.error("Error fetching user data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type and size
      if (!file.type.match("image.*")) {
        toast.error("Please select an image file");
        return;
      }

      if (file.size > 2 * 1024 * 1024) {
        // 2MB limit
        toast.error("Image size should be less than 2MB");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);

      // Upload image to server
      try {
        setIsLoading(true);
        const formData = new FormData();
        formData.append("profileImage", file);

        const token = localStorage.getItem("token");
        await axios.patch("/api/user/profile/image", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });

        toast.success("Profile image updated successfully");
      } catch (error) {
        toast.error("Failed to update profile image");
        console.error("Error updating profile image:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleChangeImageClick = () => {
    fileInputRef.current.click();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (formData.newPassword !== formData.confirmPassword) {
      toast.error("New password and confirm password do not match");
      return;
    }

    if (formData.newPassword && !formData.currentPassword) {
      toast.error("Please enter your current password to change it");
      return;
    }

    try {
      setIsLoading(true);
      const token = localStorage.getItem("token");

      // Prepare the data to send
      const updateData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        contactNumber: formData.contactNumber,
      };

      // Only include password fields if they're being changed
      if (formData.newPassword) {
        updateData.currentPassword = formData.currentPassword;
        updateData.newPassword = formData.newPassword;
      }

      const response = await axios.patch("/api/user/profile", updateData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Profile updated successfully");

      // Reset password fields after successful update
      setFormData((prev) => ({
        ...prev,
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      }));
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message || "Failed to update profile");
      } else {
        toast.error("Failed to update profile");
      }
      console.error("Error updating profile:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDiscard = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem("token");
      const response = await axios.get("/api/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const userData = response.data;
      setFormData({
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        contactNumber: userData.contactNumber,
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });

      if (userData.profileImage) {
        setProfileImage(userData.profileImage);
      } else {
        setProfileImage(Pimage);
      }
    } catch (error) {
      toast.error("Failed to reset form data");
      console.error("Error resetting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="text-white text-xl">Loading...</div>
        </div>
      )}

      <section className="w-full h-auto p-[50px] flex flex-col justify-start items-center gap-[15px]">
        <div className="w-[1280px] text-start h-[31px] text-[26px] font-medium text-[#2A2A2A] flex justify-start leading-[100%]">
          <div className="w-[100%] flex justify-start ml-[5px]">My Profile</div>
        </div>

        <img
          src={Banner}
          alt="banner"
          className="w-[1280px] h-[357px] rounded-[10px] bg-[#00000033] bg-cover bg-center bg-no-repeat fit"
        />

        {/* profiles  */}

        <div className="w-[1280px] h-[869px] flex justify-center items-start gap-[20px] mt-[-100px]">
          {/* profile1  */}

          <div className="w-[373px] h-[859px] rounded-[12px] bg-[#FFFFFFCC] backdrop-blur-[3px] shadow-[0_1px_4px_0] shadow-[#00000040]">
            <div className="w-[100%] h-[97px] rounded-[12px] bg-[#00B0BA33]">
              <div className="text-center flex flex-col justify-center items-center gap-[20px] pt-[40px]">
                <img
                  src={profileImage}
                  alt="profile-pic"
                  className="w-[100px] h-[100px] rounded-full object-cover border-2 border-[#00B0BA]"
                />
                <div className="w-[112px] h-[29px] font-medium text-[24px] leading-[100%] text-[#2A2A2A]">
                  {formData.firstName} {formData.lastName}
                </div>
                <div className="w-[100%] h-[2px] bg-[#E0E4E7]"></div>

                {/* basic-info  */}

                <div className="w-[100%] h-auto p-[20px] flex flex-col gap-[20px]">
                  <div className="w-[89px] h-[22px] font-medium text-[18px] leading-[100%] text-[#00B0BA]">
                    Basic info:
                  </div>

                  <div className="w-full flex justify-between font-[400] text-[16px] text-[#2A2A2A]">
                    <span>First name:</span>{" "}
                    <span className="text-[#B0B0B0]">
                      {formData.firstName || "Not set"}
                    </span>
                  </div>
                  <div className="w-full flex justify-between font-[400] text-[16px] text-[#2A2A2A]">
                    <span>Last name:</span>{" "}
                    <span className="text-[#B0B0B0]">
                      {formData.lastName || "Not set"}
                    </span>
                  </div>
                  <div className="w-full flex justify-between font-[400] text-[16px] text-[#2A2A2A]">
                    <span>Email:</span>{" "}
                    <span className="text-[#B0B0B0]">
                      {formData.email || "Not set"}
                    </span>
                  </div>
                  <div className="w-full flex justify-between font-[400] text-[16px] text-[#2A2A2A]">
                    <span>Contact number:</span>{" "}
                    <span className="text-[#B0B0B0]">
                      {formData.contactNumber || "Not set"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* profile 2  */}

          <div className="w-[807px] h-[869px] rounded-[10px] bg-[#FFFFFFCC] backdrop-blur-[6px] shadow-[0_1px_4px_0] shadow-[#0000003D]">
            {/* header  */}
            <div className="w-[100%] h-[98px] flex justify-between items-center px-[30px]">
              <NavLink
                to="/HeroProfile"
                className={({ isActive }) =>
                  `w-[94px] h-[98px] flex justify-center items-center font-medium text-[18px] leading-[100%] text-black hover:text-[#007B82] border-b-[2px] border-solid ${
                    isActive
                      ? "text-[#007B82] border-[#007B82]"
                      : "border-transparent hover:border-[#007B82]"
                  }`
                }
              >
                Edit Profile
              </NavLink>
              <NavLink
                to="/Myplan"
                className={({ isActive }) =>
                  `w-[94px] h-[98px] flex justify-center items-center font-medium text-[18px] leading-[100%] text-black hover:text-[#007B82] border-b-[2px] border-solid ${
                    isActive
                      ? "text-[#007B82] border-[#007B82]"
                      : "border-transparent hover:border-[#007B82]"
                  }`
                }
              >
                My Plan
              </NavLink>
              <NavLink
                to="/Mybilling"
                className={({ isActive }) =>
                  `w-[94px] h-[98px] flex justify-center items-center font-medium text-[18px] leading-[100%] text-black hover:text-[#007B82] border-b-[2px] border-solid ${
                    isActive
                      ? "text-[#007B82] border-[#007B82]"
                      : "border-transparent hover:border-[#007B82]"
                  }`
                }
              >
                My Billing
              </NavLink>
              <NavLink
                to="/HelpCenter"
                className={({ isActive }) =>
                  `w-[150px] h-[98px] flex justify-center items-center font-medium text-[18px] leading-[100%] text-black hover:text-[#007B82] border-b-[2px] border-solid ${
                    isActive
                      ? "text-[#007B82] border-[#007B82]"
                      : "border-transparent hover:border-[#007B82]"
                  }`
                }
              >
                Help Center
              </NavLink>
            </div>

            {/* profile  */}

            <div className="w-[807px] h-[771px] py-[30px] px-[40px] flex flex-col gap-[30px] justify-start items-start">
              {/* logo  */}

              <div className="w-[100%] h-[109px] flex flex-col justify-center items-center gap-[12px] ">
                <img
                  src={profileImage}
                  alt="logo"
                  className="border-[2px] border-solid border-[#007B82] rounded-[50%] w-[100px] h-[100px] object-cover"
                />
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  accept="image/*"
                  className="hidden"
                />
                <button
                  onClick={handleChangeImageClick}
                  disabled={isLoading}
                  className="w-[111px] h-[17px] font-[400] leading-[100%] text-center text-[14px] text-[#007B82] hover:underline cursor-pointer"
                >
                  Change image
                </button>
              </div>

              {/* form  */}

              <form
                onSubmit={handleSubmit}
                className="w-[687px] h-[488px] flex flex-col justify-start items-start gap-[32px]"
              >
                <div className="w-[687px] h-[70px] flex justify-start items-start gap-[27px]">
                  <div className="w-[330px] h-[70px]">
                    <label
                      htmlFor="firstName"
                      className="w-[328px] h-[19px] font-[400] text-[16px] leading-[100%] text-[#2A2A2A]"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      className="focus:placeholder:text-[black] active:placeholder:text-[black] w-[328px] h-[44px] rounded-[10px] border-[1px] border-solid active:border-[#00B0BA] focus:border-[#00B0BA] border-[#A0A0A0] px-[20px]"
                      disabled={isLoading}
                    />
                  </div>
                  <div className="w-[330px] h-[70px]">
                    <label
                      htmlFor="lastName"
                      className="w-[328px] h-[19px] font-[400] text-[16px] leading-[100%] text-[#2A2A2A]"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Paul"
                      className="focus:placeholder:text-[black] active:placeholder:text-[black] w-[328px] h-[44px] rounded-[10px] border-[1px] border-solid active:border-[#00B0BA] focus:border-[#00B0BA] border-[#A0A0A0] px-[20px]"
                      disabled={isLoading}
                    />
                  </div>
                </div>

                {/* email  */}

                <div className="w-[687px] h-[69px] flex justify-start items-start gap-[27px]">
                  <div className="w-[330px] h-[70px]">
                    <label
                      htmlFor="email"
                      className="w-[328px] h-[19px] font-[400] text-[16px] leading-[100%] text-[#2A2A2A]"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="johnpaul@gmail.com"
                      className="focus:placeholder:text-[black] active:placeholder:text-[black] w-[328px] h-[44px] rounded-[10px] border-[1px] border-solid active:border-[#00B0BA] focus:border-[#00B0BA] border-[#A0A0A0] px-[20px] bg-[#F0F0F0]"
                      disabled={isLoading}
                    />
                  </div>
                  <div className="w-[330px] h-[70px]">
                    <label
                      htmlFor="contactNumber"
                      className="w-[328px] h-[19px] font-[400] text-[16px] leading-[100%] text-[#2A2A2A]"
                    >
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      id="contactNumber"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleInputChange}
                      placeholder="+91 1234567890"
                      className="focus:placeholder:text-[black] active:placeholder:text-[black] w-[328px] h-[44px] rounded-[10px] border-[1px] border-solid active:border-[#00B0BA] focus:border-[#00B0BA] border-[#A0A0A0] px-[20px]"
                      disabled={isLoading}
                    />
                  </div>
                </div>

                {/* password  */}

                <div className="w-[687px] h-[141px] flex flex-col justify-start items-start gap-[13px]">
                  <div className="w-[687px] h-[22px] font-medium text-[18px] leading-[100%] text-[#007B82]">
                    Password
                  </div>

                  <div className="w-[687px] h-[90px] flex flex-col gap-[5px]">
                    <div className="w-[687px] h-[19px] font-[400] text-[16px] leading-[100%] text-[#2A2A2A]">
                      Current Password
                    </div>
                    <div className="focus:placeholder:text-[black] active:placeholder:text-[black] w-[687px] h-[44px] border-[1px] border-solid border-[#A0A0A0] rounded-[10px] px-[20px] flex justify-between items-center focus:border-[1px] active:border-[1px] active:border-solid  active:border-[#00B0BA] focus-within:border-[#00B0BA]">
                      <input
                        type={showCurrentPassword ? "text" : "password"}
                        id="currentPassword"
                        name="currentPassword"
                        value={formData.currentPassword}
                        onChange={handleInputChange}
                        placeholder="Enter current password"
                        className="w-[100%] focus:placeholder:text-[black] active:placeholder:text-[black] active:border-[#00B0BA] focus:border-[#00B0BA]"
                        disabled={isLoading}
                      />
                      <img
                        src={Eye}
                        alt="eye"
                        className="w-[23.25px] h-[13.56px] cursor-pointer"
                        onClick={() =>
                          setShowCurrentPassword(!showCurrentPassword)
                        }
                      />
                    </div>
                    <Link
                      to="/forgot-password"
                      className="w-full flex justify-end"
                    >
                      <div className="w-auto h-[17px] font-[400] text-[14px] leading-[100%] text-right text-[400] text-[#007B82] underline">
                        Forgot Password?
                      </div>
                    </Link>
                  </div>
                </div>

                {/* reset password  */}

                <div className="w-[687px] h-[112px] flex flex-col items-start justify-start gap-[20px]">
                  <div className="w-[687px] h-[22px] font-medium text-[18px] leading-[100%] text-[#007B82]">
                    Reset Password
                  </div>
                  <div className="w-[687px] h-[70px] flex justify-start items-start gap-[27px]">
                    <div className="w-[330px] h-[70px]">
                      <label
                        htmlFor="newPassword"
                        className="w-[328px] h-[19px] font-[400] text-[16px] leading-[100%] text-[#2A2A2A]"
                      >
                        New Password
                      </label>
                      <div className="focus:placeholder:text-[black] active:placeholder:text-[black] w-[328px] h-[44px] border-[1px] border-solid border-[#A0A0A0] rounded-[10px] px-[20px] flex justify-between items-center focus:border-[1px] active:border-[1px] active:border-solid  active:border-[#00B0BA] focus-within:border-[#00B0BA]">
                        <input
                          type={showNewPassword ? "text" : "password"}
                          id="newPassword"
                          name="newPassword"
                          value={formData.newPassword}
                          onChange={handleInputChange}
                          placeholder="Enter new password"
                          className="w-[100%] focus:placeholder:text-[black] active:placeholder:text-[black] active:border-[#00B0BA] focus:border-[#00B0BA]"
                          disabled={isLoading}
                        />
                        <img
                          src={Eye}
                          alt="eye"
                          className="w-[23.25px] h-[13.56px] cursor-pointer"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                        />
                      </div>
                    </div>
                    <div className="w-[330px] h-[70px]">
                      <label
                        htmlFor="confirmPassword"
                        className="w-[328px] h-[19px] font-[400] text-[16px] leading-[100%] text-[#2A2A2A]"
                      >
                        Confirm Password
                      </label>
                      <div className="focus:placeholder:text-[black] active:placeholder:text-[black] w-[328px] h-[44px] border-[1px] border-solid border-[#A0A0A0] rounded-[10px] px-[20px] flex justify-between items-center focus:border-[1px] active:border-[1px] active:border-solid  active:border-[#00B0BA] focus-within:border-[#00B0BA]">
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          id="confirmPassword"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          placeholder="Confirm new password"
                          className="w-[100%] focus:placeholder:text-[black] active:placeholder:text-[black] active:border-[#00B0BA] focus:border-[#00B0BA]"
                          disabled={isLoading}
                        />
                        <img
                          src={Eye}
                          alt="eye"
                          className="w-[23.25px] h-[13.56px] cursor-pointer"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* buttons  */}
                <div className="w-[100%] h-[41px] flex justify-end items-center gap-[24px]">
                  <div className="w-[223px] h-[41px] flex gap-[24px] justify-between ">
                    <button
                      type="button"
                      onClick={handleDiscard}
                      disabled={isLoading}
                      className="w-[99px] h-[41px] rounded-[10px] border-[1px] border-solid border-[#007B82] px-[20px] py-[6px] gap-[8px] flex justify-center items-center text-[#007B82] hover:bg-[#007B8210] disabled:opacity-50"
                    >
                      Discard
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-[100px] h-[41px] rounded-[10px] px-[10px] py-[6px] bg-[#007B82] text-[white] flex justify-center items-center hover:bg-[#00656C] disabled:opacity-50"
                    >
                      {isLoading ? "Saving..." : "Save"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}