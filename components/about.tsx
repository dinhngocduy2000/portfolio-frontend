"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Target, TrendingUp } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  const cardVariants: Variants | undefined = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
            variants={itemVariants}
          >
            About Me
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 gap-8 mb-12"
            variants={itemVariants}
          >
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Professional Summary
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Dedicated and skilled Front-End Developer with 3-4 years of
                experience specializing in ReactJS, TypeScript, React Native,
                and NextJS. Proficient in building responsive, high-performance
                web and mobile applications using modern tools like Redux
                Toolkit, React Query, and RESTful APIs.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
                Additional experience in back-end development with Python
                FastAPI, PostgreSQL, and Docker. Strong problem-solving skills
                and a passion for learning.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Location & Contact
              </h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-400">
                {[
                  "📍 Hoan Kiem District, Hanoi, Vietnam",
                  "📞 (+84) 0329400491",
                  "✉️ ngocduydinh2000@gmail.com",
                  "🎓 Bachelor's in Information Technology",
                  "🏆 TOEIC: 885/990 (Reading & Listening)",
                ].map((item, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                    }
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  >
                    {item}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={itemVariants}
          >
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <motion.div
                    className="flex items-center gap-3 mb-4"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <Target className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Short-Term Goals
                    </h3>
                  </motion.div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Transition deeper into a Full-Stack Developer role while
                    exploring AI technologies, learning DevOps and AI knowledge
                    to stay at the forefront of technology.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <motion.div
                    className="flex items-center gap-3 mb-4"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                  >
                    <TrendingUp className="w-6 h-6 text-green-600" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Long-Term Vision
                    </h3>
                  </motion.div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Advance into a Technical Leader or Project Manager position,
                    driving innovative projects and teams to deliver exceptional
                    results.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
