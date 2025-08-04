"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce platform built with NextJS and FastAPI, featuring real-time inventory management, payment integration, and responsive design.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: [
        "NextJS",
        "TypeScript",
        "FastAPI",
        "PostgreSQL",
        "TailwindCSS",
        "Redux Toolkit",
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Product Management Dashboard",
      description:
        "A comprehensive product management system with hundreds of daily users, built with ReactJS and integrated with RESTful APIs for real-time data management.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: [
        "ReactJS",
        "TypeScript",
        "React Query",
        "SCSS",
        "WebSocket",
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Cross-Platform Mobile App",
      description:
        "A React Native application with native Android features, providing seamless user experience across iOS and Android platforms.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["React Native", "TypeScript", "Java", "Firebase", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Government Project Portal",
      description:
        "A secure web application delivered to the Singaporean government, featuring advanced authentication and data visualization capabilities.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: [
        "NextJS",
        "TypeScript",
        "PostgreSQL",
        "Docker",
        "Shadcn UI",
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
  ];

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

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-800"
      ref={ref}
    >
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
            initial={{ y: -50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { y: 50, opacity: 0, scale: 0.9 },
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
                }}
                whileHover={{
                  y: -10,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="group"
              >
                <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 dark:hover:border-blue-800 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                    </motion.div>
                    {project.featured && (
                      <motion.div
                        initial={{ scale: 0, rotate: -45 }}
                        animate={
                          isInView
                            ? { scale: 1, rotate: 0 }
                            : { scale: 0, rotate: -45 }
                        }
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      >
                        <Badge className="absolute top-4 left-4 bg-blue-600">
                          Featured
                        </Badge>
                      </motion.div>
                    )}

                    {/* Overlay on hover */}
                    <motion.div
                      className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <div className="flex gap-3">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Button size="sm" className="flex items-center gap-2">
                            <Link
                              href={project.liveUrl}
                              className="flex items-center gap-2"
                            >
                              <ExternalLink className="w-4 h-4" />
                              Live
                            </Link>
                          </Button>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-2 bg-white"
                          >
                            <Link
                              href={project.githubUrl}
                              className="flex items-center gap-2"
                            >
                              <Github className="w-4 h-4" />
                              Code
                            </Link>
                          </Button>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={
                            isInView
                              ? { scale: 1, opacity: 1 }
                              : { scale: 0, opacity: 0 }
                          }
                          transition={{
                            duration: 0.3,
                            delay: 0.7 + index * 0.1 + techIndex * 0.05,
                            type: "spring",
                            stiffness: 200,
                          }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex gap-3 md:opacity-100 opacity-100 md:group-hover:opacity-100 transition-opacity duration-300">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button size="sm" className="flex items-center gap-2">
                          <Link
                            href={project.liveUrl}
                            className="flex items-center gap-2"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </Link>
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-2"
                        >
                          <Link
                            href={project.githubUrl}
                            className="flex items-center gap-2"
                          >
                            <Github className="w-4 h-4" />
                            Code
                          </Link>
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
