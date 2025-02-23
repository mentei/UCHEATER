"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-cover bg-center relative"
     
    >
      {/* 🔥 Dark Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content inside Hero section */}
      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-blue-400"
        >
          Detect AI-Generated Content with Accuracy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-4 text-lg text-gray-200 max-w-2xl"
        >
          Our AI detection system helps educators and researchers verify content authenticity.
        </motion.p>

        {/* ✅ Sign In page pe le jane wala button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md text-lg font-semibold transition"
          onClick={() => router.push("/signin")}
        >
          Try Now
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
