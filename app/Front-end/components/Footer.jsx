"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative bg-gray-900 bg-opacity-80 backdrop-blur-lg text-white py-8 text-center mt-16"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} AI Detector | All Rights Reserved
          </p>

          {/* ✅ Social Icons */}
          <div className="flex  h-full space-x-8 mt-2 p-8 md:mt-0">
            <a
              href="https://github.com/mentei"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-hover"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://x.com/PatleRahul239"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-hover"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/rahul-patle-78b16a346/"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-hover"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* ✅ Bottom Glow Effect */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 shadow-lg animate-pulse"></div>

      {/* ✅ Neon Hover Effect */}
      <style>
        {`
          .neon-hover {
            color: #ffffff;
            transition: all 0.3s ease-in-out;
          }
          .neon-hover:hover {
            color: #00e6e6;
            text-shadow: 0 0 10px #00e6e6, 0 0 20px #00e6e6, 0 0 40px #00e6e6;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
