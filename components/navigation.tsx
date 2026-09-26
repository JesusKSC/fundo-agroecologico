"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet"
import { Leaf, Menu, ShoppingCart } from "lucide-react"
import { useCart } from "./cart-provider"

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/productos", label: "Productos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contactos", label: "Contactos" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { itemCount } = useCart()

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#DCE3D8] bg-[#F7F8F2]/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-[#143322]">
            <span className="inline-flex h-9 w-9 items-center justify-center bg-[#1E5A38]"><Leaf className="h-5 w-5 text-[#B7D977]" /></span>
            <span className="hidden font-serif text-lg sm:inline">Fundo Agroecológico</span>
          </Link>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Principal">
            {navItems.map(item => <Link key={item.href} href={item.href} className={"text-sm font-medium transition-colors hover:text-[#1E5A38] " + (isActive(item.href) ? "text-[#1E5A38]" : "text-[#526558]")}>{item.label}</Link>)}
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/carrito" aria-label={"Carrito, " + itemCount + " productos"} className="relative inline-flex h-10 w-10 items-center justify-center rounded-sm text-[#143322] hover:bg-[#EAF1DF]">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && <span className="absolute -right-1 -top-1 min-w-5 rounded-full bg-[#B7D977] px-1 text-center text-xs font-bold leading-5">{itemCount}</span>}
            </Link>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild><Button variant="ghost" size="icon" className="md:hidden" aria-label="Abrir menú"><Menu className="h-5 w-5" /></Button></SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-[#F7F8F2]">
                <nav className="mt-8 flex flex-col gap-5" aria-label="Móvil">
                  {navItems.map(item => <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)} className={"text-lg font-medium " + (isActive(item.href) ? "text-[#1E5A38]" : "text-[#526558]")}>{item.label}</Link>)}
                  <Link href="/carrito" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-lg font-medium text-[#143322]"><ShoppingCart className="h-5 w-5" /> Carrito ({itemCount})</Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
