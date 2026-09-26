import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "../components/navigation"
import { Footer } from "../components/footer"
import { CartProvider } from "../components/cart-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fundo Agroecológico | Berries de Pachacámac, Lima",
  description:
    "Conoce las berries que cultivamos en Pachacámac, Lima. Consulta disponibilidad y condiciones directamente con el fundo.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <CartProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
