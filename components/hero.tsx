"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import Image from "next/image";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const words = [
    { text: "Front-End" },
    { text: "Developer" },
    { text: "&" },
    { text: "Full-Stack", className: "text-blue-500 dark:text-blue-400" },
    { text: "Developer", className: "text-blue-500 dark:text-blue-400" },
  ];

  const yearsOfExperience = `${new Date().getFullYear() - 2022}+`;

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:opacity-30"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:opacity-30"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <motion.div
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl mx-auto">
          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
                variants={itemVariants}
              >
                Dinh Ngoc Duy
              </motion.h1>

              <motion.div
                className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8"
                variants={itemVariants}
              >
                <TypewriterEffect words={words} />
              </motion.div>

              <motion.p
                className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0"
                variants={itemVariants}
              >
                Passionate developer with {yearsOfExperience} years of
                experience in ReactJS, NextJS, and React Native. Building
                modern, responsive applications with a focus on user experience
                and performance.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8"
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="w-full sm:w-auto group">
                    <Link href="#contact" className="flex items-center gap-2">
                      Get In Touch
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      >
                        <Mail className="w-4 h-4" />
                      </motion.div>
                    </Link>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <Link href="#projects" className="flex items-center gap-2">
                      View My Work
                      <motion.div
                        animate={{ y: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      >
                        <ArrowDown className="w-4 h-4" />
                      </motion.div>
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex justify-center lg:justify-start gap-6"
                variants={itemVariants}
              >
                {[
                  {
                    href: "https://www.linkedin.com/in/dylan-dinh-2262992b8/",
                    icon: Linkedin,
                    color: "hover:text-blue-600 dark:hover:text-blue-400",
                  },
                  {
                    href: "https://github.com",
                    icon: Github,
                    color: "hover:text-gray-900 dark:hover:text-white",
                  },
                  {
                    href: "mailto:ngocduydinh2000@gmail.com",
                    icon: Mail,
                    color: "hover:text-red-600 dark:hover:text-red-400",
                  },
                ].map((social, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { scale: 0, opacity: 0 },
                      visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                        },
                      },
                    }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      href={social.href}
                      target={
                        social.href.startsWith("http") ? "_blank" : undefined
                      }
                      className={`text-gray-600 dark:text-gray-400 transition-colors ${social.color}`}
                    >
                      <social.icon className="w-6 h-6" />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right side - Portrait image */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <motion.div
                variants={{
                  hidden: { scale: 0, opacity: 0 },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      duration: 0.8,
                      type: "spring",
                      stiffness: 100,
                    },
                  },
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, duration: 0.3 }}
                className="relative"
              >
                {/* Decorative elements behind the image */}
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-30"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />

                {/* Main image container */}
                <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px]">
                  {/* Image border/frame */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  >
                    <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 p-2">
                      <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                        {/* Replace this placeholder with your actual image */}
                        <Image
                          src="/profile-image.jpg?height=400&width=400"
                          alt="Dinh Ngoc Duy - Professional Portrait"
                          fill
                          className="object-cover -rotate-45"
                          priority
                        />

                        {/* Overlay gradient for better text readability if needed */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating elements around the image */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full"
                    animate={{
                      y: [0, -10, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />

                  <motion.div
                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full"
                    animate={{
                      y: [0, 10, 0],
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  />

                  <motion.div
                    className="absolute top-1/2 -left-6 w-4 h-4 bg-pink-500 rounded-full"
                    animate={{
                      x: [0, -5, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 2,
                    }}
                  />
                </div>

                {/* Professional badge */}
                <motion.div
                  className="absolute -bottom-6 left-1/2 transform -translate-x-1/2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                >
                  <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {yearsOfExperience} Years Experience
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="text-gray-400 dark:text-gray-500"
            >
              <ArrowDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
