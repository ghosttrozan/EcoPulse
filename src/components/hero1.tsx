"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import mountain from "@/assets/mountain.webp";

export default function Hero1() {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <motion.div
          className="text-center md:text-left max-w-2xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Boost Your Eco-Lifestyle
          </motion.h1>

          <motion.h1
            className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-[#FFD13C]"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            With EcoPulse
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12"
          >
            <motion.button
              className="text-xl sm:text-2xl border-2 border-black bg-[#FFD13C] py-3 px-8 rounded-2xl text-black hover:bg-black hover:text-[#FFD13C] hover:border-[#FFD13C] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Your Impact Today
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="relative w-full max-w-md lg:max-w-2xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src={mountain}
              alt="Eco-friendly landscape with wind turbines"
              width={800}
              height={600}
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-8 h-8 rounded-full bg-[#FFD13C] opacity-30"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-12 h-12 rounded-full bg-[#FFD13C] opacity-20"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </section>
  );
}
