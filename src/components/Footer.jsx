import React from "react";  
import logo from "../assets/Logo.png";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <img src={logo} alt="Stackly Logo" className="mb-4 w-32" />
          <p className="text-sm">
            Automatically generate photo-like images of your desired spaces in
            seconds. Unleash the most advanced AI interior design tool to boost
            your productivity.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-x-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-4">Quick links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Trends</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">API</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Terms & Policy</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#">Terms of Services</a>
            </li>
            <li>
              <a href="#">Privacy and Cookie Policy</a>
            </li>
            <li>
              <a href="#">Cookie Settings</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Contact Us</h4>
          <p className="text-sm">
            <a
              href="mailto:info@stacklyai.com"
              className="flex items-center gap-2"
            >
              <i className="fas fa-envelope"></i> info@stacklyai.com
            </a>
          </p>
        </div>
      </div>

      <div className="text-center text-gray-400 text-xs mt-10">
        &copy; 2023 Stackly AI | All Rights Reserved
      </div>
    </footer>
  );
}
