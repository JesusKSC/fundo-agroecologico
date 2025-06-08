import Link from "next/link"
import { Leaf, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y Descripción */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-green-500 w-10 h-10 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl">Fundo Agroecológico</span>
            </div>
            <p className="text-gray-300 text-sm">
              Producimos fresas y frambuesas hidropónicas orgánicas de la más alta calidad, comprometidos con la
              sostenibilidad y la salud de nuestros clientes.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-green-400 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/productos" className="text-gray-300 hover:text-green-400 transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-gray-300 hover:text-green-400 transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contactos" className="text-gray-300 hover:text-green-400 transition-colors">
                  Contactos
                </Link>
              </li>
            </ul>
          </div>

          {/* Productos */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Productos</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Fresas Hidropónicas</li>
              <li className="text-gray-300">Frambuesas Orgánicas</li>
              <li className="text-gray-300">Mix de Berries</li>
              <li className="text-gray-300">Productos Estacionales</li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-green-400" />
                <span className="text-gray-300 text-sm">+51 999 888 777</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-green-400" />
                <span className="text-gray-300 text-sm">contacto@fundoagroecologico.pe</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-green-400" />
                <span className="text-gray-300 text-sm">Lurín, Lima - Perú</span>
              </div>
            </div>
          </div>
        </div>

        {/* Redes Sociales y Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">© 2024 Fundo Agroecológico. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
