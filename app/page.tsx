import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Leaf, MapPin, Sprout, Truck } from "lucide-react"

const destacados = [
  {
    nombre: "Fresas",
    descripcion: "Fresas frescas cultivadas en el fundo, con todo su sabor.",
    imagen: "/fresa.jpg",
    precio: "S/ 15",
  },
  {
    nombre: "Frambuesas",
    descripcion: "Frambuesas delicadas y aromáticas, cosechadas en Lurín.",
    imagen: "/frambruesas.jpeg",
    precio: "S/ 20",
  },
]

export default function HomePage() {
  return (
    <div className="bg-[#F7F8F2] text-[#143322]">
      <section className="overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-12 lg:py-20">
          <div className="order-2 lg:order-1">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.12em] text-[#1E5A38]">
              Cultivando salud, cosechando futuro
            </p>
            <h1 className="max-w-xl font-serif text-5xl leading-[1.04] text-[#143322] sm:text-6xl lg:text-7xl">
              Berries agroecológicos del <span className="text-[#1E5A38]">Valle de Lurín.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-[#4E6254]">
              Fresas y frambuesas cultivadas con tecnología hidropónica y prácticas agroecológicas, directamente del fundo a tu mesa.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/productos"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-sm bg-[#1E5A38] px-6 font-semibold text-white transition-colors hover:bg-[#143322]"
              >
                Explorar productos <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/nosotros"
                className="inline-flex min-h-12 items-center justify-center rounded-sm border border-[#B8C5B8] px-6 font-semibold text-[#143322] transition-colors hover:border-[#1E5A38] hover:bg-white"
              >
                Conoce el fundo
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-3 border-t border-[#DCE3D8] pt-5 text-sm text-[#526558]">
              <MapPin className="h-4 w-4 shrink-0 text-[#1E5A38]" />
              <span>Producción local en el Valle de Lurín, Lima.</span>
            </div>
          </div>

          <div className="relative order-1 min-h-[300px] sm:min-h-[420px] lg:order-2 lg:min-h-[520px]">
            <Image
              src="/captura.jpg"
              alt="Producción del Fundo Agroecológico"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-[#143322]/80 to-transparent p-5 pt-20 text-white sm:p-7 sm:pt-24">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#D8EAA8]">Cultivo hidropónico</p>
                <p className="mt-1 font-serif text-2xl sm:text-3xl">Frescura desde el origen</p>
              </div>
              <Leaf className="mb-1 h-6 w-6 text-[#D8EAA8]" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#143322] text-white" aria-label="Características del fundo">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-7 sm:grid-cols-3 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 shrink-0 text-[#B7D977]" />
            <span className="text-sm font-medium">Valle de Lurín, Lima</span>
          </div>
          <div className="flex items-center gap-3">
            <Sprout className="h-5 w-5 shrink-0 text-[#B7D977]" />
            <span className="text-sm font-medium">Cultivo hidropónico y agroecológico</span>
          </div>
          <div className="flex items-center gap-3">
            <Truck className="h-5 w-5 shrink-0 text-[#B7D977]" />
            <span className="text-sm font-medium">Venta directa en Lima Metropolitana</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#1E5A38]">De nuestra cosecha</p>
            <h2 className="font-serif text-4xl text-[#143322] sm:text-5xl">Fruta para saborear</h2>
          </div>
          <Link
            href="/productos"
            className="inline-flex items-center gap-2 pb-1 font-semibold text-[#1E5A38] transition-colors hover:text-[#143322]"
          >
            Ver catálogo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {destacados.map((producto) => (
            <article key={producto.nombre} className="group grid overflow-hidden border border-[#E1E6DD] bg-white sm:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-60 overflow-hidden sm:min-h-72">
                <Image
                  src={producto.imagen}
                  alt={producto.nombre}
                  fill
                  sizes="(max-width: 640px) 100vw, 45vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col justify-between p-6 sm:p-7">
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#64804E]">Cosecha del fundo</p>
                  <h3 className="font-serif text-3xl text-[#143322]">{producto.nombre}</h3>
                  <p className="mt-3 leading-6 text-[#59685B]">{producto.descripcion}</p>
                </div>
                <div className="mt-7 flex items-end justify-between gap-3">
                  <p className="text-2xl font-semibold text-[#1E5A38]">
                    {producto.precio}<span className="ml-1 text-sm font-normal text-[#68766A]">/ kg</span>
                  </p>
                  <Link
                    href="/productos"
                    aria-label={`Ver ${producto.nombre} en el catálogo`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-sm bg-[#EAF1DF] text-[#143322] transition-colors hover:bg-[#B7D977]"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#EAF1DF]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 md:grid-cols-[1fr_auto] md:items-center lg:px-12 lg:py-16">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#1E5A38]">Conoce nuestra historia</p>
            <h2 className="max-w-2xl font-serif text-4xl leading-tight text-[#143322] sm:text-5xl">
              Cultivar con cuidado también se siente en el sabor.
            </h2>
          </div>
          <Link
            href="/nosotros"
            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-sm bg-[#143322] px-6 font-semibold text-white transition-colors hover:bg-[#1E5A38]"
          >
            Nuestra historia <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
