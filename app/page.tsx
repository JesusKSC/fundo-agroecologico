import Image from "next/image"
import Link from "next/link"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Leaf, Award, Truck, Shield, Star, ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                <Award className="w-4 h-4 mr-2" />
                Certificación Orgánica 2024
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Fresas y Frambuesas
                <span className="block text-green-200">100% Orgánicas</span>
              </h1>
              <p className="text-xl text-green-100 max-w-lg">
                Cultivamos con amor y tecnología hidropónica las frutas más frescas y nutritivas, directamente del campo
                a tu mesa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
                  <Link href="/productos" className="flex items-center">
                    Ver Productos
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="/nosotros">Conoce Nuestra Historia</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold">10%</div>
                    <div className="text-green-200">Incremento en Ventas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">5%</div>
                    <div className="text-green-200">Reducción de Costos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-green-200">Orgánico</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">2024</div>
                    <div className="text-green-200">Certificación</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Productos</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Frutas hidropónicas de la más alta calidad, cultivadas con técnicas sostenibles
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-0 bg-white">
              <div className="relative h-64 bg-gradient-to-br from-red-50 to-pink-50">
                <Image
                  src="/fresa.jpg"
                  alt="Fresas Orgánicas"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-green-500 text-white">
                  <Leaf className="w-3 h-3 mr-1" />
                  Orgánico
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Fresas</h3>
                <p className="text-gray-600 mb-4">
                  Fresas jugosas y dulces, cultivadas sin pesticidas en ambiente controlado
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold text-green-600">S/ 15</div>
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Link href="/productos">Pedir Ahora</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-0 bg-white">
              <div className="relative h-64 bg-gradient-to-br from-purple-50 to-pink-50">
                <Image
                  src="/frambruesas.jpeg"
                  alt="Frambuesas Orgánicas"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-green-500 text-white">
                  <Leaf className="w-3 h-3 mr-1" />
                  Orgánico
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Frambuesas</h3>
                <p className="text-gray-600 mb-4">
                  Frambuesas antioxidantes y deliciosas, perfectas para una alimentación saludable
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold text-green-600">S/ 20</div>
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Link href="/productos">Pedir Ahora</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ventajas Competitivas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">¿Por Qué Elegirnos?</h2>
            <p className="text-xl text-gray-600">Comprometidos con la calidad y la sostenibilidad</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Orgánico</h3>
              <p className="text-gray-600">Certificación orgánica oficial, sin químicos ni pesticidas</p>
            </div>

            <div className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Calidad Garantizada</h3>
              <p className="text-gray-600">Proceso de cultivo controlado para máxima calidad</p>
            </div>

            <div className="text-center group">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <Truck className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Entrega Fresca</h3>
              <p className="text-gray-600">Del campo a tu mesa en menos de 24 horas</p>
            </div>

            <div className="text-center group">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Experiencia</h3>
              <p className="text-gray-600">Años de experiencia en cultivo hidropónico</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">¿Listo para Probar la Diferencia?</h2>
          <p className="text-xl mb-8 text-green-100">
            Únete a cientos de familias que ya disfrutan de nuestros productos orgánicos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
              <Link href="/productos">Ver Todos los Productos</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/contactos">Contactar Ahora</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
