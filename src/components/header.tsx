"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuUserRound, LuMenu, LuX } from "react-icons/lu";
import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navData = ["Home", "Features", "Impact", "About", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 ${
        scrolled ? "shadow-md" : "bg-transparent shadow-md"
      } transition-all duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="px-4 py-4 md:py-8 md:px-10 lg:px-56 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div whileHover={{ rotate: 15 }}>
            <Image src={logo} alt="logo" width={36} height={32} />
          </motion.div>
          <motion.h1
            className="text-2xl md:text-4xl text-[#FFD13C] font-bold"
            whileHover={{ scale: 1.05 }}
          >
            EcoPulse
          </motion.h1>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden md:flex items-center gap-6 lg:gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {navData.map((data, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={`#${data.toLowerCase()}`}
                className="text-lg lg:text-xl font-medium hover:text-[#FFD13C] hover:underline-offset-4 hover:underline transition-all"
              >
                {data}
              </a>
            </motion.div>
          ))}
        </motion.nav>

        {/* Desktop CTA Button */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.button
            className="py-2 px-6 border rounded-full border-[#FFD13C] flex items-center justify-center gap-2 hover:text-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <LuUserRound className="text-xl text-[#FFD13C]  font-medium" />
            <span className="hover:text-white">Get Start</span>
          </motion.button>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <LuMenu className="h-6 w-6 text-[#FFD13C]" />
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-50 pt-24 px-6 md:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <motion.button
              className="absolute top-8 right-6 p-2"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <LuX className="h-6 w-6 text-[#FFD13C]" />
            </motion.button>
            <div className="flex flex-col space-y-8">
              {navData.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-2xl text-gray-900 font-medium hover:text-[#FFD13C]"
                    onClick={toggleMenu}
                  >
                    {item}
                  </a>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                exit={{ opacity: 0, y: 20 }}
                className="pt-8"
              >
                <button
                  className="w-full py-3 px-6 border rounded-full border-[#FFD13C] text-[#FFD13C] flex items-center justify-center gap-2 hover:bg-[#FFD13C] hover:text-white transition-colors"
                  onClick={toggleMenu}
                >
                  <LuUserRound className="text-xl" />
                  <span>Get Start</span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
