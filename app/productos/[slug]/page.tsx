import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, MapPin } from "lucide-react"
import { AddToCartButton } from "../../../components/add-to-cart-button"
import { getProduct, products } from "../../../lib/products"
import { whatsappUrl } from "../../../lib/whatsapp"

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

export default async function ProductoDetallePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) notFound()

  const inquiryLink = whatsappUrl(
    `Hola, quisiera consultar disponibilidad y precio de ${product.name} (${product.variety}).`,
  )

  return (
    <div className="bg-[#F7F8F2] text-[#143322]">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12">
        <Link
          href="/productos"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E5A38] hover:text-[#143322]"
        >
          <ArrowLeft className="h-4 w-4" /> Volver al catálogo
        </Link>

        <article className="mt-7 grid overflow-hidden border border-[#E1E6DD] bg-white lg:grid-cols-2">
          <div className="relative min-h-[320px] bg-[#EEF2E8] sm:min-h-[480px]">
            <Image
              src={product.image}
              alt={`${product.name} del Fundo Agroecológico`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#64804E]">Cosecha del fundo</p>
            <h1 className="mt-3 font-serif text-4xl text-[#143322] sm:text-5xl">{product.name}</h1>
            <p className="mt-3 text-sm text-[#657267]">Variedad {product.variety}</p>
            <p className="mt-6 text-lg leading-8 text-[#526558]">{product.description}</p>

            <div className="mt-7 flex items-start gap-3 border-y border-[#E6EAE3] py-5 text-sm text-[#526558]">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#1E5A38]" />
              <div>
                <p className="font-semibold text-[#143322]">Origen: Pachacámac, Lima</p>
                <p className="mt-1">Disponibilidad sujeta a consulta directa con el fundo.</p>
              </div>
            </div>

            <div className="mt-7">
              {product.price !== null ? (
                <>
                  <p className="text-3xl font-semibold text-[#1E5A38]">
                    S/ {product.price}<span className="ml-1 text-base font-normal text-[#68766A]">/ kg</span>
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[#68766A]">
                    Precio referencial del prototipo; confirmar vigencia y stock antes de pagar.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <AddToCartButton slug={product.slug} />
                    <a
                      href={inquiryLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-11 items-center justify-center border border-[#1E5A38] px-4 font-semibold text-[#1E5A38] hover:bg-[#EAF1DF]"
                    >
                      Consultar por WhatsApp
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <p className="font-semibold text-[#143322]">Consultar precio y disponibilidad</p>
                  <a
                    href={inquiryLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-[#1E5A38] px-4 font-semibold text-white hover:bg-[#143322]"
                  >
                    Consultar por WhatsApp
                  </a>
                </>
              )}
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}