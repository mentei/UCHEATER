"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

const ContactCard = ({ title, description }) => {
  return (
    <motion.div
      className="p-6 bg-gray-700 text-white rounded-lg shadow-xl w-80 text-center cursor-pointer"
      whileHover={{ scale: 1.05, rotateY: 10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h2 className="text-2xl font-bold mb-3">{title}</h2>
      <p className="text-sm text-gray-300">{description}</p>
    </motion.div>
  );
};

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-10">
      <Navbar />
      <motion.h1
        className="text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Us
      </motion.h1>
      <div className="flex space-x-6 mt-6">
        <ContactCard title="Email" description="patler044@gmail.com" />
        <ContactCard title="Phone" description="+91 9098842899" />
        <ContactCard title="Location" description="   BALAGHAT ,MADHYA PARDESH, India" />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
