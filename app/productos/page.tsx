import Image from "next/image"
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { Leaf, Star, ShoppingCart, Heart } from "lucide-react"

export default function ProductosPage() {
  const productos = [
    {
      id: 1,
      nombre: "Fresas Hidropónicas Premium",
      precio: 15,
      descripcion: "Fresas jugosas y dulces, cultivadas en ambiente controlado sin pesticidas",
      imagen: "/fresa.jpg",
      categoria: "Fresas",
      disponible: true,
      rating: 4.9,
      beneficios: ["Rico en Vitamina C", "Antioxidantes naturales", "Bajo en calorías"],
    },
    {
      id: 2,
      nombre: "Frambuesas Hidropónicas Premium",
      precio: 20,
      descripcion: "Frambuesas antioxidantes y deliciosas, perfectas para una alimentación saludable",
      imagen: "/frambruesas.jpeg",
      categoria: "Frambuesas",
      disponible: true,
      rating: 4.8,
      beneficios: ["Alto en fibra", "Antioxidantes potentes", "Vitaminas A y C"],
    },
    {
      id: 3,
      nombre: "Mix de Berries Orgánicas",
      precio: 30,
      descripcion: "Combinación perfecta de fresas y frambuesas frescas",
      imagen: "/berries.jpeg", // Puedes usar fresa.jpg como imagen principal
      categoria: "Mix",
      disponible: true,
      rating: 5.0,
      beneficios: ["Variedad de sabores", "Máximo valor nutricional", "Perfecto para smoothies"],
    },
    {
      id: 4,
      nombre: "Fresas Baby Orgánicas",
      precio: 18,
      descripcion: "Fresas pequeñas y concentradas en sabor, ideales para postres",
      imagen: "/fresa.jpg",
      categoria: "Fresas",
      disponible: false,
      rating: 4.7,
      beneficios: ["Sabor concentrado", "Perfectas para decorar", "Textura única"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header Section */}
    <section 
      className="text-white py-16"
      style={{
        backgroundImage: "url('/captura.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "50% 20%",
        backgroundRepeat: "no-repeat",
      }}>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <ShoppingCart className="w-12 h-12 mr-4" />
              <h1 className="text-5xl font-bold">PRODUCTOS</h1>
            </div>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Descubre nuestra selección de frutas hidropónicas orgánicas, cultivadas con amor y tecnología sostenible
            </p>
          </div>
        </div>
      </section>

      {/* Productos Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {productos.map((producto) => (
              <Card
                key={producto.id}
                className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-0 bg-white"
              >
                <div className="relative h-80 bg-gradient-to-br from-red-50 to-pink-50">
                  <Image
                    src={producto.imagen || "/placeholder.svg"}
                    alt={producto.nombre}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-green-500 text-white">
                      <Leaf className="w-3 h-3 mr-1" />
                      Orgánico
                    </Badge>
                    {!producto.disponible && <Badge variant="destructive">Agotado</Badge>}
                  </div>
                  <Button size="icon" variant="secondary" className="absolute top-4 right-4 bg-white/80 hover:bg-white">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(producto.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({producto.rating})</span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{producto.nombre}</h3>
                  <p className="text-gray-600 mb-4">{producto.descripcion}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Beneficios:</h4>
                    <div className="flex flex-wrap gap-2">
                      {producto.beneficios.map((beneficio, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {beneficio}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold text-green-600">
                      S/ {producto.precio}
                      <span className="text-sm text-gray-500 font-normal">/kg</span>
                    </div>
                    <Button
                      className={`${
                        producto.disponible ? "bg-green-600 hover:bg-green-700" : "bg-gray-400 cursor-not-allowed"
                      }`}
                      disabled={!producto.disponible}
                    >
                      {producto.disponible ? "Pedir Ahora" : "No Disponible"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Información Adicional */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Información de Pedidos</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Pedido Mínimo</h3>
                <p className="text-gray-600">S/ 25 para delivery gratuito en Lima</p>
              </div>
              <div className="p-6 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Tiempo de Entrega</h3>
                <p className="text-gray-600">24-48 horas desde la cosecha</p>
              </div>
              <div className="p-6 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Frescura Garantizada</h3>
                <p className="text-gray-600">100% de satisfacción o devolución</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
