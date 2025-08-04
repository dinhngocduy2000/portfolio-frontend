"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const contactInfo = [
    { icon: Mail, text: "ngocduydinh2000@gmail.com", href: "mailto:ngocduydinh2000@gmail.com", color: "text-blue-600" },
    { icon: Phone, text: "(+84) 0329400491", href: "tel:+84329400491", color: "text-green-600" },
    { icon: MapPin, text: "Hoan Kiem District, Hanoi, Vietnam", href: "#", color: "text-red-600" },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/dylan-dinh-2262992b8/",
      color: "hover:text-blue-600 dark:hover:text-blue-400",
    },
    { icon: Github, href: "https://github.com", color: "hover:text-gray-900 dark:hover:text-white" },
  ]

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
            variants={itemVariants}
          >
            Get In Touch
          </motion.h2>

          <motion.div className="grid lg:grid-cols-2 gap-12" variants={containerVariants}>
            <motion.div variants={itemVariants}>
              <motion.h3
                className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white"
                initial={{ x: -50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Let's Work Together
              </motion.h3>

              <motion.p
                className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
                initial={{ x: -50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                I'm always interested in new opportunities and exciting projects. Whether you're looking for a front-end
                developer, full-stack developer, or someone to help bring your ideas to life, I'd love to hear from you.
              </motion.p>

              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ x: -30, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <motion.div whileHover={{ scale: 1.2, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                      <contact.icon className={`w-5 h-5 ${contact.color}`} />
                    </motion.div>
                    {contact.href.startsWith("mailto:") || contact.href.startsWith("tel:") ? (
                      <Link
                        href={contact.href}
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {contact.text}
                      </Link>
                    ) : (
                      <span className="text-gray-600 dark:text-gray-400">{contact.text}</span>
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="flex gap-4 mt-8"
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                {socialLinks.map((social, index) => (
                  <motion.div key={index} whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                    <Link
                      href={social.href}
                      target="_blank"
                      className={`text-gray-600 dark:text-gray-400 transition-colors ${social.color}`}
                    >
                      <social.icon className="w-6 h-6" />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">Send Me a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <motion.div
                      className="grid grid-cols-2 gap-4"
                      initial={{ y: 20, opacity: 0 }}
                      animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      <Input placeholder="First Name" className="transition-all duration-300 focus:scale-105" />
                      <Input placeholder="Last Name" className="transition-all duration-300 focus:scale-105" />
                    </motion.div>

                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                    >
                      <Input
                        type="email"
                        placeholder="Email Address"
                        className="transition-all duration-300 focus:scale-105"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                      transition={{ duration: 0.5, delay: 1.0 }}
                    >
                      <Input placeholder="Subject" className="transition-all duration-300 focus:scale-105" />
                    </motion.div>

                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                      transition={{ duration: 0.5, delay: 1.1 }}
                    >
                      <Textarea
                        placeholder="Your Message"
                        rows={5}
                        className="transition-all duration-300 focus:scale-105"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                      transition={{ duration: 0.5, delay: 1.2 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button type="submit" className="w-full group">
                        <span className="flex items-center gap-2">
                          Send Message
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                          >
                            <Send className="w-4 h-4" />
                          </motion.div>
                        </span>
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
