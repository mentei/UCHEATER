"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

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
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%",
          end: "top 85%",
          scrub: 1,
        },
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

          {/* ✅ Social Links */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-blue-500 transition duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-500 transition duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-500 transition duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* ✅ Bottom Glow Effect */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 shadow-lg animate-pulse"></div>
    </footer>
  );
};

export default Footer;
