"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image"; // Logo import

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname(); // Get current active route

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full fixed top-0 z-50 bg-white/10 backdrop-blur-xl shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <Link href="/">
  <motion.div whileHover={{ scale: 1.1 }} className="flex items-center cursor-pointer space-x-3">
    <Image src="/LOGO.png" alt="Logo" width={60} height={60} className="rounded-full" />
    <h1 className="text-2xl font-bold text-blue-500">AI Detector</h1>
  </motion.div>
</Link>


        <div className="flex space-x-6">
          {["/features", "/about", "/contact"].map((route) => (
            <Link key={route} href={route} className="relative">
              <motion.p
                whileHover={{ scale: 1.1 }}
                className={`cursor-pointer ${
                  pathname === route ? "text-blue-400 font-semibold" : ""
                }`}
              >
                {route.replace("/", "").charAt(0).toUpperCase() +
                  route.replace("/", "").slice(1)}
              </motion.p>

              {/* Gradient Underline for Active Link */}
              {pathname === route && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 bottom-0 w-full h-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
