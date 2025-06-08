"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Textarea } from "../../components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react"

export default function ContactosPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipoConsulta: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Formulario enviado:", formData)
    alert("¡Gracias por tu mensaje! Te contactaremos pronto.")
    // Reset form
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      tipoConsulta: "",
      mensaje: "",
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <MessageCircle className="w-12 h-12 mr-4" />
              <h1 className="text-5xl font-bold">CONTACTOS</h1>
            </div>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              ¿Tienes alguna pregunta o quieres hacer un pedido? Estamos aquí para ayudarte
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Información de Contacto */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Información de Contacto</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Nos encanta escuchar de nuestros clientes. Contáctanos por cualquiera de estos medios y te
                    responderemos lo antes posible.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                          <Phone className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Teléfono</h3>
                          <p className="text-gray-600">+51 999 888 777</p>
                          <p className="text-sm text-gray-500">Lunes a Sábado: 8:00 AM - 6:00 PM</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                          <Mail className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Email</h3>
                          <p className="text-gray-600">contacto@fundoagroecologico.pe</p>
                          <p className="text-sm text-gray-500">Respuesta en 24 horas</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                          <MapPin className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Ubicación</h3>
                          <p className="text-gray-600">Lurín, Lima - Perú</p>
                          <p className="text-sm text-gray-500">Visitas con cita previa</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                          <Clock className="w-6 h-6 text-yellow-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Horarios de Atención</h3>
                          <p className="text-gray-600">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                          <p className="text-gray-600">Sábados: 8:00 AM - 2:00 PM</p>
                          <p className="text-sm text-gray-500">Domingos: Cerrado</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Formulario de Contacto */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Envíanos un Mensaje</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="nombre">Nombre Completo *</Label>
                        <Input
                          id="nombre"
                          value={formData.nombre}
                          onChange={(e) => handleInputChange("nombre", e.target.value)}
                          placeholder="Tu nombre completo"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="telefono">Teléfono</Label>
                        <Input
                          id="telefono"
                          value={formData.telefono}
                          onChange={(e) => handleInputChange("telefono", e.target.value)}
                          placeholder="Tu número de teléfono"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="tu@email.com"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="tipoConsulta">Tipo de Consulta</Label>
                      <Select onValueChange={(value) => handleInputChange("tipoConsulta", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona el tipo de consulta" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pedido">Realizar Pedido</SelectItem>
                          <SelectItem value="informacion">Información de Productos</SelectItem>
                          <SelectItem value="mayorista">Ventas al Mayoreo</SelectItem>
                          <SelectItem value="visita">Agendar Visita</SelectItem>
                          <SelectItem value="otro">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="mensaje">Mensaje *</Label>
                      <Textarea
                        id="mensaje"
                        value={formData.mensaje}
                        onChange={(e) => handleInputChange("mensaje", e.target.value)}
                        placeholder="Cuéntanos cómo podemos ayudarte..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-lg py-3">
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Información de Compra */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">¿Cómo Comprar?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-green-50 rounded-lg">
                <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Contáctanos</h3>
                <p className="text-gray-600">Llámanos o envía un mensaje con tu pedido y datos de entrega</p>
              </div>
              <div className="p-6 bg-blue-50 rounded-lg">
                <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Confirmamos</h3>
                <p className="text-gray-600">Confirmamos disponibilidad, precio y coordinamos la entrega</p>
              </div>
              <div className="p-6 bg-purple-50 rounded-lg">
                <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Recibe</h3>
                <p className="text-gray-600">Recibe tus productos frescos en la puerta de tu casa</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
