import Image from "next/image"
import { Card, CardContent } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { Leaf, Award, Users, Target, Heart, Sprout } from "lucide-react"

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Nuestra Historia</h1>
            <p className="text-xl text-green-100 leading-relaxed">
              Nuestra historia inicia en la época escolar y, al culminar la universidad,
               se abrazó la premisa “Un sueño puede cambiar tu vida” para fundar Fundo
                Agroecológico Berries, innovando en Lima con sistemas hidropónicos y prácticas
                 agroecológicas en el cultivo de fresas y frambuesas.
            </p>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestro Compromiso</h2>
                <p className="text-lg text-gray-600 mb-6">
                
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  En Fundo Agroecológico nos comprometemos a producir fresas y frambuesas
                   de la más alta calidad utilizando prácticas 100 % orgánicas y amigables 
                   con el medio ambiente, combinando el cultivo hidropónico con métodos de 
                   biocontrol para garantizar productos libres de agroquímicos. Creemos en 
                   la conservación del agua y la salud del suelo, por lo que empleamos sistemas
                    de riego tecnificado que reducen significativamente el consumo y reutilizamos 
                    insumos biodegradables siempre que es posible. Además, fomentamos la capacitación 
                    continua de nuestro equipo y compartimos conocimientos con la comunidad local para
                     impulsar la agricultura sostenible en la región. Cada fruto que llega a tus manos
                      es fruto de un proceso trazable, responsable y orientado al bienestar de nuestros
                       colaboradores y de quienes nos rodean. .
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-green-100 text-green-800 px-4 py-2">
                    <Award className="w-4 h-4 mr-2" />
                    Certificación Orgánica 2024
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-800 px-4 py-2">
                    <Sprout className="w-4 h-4 mr-2" />
                    Cultivo Hidropónico
                  </Badge>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <Image
                    src="/nuestrocompromiso.jpg"
                    alt="Fundo Agroecológico"
                    width={500}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logros 2024 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Logros 2024</h2>
              <p className="text-xl text-gray-600">Un año de crecimiento y reconocimientos</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center p-6 border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-600 mb-2">Certificación</h3>
                  <p className="text-gray-600">Orgánica Oficial</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">+10%</h3>
                  <p className="text-gray-600">Incremento en Ventas</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-600 mb-2">-5%</h3>
                  <p className="text-gray-600">Reducción de Costos</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-yellow-600 mb-2">Persona</h3>
                  <p className="text-gray-600">Jurídica Formalizada</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="p-8 border-0 shadow-xl bg-gradient-to-br from-green-50 to-emerald-50">
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">Misión</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Producir y comercializar fresas y frambuesas hidropónicas de la más alta calidad, utilizando
                    técnicas sostenibles y tecnología avanzada, para ofrecer a nuestros clientes productos frescos,
                    nutritivos y libres de químicos dañinos.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 border-0 shadow-xl bg-gradient-to-br from-blue-50 to-cyan-50">
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <Leaf className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">Visión</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Ser el líder en la producción y comercialización de frambruesas en la región de Lima, a través de prácticas 
                    agroecológicas innovadores y sostenibles.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso de Cultivo */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestro Proceso</h2>
              <p className="text-xl text-gray-600">Tecnología hidropónica para máxima calidad</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Siembra Controlada</h3>
                <p className="text-gray-600">
                  Seleccionamos las mejores semillas y las cultivamos en un ambiente completamente controlado sin uso de
                  tierra.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Nutrición Precisa</h3>
                <p className="text-gray-600">
                  Proporcionamos nutrientes específicos a través de soluciones acuosas balanceadas para un crecimiento
                  óptimo.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Cosecha Fresca</h3>
                <p className="text-gray-600">
                  Cosechamos en el punto perfecto de maduración para garantizar el mejor sabor y valor nutricional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
