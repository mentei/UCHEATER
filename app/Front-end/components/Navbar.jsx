"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-gray-900 shadow-lg text-white fixed top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <motion.h1
            whileHover={{ scale: 1.1 }}
            className="text-2xl font-bold text-blue-500 cursor-pointer"
          >
            AI Detector
          </motion.h1>
        </Link>

        <div className="flex space-x-6">
          <Link href="/features">
            <motion.p whileHover={{ scale: 1.1 }} className="cursor-pointer">
              Features
            </motion.p>
          </Link>
          <Link href="/about">
            <motion.p whileHover={{ scale: 1.1 }} className="cursor-pointer">
              About
            </motion.p>
          </Link>
          <Link href="/contact">
            <motion.p whileHover={{ scale: 1.1 }} className="cursor-pointer">
              Contact
            </motion.p>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
