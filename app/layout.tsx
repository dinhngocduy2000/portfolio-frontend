import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dinh Ngoc Duy - Front-End Developer",
  description:
    "Experienced Front-End Developer specializing in ReactJS, NextJS, and React Native. Building modern, responsive web and mobile applications.",
  keywords: "Front-End Developer, ReactJS, NextJS, React Native, TypeScript, Full-Stack Developer, Hanoi, Vietnam",
  authors: [{ name: "Dinh Ngoc Duy" }],
  openGraph: {
    title: "Dinh Ngoc Duy - Front-End Developer",
    description: "Experienced Front-End Developer specializing in ReactJS, NextJS, and React Native.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
