"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
// import { N } from "framer-motion/dist/types.d-6pKw1mTI";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

const AboutPage = () => {
  return (<>
    <Navbar/>
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center mt-20 p-10 font">
     
      <motion.h1
        className="text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Us
      </motion.h1>

    
      <motion.p
        className="text-lg text-center max-w-3xl mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        We are a passionate team of developers building cutting-edge web applications.
        Our mission is to deliver high-quality, scalable, and user-friendly solutions.
      </motion.p>

  
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image src="/team.png" alt="Team" width={400} height={300} className="rounded-lg shadow-lg" />
      </motion.div>


      <motion.div className="mt-10 flex space-x-6">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="p-4 bg-blue-500 rounded-lg shadow-md text-xl cursor-pointer"
        >
          Our Vision
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="p-4 bg-green-500 rounded-lg shadow-md text-xl cursor-pointer"
        >
          Our Mission
        </motion.div>
      </motion.div>
    </div>
    <Footer/>
    </>);
};

export default AboutPage;
