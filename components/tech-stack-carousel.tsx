"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function TechStackCarousel() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const techStack = [
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      color: "bg-blue-500",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "bg-yellow-500",
    },
    {
      name: "ReactJS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "bg-cyan-500",
    },
    {
      name: "NextJS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      color: "bg-gray-900",
    },
    {
      name: "NodeJS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "bg-green-500",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      color: "bg-blue-600",
    },
    {
      name: "FastAPI",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      color: "bg-teal-500",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      color: "bg-blue-700",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      color: "bg-blue-400",
    },
    {
      name: "Vitest",
      icon: "https://vitest.dev/logo.svg",
      color: "bg-green-400",
    },
    {
      name: "Vite",
      icon: "https://vitejs.dev/logo.svg",
      color: "bg-purple-500",
    },
    {
      name: "Redux Toolkit",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      color: "bg-purple-600",
    },
    {
      name: "React Query",
      icon: "https://react-query-v3.tanstack.com/_next/static/images/emblem-light-628080660fddb35787ff6c77e97ca43e.svg",
      color: "bg-red-500",
    },
    {
      name: "Shadcn UI",
      icon: "/placeholder.svg?height=40&width=40",
      color: "bg-gray-800",
    },
    {
      name: "SCSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
      color: "bg-pink-500",
    },
  ]

  // Duplicate the array to create seamless infinite scroll
  const duplicatedTechStack = [...techStack, ...techStack, ...techStack]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <section
      className="py-16 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 overflow-hidden relative"
      ref={ref}
    >
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ y: -30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: -30, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            Tech Stack
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ y: -20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Technologies and tools I use to bring ideas to life
          </motion.p>
        </motion.div>

        {/* Infinite Parallax Scrolling Carousel */}
        <div className="relative">
          {/* First row - Left to Right */}
          <div className="mb-8 overflow-hidden">
            <motion.div
              className="flex gap-6 w-fit"
              animate={{
                x: [0, -100 * techStack.length],
              }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              style={{ width: `${duplicatedTechStack.length * 200}px` }}
            >
              {duplicatedTechStack.map((tech, index) => (
                <motion.div
                  key={`row1-${index}`}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.1,
                    y: -10,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  className="flex-shrink-0 w-48"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group cursor-pointer">
                    <div className="flex flex-col items-center space-y-4">
                      <motion.div
                        className={`w-16 h-16 rounded-full ${tech.color} flex items-center justify-center p-3 group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Image
                          src={tech.icon || "/placeholder.svg"}
                          alt={tech.name}
                          width={40}
                          height={40}
                          className="w-10 h-10 object-contain filter brightness-0 invert"
                        />
                      </motion.div>
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white text-center">{tech.name}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Second row - Right to Left (Parallax effect) */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6 w-fit"
              animate={{
                x: [-100 * techStack.length, 0],
              }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
              style={{ width: `${duplicatedTechStack.length * 200}px` }}
            >
              {duplicatedTechStack
                .slice()
                .reverse()
                .map((tech, index) => (
                  <motion.div
                    key={`row2-${index}`}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.1,
                      y: -10,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                    className="flex-shrink-0 w-48"
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group cursor-pointer">
                      <div className="flex flex-col items-center space-y-4">
                        <motion.div
                          className={`w-16 h-16 rounded-full ${tech.color} flex items-center justify-center p-3 group-hover:scale-110 transition-transform duration-300`}
                          whileHover={{ rotate: -360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Image
                            src={tech.icon || "/placeholder.svg"}
                            alt={tech.name}
                            width={40}
                            height={40}
                            className="w-10 h-10 object-contain filter brightness-0 invert"
                          />
                        </motion.div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white text-center">{tech.name}</h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </div>
        </div>

        {/* Mobile Grid (Hidden on larger screens) */}
        <motion.div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8" variants={containerVariants}>
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group">
                <div className="flex flex-col items-center space-y-3">
                  <motion.div
                    className={`w-12 h-12 rounded-full ${tech.color} flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src={tech.icon || "/placeholder.svg"}
                      alt={tech.name}
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain filter brightness-0 invert"
                    />
                  </motion.div>
                  <h3 className="text-xs font-semibold text-gray-900 dark:text-white text-center">{tech.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating animation elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full opacity-60"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-20 right-20 w-3 h-3 bg-purple-400 rounded-full opacity-60"
            animate={{
              y: [0, 15, 0],
              x: [0, -15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute bottom-10 left-1/4 w-2 h-2 bg-green-400 rounded-full opacity-60"
            animate={{
              y: [0, -25, 0],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            }}
          />

          {/* Additional parallax elements */}
          <motion.div
            className="absolute top-1/2 right-10 w-4 h-4 bg-yellow-400 rounded-full opacity-40"
            animate={{
              y: [0, -30, 0],
              x: [0, -20, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 3,
            }}
          />
          <motion.div
            className="absolute bottom-20 right-1/3 w-3 h-3 bg-cyan-400 rounded-full opacity-50"
            animate={{
              y: [0, 20, 0],
              x: [0, 15, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 7,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 4,
            }}
          />
        </div>

        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-800 dark:to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent dark:from-gray-800 dark:to-transparent pointer-events-none z-10" />
      </motion.div>
    </section>
  )
}
