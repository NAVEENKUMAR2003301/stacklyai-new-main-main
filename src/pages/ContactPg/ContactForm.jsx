import React from 'react';
import formBanner from '../../assets/pricing-pg/formBanner.jpg'; // Adjust path as needed

const ContactForm = () => {
  return (
    <section
      className="w-full min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-16"
      style={{
        backgroundImage: `url(${formBanner})`,
      }}
    >
      <div className="max-w-4xl w-full rounded-xl shadow-lg flex flex-col md:flex-row items-center md:items-stretch p-6 md:p-10 gap-10">
        {/* Left Text Content */}
        <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center">
          <h2 className="text-[80px] leading-[85px] font-bold text-[white] text-center">
            Let's talk <br /> with us
          </h2>
          <p className="text-[#F5F5F5] mt-4 max-w-[411px] min-h-[51px] text-center text-[18px]">
            Questions, comments, or suggestions? Simply fill in the form and we’ll be in touch shortly.
          </p>
        </div>

        {/* Right Form */}
        <div className="  max-w-[505px] min-h-[50px] bg-white p-6 rounded-[10px]">
          <form className="space-y-4">
            {/* Name Fields */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700">
                  First name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Ram"
                  className="mt-1 w-full border rounded-md px-3 py-2 bg-gray-100 focus:border-[1px] border-solid border-[#00B0BA]"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Prakash"
                  className="mt-1 w-full border rounded-md px-3 py-2 bg-gray-100"
                  readOnly
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="ramprakash@example.com"
                className="mt-1 w-full border rounded-md px-3 py-2 bg-gray-100"
              />
            </div>

            {/* Contact Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Contact Number<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="+91 0123456789"
                className="mt-1 w-full border rounded-md px-3 py-2 bg-gray-100"
              />
            </div>

            {/* Subject Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Select Subject<span className="text-red-500">*</span>
              </label>
              <select className="mt-1 w-full border rounded-md px-3 py-2 bg-gray-100">
                <option value="">Select a Subject</option>
                <option>Support</option>
                <option>Sales</option>
                <option>Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <textarea
                placeholder="Your Message (Max 500 Characters)"
                maxLength={500}
                rows={4}
                className="mt-1 w-full border rounded-md px-3 py-2 bg-gray-100"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-700 to-cyan-500 text-white font-medium py-2 rounded-md hover:opacity-90"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
