"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Smartphone, Container } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "Front-End",
      icon: <Code className="w-6 h-6" />,
      skills: [
        "ReactJS",
        "TypeScript",
        "JavaScript",
        "NextJS",
        "CSS",
        "SCSS",
        "Redux Toolkit",
        "React Query",
        "Vite",
        "Shadcn UI",
        "TailwindCSS",
        "WebSocket",
        "Vitest",
        "React Testing Library",
        "React-Hook-Form",
      ],
    },
    {
      title: "Back-End",
      icon: <Database className="w-6 h-6" />,
      skills: ["Python FastAPI", "PostgreSQL", "RESTful APIs", "WebSocket", "Firebase", "NodeJS"],
    },
    {
      title: "Mobile",
      icon: <Smartphone className="w-6 h-6" />,
      skills: ["React Native", "Android (Java)"],
    },
    {
      title: "DevOps & Tools",
      icon: <Container className="w-6 h-6" />,
      skills: ["Docker", "Git", "Agile Development", "Team Collaboration"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800" ref={ref}>
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
            Technical Skills
          </motion.h2>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariants}>
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="h-full"
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-2 hover:border-blue-200 dark:hover:border-blue-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <motion.div initial={{ rotate: 0 }} whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                        {category.icon}
                      </motion.div>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.5 + index * 0.1 + skillIndex * 0.05,
                            type: "spring",
                            stiffness: 200,
                          }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge variant="secondary" className="text-xs cursor-default">
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
