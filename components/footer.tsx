import Link from "next/link"
import { Instagram, Leaf, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#143322] text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center bg-[#1E5A38]"><Leaf className="h-5 w-5 text-[#B7D977]" /></span>
              <span className="font-serif text-xl">Fundo Agroecológico</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-[#D8E2D7]">Cultivando salud, cosechando futuro. Berries y frutas cuidadas desde Pachacámac, Lima.</p>
          </div>
          <nav aria-label="Enlaces del pie de página">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.1em] text-[#B7D977]">Explorar</h2>
            <ul className="space-y-3 text-sm text-[#D8E2D7]">
              <li><Link href="/" className="hover:text-white">Inicio</Link></li>
              <li><Link href="/nosotros" className="hover:text-white">Nosotros</Link></li>
              <li><Link href="/productos" className="hover:text-white">Productos</Link></li>
              <li><Link href="/contactos" className="hover:text-white">Contacto</Link></li>
              <li><Link href="/carrito" className="hover:text-white">Carrito</Link></li>
            </ul>
          </nav>
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.1em] text-[#B7D977]">Contacto directo</h2>
            <ul className="space-y-3 text-sm text-[#D8E2D7]">
              <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-[#B7D977]" /><a href="tel:+51907734951" className="hover:text-white">+51 907 734 951</a></li>
              <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-[#B7D977]" /><a href="mailto:contacto@fundoagroecologico.com" className="hover:text-white">contacto@fundoagroecologico.com</a></li>
              <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-[#B7D977]" /><span>Manchay Bajo, Pachacámac</span></li>
              <li className="flex items-center gap-3"><Instagram className="h-4 w-4 text-[#B7D977]" /><a href="https://www.instagram.com/fundoagroecologicob/" target="_blank" rel="noreferrer" className="hover:text-white">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-white/15 pt-5 text-xs text-[#B8C9B9] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Fundo Agroecológico. Todos los derechos reservados.</p>
          <a href="https://www.fundoagroecologico.com/" target="_blank" rel="noreferrer" className="hover:text-white">Sitio oficial</a>
        </div>
      </div>
    </footer>
  )
}
