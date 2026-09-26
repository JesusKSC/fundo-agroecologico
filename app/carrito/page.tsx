"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, type FormEvent } from "react"
import { ArrowLeft, Minus, Plus, Trash2 } from "lucide-react"
import { useCart } from "../../components/cart-provider"
import { getProduct } from "../../lib/products"
import { whatsappUrl } from "../../lib/whatsapp"

export default function CarritoPage() {
  const { items, total, loaded, setQuantity, removeItem } = useCart()
  const [nombre, setNombre] = useState("")
  const [distrito, setDistrito] = useState("")
  const [direccion, setDireccion] = useState("")

  function submitOrder(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const lines = items.flatMap((item) => {
      const product = getProduct(item.slug)
      if (!product) return []
      return [`- ${item.quantity} kg ${product.name} (${product.variety}): S/ ${(product.price ?? 0) * item.quantity} referencial`]
    })
    const message = [
      "Hola, quisiera confirmar este pedido:",
      ...lines,
      `Subtotal referencial: S/ ${total}`,
      `Nombre: ${nombre}`,
      `Distrito: ${distrito}`,
      `Dirección: ${direccion || "Por coordinar"}`,
      "Entiendo que precio, stock y delivery deben ser confirmados por el fundo.",
    ].join("\n")
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer")
  }

  if (!loaded) {
    return <div className="min-h-[55vh] bg-[#F7F8F2] px-5 py-16 text-center text-[#526558]">Cargando carrito...</div>
  }

  const cartItems = items.flatMap((item) => {
    const product = getProduct(item.slug)
    return product ? [{ ...item, product }] : []
  })

  return (
    <div className="min-h-[60vh] bg-[#F7F8F2] text-[#143322]">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-12">
        <Link href="/productos" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E5A38]">
          <ArrowLeft className="h-4 w-4" /> Seguir viendo productos
        </Link>
        <h1 className="mt-5 font-serif text-4xl sm:text-5xl">Tu carrito</h1>

        {cartItems.length === 0 ? (
          <div className="mt-8 border border-[#E1E6DD] bg-white p-8 sm:p-12">
            <p className="text-lg text-[#526558]">Aún no agregaste productos.</p>
            <Link
              href="/productos"
              className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-[#1E5A38] px-5 font-semibold text-white hover:bg-[#143322]"
            >
              Explorar catálogo <ArrowLeft className="h-4 w-4 rotate-180" />
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <section className="space-y-3" aria-label="Productos en el carrito">
              {cartItems.map(({ slug, quantity, product }) => (
                <article key={slug} className="grid grid-cols-[88px_1fr] gap-4 border border-[#E1E6DD] bg-white p-4 sm:grid-cols-[120px_1fr_auto] sm:items-center sm:gap-5">
                  <div className="relative h-24 w-[88px] bg-[#EEF2E8] sm:h-28 sm:w-[120px]">
                    <Image src={product.image} alt={product.name} fill sizes="120px" className="object-cover" />
                  </div>
                  <div>
                    <Link href={`/productos/${slug}`} className="font-serif text-2xl hover:text-[#1E5A38]">
                      {product.name}
                    </Link>
                    <p className="mt-1 text-sm text-[#657267]">{product.variety} · S/ {product.price} referencial/kg</p>
                    <div className="mt-3 flex items-center gap-2">
                      <button
                        type="button"
                        aria-label={`Reducir cantidad de ${product.name}`}
                        onClick={() => setQuantity(slug, quantity - 1)}
                        className="inline-flex h-8 w-8 items-center justify-center border border-[#DCE3D8] hover:bg-[#EAF1DF]"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="min-w-8 text-center text-sm">{quantity} kg</span>
                      <button
                        type="button"
                        aria-label={`Aumentar cantidad de ${product.name}`}
                        onClick={() => setQuantity(slug, quantity + 1)}
                        className="inline-flex h-8 w-8 items-center justify-center border border-[#DCE3D8] hover:bg-[#EAF1DF]"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                  <div className="col-span-2 flex items-center justify-between border-t border-[#E6EAE3] pt-3 sm:col-span-1 sm:block sm:border-0 sm:pt-0 sm:text-right">
                    <p className="font-semibold">S/ {(product.price ?? 0) * quantity}</p>
                    <button
                      type="button"
                      onClick={() => removeItem(slug)}
                      className="inline-flex items-center gap-1 text-sm text-[#68766A] hover:text-red-700 sm:mt-3"
                    >
                      <Trash2 className="h-4 w-4" /> Quitar
                    </button>
                  </div>
                </article>
              ))}
            </section>

            <section className="h-fit border border-[#E1E6DD] bg-white p-5 sm:p-6">
              <h2 className="font-serif text-2xl">Coordinar pedido</h2>
              <p className="mt-2 text-sm leading-6 text-[#59685B]">
                Este es un pedido de consulta, no un pago en línea. El fundo confirmará disponibilidad, precio vigente y delivery por WhatsApp.
              </p>
              <div className="mt-5 flex items-center justify-between border-y border-[#E6EAE3] py-4">
                <span className="font-medium">Subtotal referencial</span>
                <span className="text-xl font-semibold text-[#1E5A38]">S/ {total}</span>
              </div>
              <form onSubmit={submitOrder} className="mt-5 space-y-4">
                <label className="block text-sm font-medium" htmlFor="nombre">Nombre</label>
                <input id="nombre" value={nombre} onChange={(event) => setNombre(event.target.value)} required className="-mt-3 min-h-11 w-full border border-[#DCE3D8] px-3 outline-none focus:border-[#1E5A38]" />
                <label className="block text-sm font-medium" htmlFor="distrito">Distrito de entrega</label>
                <input id="distrito" value={distrito} onChange={(event) => setDistrito(event.target.value)} required className="-mt-3 min-h-11 w-full border border-[#DCE3D8] px-3 outline-none focus:border-[#1E5A38]" />
                <label className="block text-sm font-medium" htmlFor="direccion">Dirección (opcional)</label>
                <input id="direccion" value={direccion} onChange={(event) => setDireccion(event.target.value)} className="-mt-3 min-h-11 w-full border border-[#DCE3D8] px-3 outline-none focus:border-[#1E5A38]" />
                <button type="submit" className="min-h-12 w-full bg-[#1E5A38] px-5 font-semibold text-white hover:bg-[#143322]">
                  Enviar pedido por WhatsApp
                </button>
              </form>
            </section>
          </div>
        )}
      </div>
    </div>
  )
}