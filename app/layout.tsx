import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "../components/navigation"
import { Footer } from "../components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fundo Agroecológico - Fresas y Frambuesas Orgánicas",
  description:
    "Producimos fresas y frambuesas hidropónicas orgánicas de la más alta calidad en Lima, Perú. Certificación orgánica 2024.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
