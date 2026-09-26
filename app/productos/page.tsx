import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Leaf } from "lucide-react"
import { AddToCartButton } from "../../components/add-to-cart-button"
import { products } from "../../lib/products"
import { whatsappUrl } from "../../lib/whatsapp"

export default function ProductosPage() {
  return (
    <div className="bg-[#F7F8F2] text-[#143322]">
      <section className="bg-[#143322] text-white">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
          <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#D8EAA8]">
            <span className="h-px w-8 bg-[#B7D977]" />
            Del campo a tu mesa
          </p>
          <h1 className="font-serif text-5xl leading-tight sm:text-6xl">Lo que cultivamos</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#E0E9D9]">
            Conoce las frutas que cuidamos desde el origen en Pachacámac. Consulta disponibilidad y condiciones directamente con el fundo.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-12">
        <div className="mb-8 flex items-start gap-3 border-l-2 border-[#B7D977] bg-white px-5 py-4 text-sm leading-6 text-[#526558]">
          <Leaf className="mt-0.5 h-4 w-4 shrink-0 text-[#1E5A38]" />
          <p>La certificación SENASA – Orgánico Perú se encuentra en trámite. Los precios mostrados son referencias del prototipo.</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {products.map((product) => {
            const inquiryLink = whatsappUrl(`Hola, quisiera consultar disponibilidad y precio de ${product.name} (${product.variety}).`)
            return (
              <article key={product.slug} className="group grid overflow-hidden border border-[#E1E6DD] bg-white sm:grid-cols-[0.9fr_1.1fr]">
                <Link href={`/productos/${product.slug}`} className="relative min-h-64 overflow-hidden bg-[#EEF2E8] sm:min-h-80">
                  <Image
                    src={product.image}
                    alt={`${product.name} del Fundo Agroecológico`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-2 bg-[#F7F8F2] px-3 py-2 text-xs font-semibold text-[#143322]">
                    <Leaf className="h-3.5 w-3.5 text-[#1E5A38]" />
                    {product.variety}
                  </span>
                </Link>

                <div className="flex flex-col justify-between p-5 sm:p-6">
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#64804E]">Pachacámac · Lima</p>
                    <h2 className="font-serif text-3xl leading-tight text-[#143322]">
                      <Link href={`/productos/${product.slug}`} className="hover:text-[#1E5A38]">{product.name}</Link>
                    </h2>
                    <p className="mt-3 leading-6 text-[#59685B]">{product.description}</p>
                  </div>

                  <div className="mt-7 flex flex-wrap items-end justify-between gap-4 border-t border-[#E6EAE3] pt-5">
                    <div>
                      {product.price !== null ? (
                        <>
                          <p className="text-2xl font-semibold text-[#1E5A38]">
                            S/ {product.price}<span className="ml-1 text-sm font-normal text-[#68766A]">/ kg</span>
                          </p>
                          <p className="mt-1 text-xs text-[#68766A]">Precio referencial</p>
                        </>
                      ) : (
                        <p className="text-sm font-semibold text-[#526558]">Consultar disponibilidad</p>
                      )}
                    </div>
                    {product.price !== null ? (
                      <AddToCartButton slug={product.slug} />
                    ) : (
                      <a
                        href={inquiryLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border border-[#1E5A38] px-4 font-semibold text-[#1E5A38] hover:bg-[#EAF1DF]"
                      >
                        Consultar <ArrowRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                  <Link href={`/productos/${product.slug}`} className="mt-4 text-sm font-semibold text-[#1E5A38] hover:text-[#143322]">
                    Ver detalle <ArrowRight className="ml-1 inline h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}
