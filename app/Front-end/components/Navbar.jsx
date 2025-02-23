"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image"; 
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";  // Menu Icons

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full fixed top-0 z-50 bg-white/10 backdrop-blur-xl shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/">
          <motion.div whileHover={{ scale: 1.1 }} className="flex items-center cursor-pointer space-x-3">
            <Image src="/LOGO.png" alt="Logo" width={50} height={50} className="rounded-full" />
            <h1 className="text-2xl font-bold text-blue-500">AI Detector</h1>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {["/features", "/about", "/contact", "/docs"].map((route) => (
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

        {/* Mobile Menu Icon added */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden absolute top-16 left-0 w-full bg-black/90 backdrop-blur-xl shadow-lg"
          >
            <div className="flex flex-col items-center space-y-4 py-6">
              {["/features", "/about", "/contact", "/docs"].map((route) => (
                <Link key={route} href={route} onClick={toggleMenu} className="text-white text-lg">
                  {route.replace("/", "").charAt(0).toUpperCase() + route.replace("/", "").slice(1)}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
