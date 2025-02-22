"use client";
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-900 text-white py-6 text-center"
    >
      <p className="text-gray-400">
        © {new Date().getFullYear()} AI Detector | All Rights Reserved
      </p>
    </motion.footer>
  );
};

export default Footer;
