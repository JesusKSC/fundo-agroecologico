"use client"

import { useState, type FormEvent } from "react"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { whatsappUrl } from "../../lib/whatsapp"

export default function ContactosPage() {
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", tipo: "", mensaje: "" })

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const message = [
      "Hola, tengo una consulta desde la web de Fundo Agroecológico.",
      "Nombre: " + form.nombre,
      "Email: " + form.email,
      "Teléfono: " + (form.telefono || "No indicado"),
      "Tipo de consulta: " + (form.tipo || "General"),
      "Mensaje: " + form.mensaje,
    ].join("\n")
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer")
  }

  return (
    <div className="bg-[#F7F8F2] text-[#143322]">
      <section className="bg-[#143322] text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#D8EAA8]">Contacto directo</p>
          <h1 className="font-serif text-5xl sm:text-6xl">Conversemos.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#E0E9D9]">Escríbenos para consultar disponibilidad, variedades o conversar sobre una oportunidad comercial.</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-16">
        <div>
          <h2 className="font-serif text-3xl">Estamos listos para escucharte.</h2>
          <p className="mt-3 leading-7 text-[#59685B]">Respondemos consultas directamente desde el fundo en Pachacámac.</p>
          <div className="mt-8 space-y-5 border-t border-[#DCE3D8] pt-6 text-sm">
            <a href="tel:+51907734951" className="flex items-center gap-3 hover:text-[#1E5A38]"><Phone className="h-4 w-4 text-[#1E5A38]" /> +51 907 734 951</a>
            <a href="mailto:contacto@fundoagroecologico.com" className="flex items-center gap-3 hover:text-[#1E5A38]"><Mail className="h-4 w-4 text-[#1E5A38]" /> contacto@fundoagroecologico.com</a>
            <a href="https://www.google.com/maps/search/?api=1&query=Manchay+Bajo%2C+Pachac%C3%A1mac%2C+Lima" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-[#1E5A38]"><MapPin className="h-4 w-4 text-[#1E5A38]" /> Manchay Bajo, Pachacámac, Lima</a>
          </div>
        </div>
        <form onSubmit={submit} className="space-y-5 border border-[#E1E6DD] bg-white p-5 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium" htmlFor="nombre">Nombre *<input id="nombre" value={form.nombre} onChange={event => setForm({ ...form, nombre: event.target.value })} required className="min-h-11 border border-[#DCE3D8] px-3 outline-none focus:border-[#1E5A38]" /></label>
            <label className="grid gap-2 text-sm font-medium" htmlFor="telefono">Teléfono<input id="telefono" type="tel" value={form.telefono} onChange={event => setForm({ ...form, telefono: event.target.value })} className="min-h-11 border border-[#DCE3D8] px-3 outline-none focus:border-[#1E5A38]" /></label>
          </div>
          <label className="grid gap-2 text-sm font-medium" htmlFor="email">Correo electrónico *<input id="email" type="email" value={form.email} onChange={event => setForm({ ...form, email: event.target.value })} required className="min-h-11 border border-[#DCE3D8] px-3 outline-none focus:border-[#1E5A38]" /></label>
          <label className="grid gap-2 text-sm font-medium" htmlFor="tipo">Tipo de consulta<select id="tipo" value={form.tipo} onChange={event => setForm({ ...form, tipo: event.target.value })} className="min-h-11 border border-[#DCE3D8] bg-white px-3 outline-none focus:border-[#1E5A38]"><option value="">Selecciona una opción</option><option value="Pedido">Realizar pedido</option><option value="Productos">Información de productos</option><option value="Mayorista">Venta mayorista</option><option value="Visita">Visita al fundo</option><option value="Otro">Otro</option></select></label>
          <label className="grid gap-2 text-sm font-medium" htmlFor="mensaje">Mensaje *<textarea id="mensaje" value={form.mensaje} onChange={event => setForm({ ...form, mensaje: event.target.value })} required rows={5} className="border border-[#DCE3D8] p-3 outline-none focus:border-[#1E5A38]" /></label>
          <button type="submit" className="inline-flex min-h-12 w-full items-center justify-center gap-2 bg-[#1E5A38] px-5 font-semibold text-white hover:bg-[#143322]">Continuar por WhatsApp <Send className="h-4 w-4" /></button>
        </form>
      </section>
    </div>
  )
}
