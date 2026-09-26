import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Leaf, MapPin, Sprout, Users } from "lucide-react"

const principles = [
  { title: "La tierra", text: "Cuidar el suelo, el agua y el entorno forma parte de construir una buena cosecha.", icon: Leaf },
  { title: "El cultivo", text: "Acompañamos cada etapa con atención, experiencia y aprendizaje.", icon: Sprout },
  { title: "La calidad", text: "Cuidamos el proceso hasta el momento de seleccionar cada fruto.", icon: Award },
  { title: "Las personas", text: "Detrás de cada cosecha hay trabajo, experiencia y compromiso.", icon: Users },
]

export default function NosotrosPage() {
  return (
    <div className="bg-[#F7F8F2] text-[#143322]">
      <section className="bg-[#143322] text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#D8EAA8]">Nuestra historia</p>
          <h1 className="max-w-4xl font-serif text-5xl leading-tight sm:text-6xl">La tierra es nuestro origen. El cuidado, nuestra manera de cultivarla.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#E0E9D9]">Cultivamos berries desde Pachacámac, Lima, aprendiendo y creciendo junto a nuestros clientes.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-12 lg:py-16">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#64804E]">El origen</p>
          <h2 className="font-serif text-4xl">Una historia que comienza con la tierra.</h2>
          <p className="mt-5 leading-7 text-[#59685B]">Desde pequeño, nuestro fundador acompañaba a su abuelo al campo. Esa cercanía se convirtió en vocación y lo llevó a formarse como ingeniero agrónomo.</p>
          <p className="mt-4 leading-7 text-[#59685B]">En Pachacámac, una oportunidad con la frambuesa dio inicio al fundo. Fuimos creciendo de acuerdo con las necesidades de nuestros clientes, ampliando los cultivos y encontrando en los berries una parte importante de nuestro camino.</p>
          <p className="mt-6 flex items-center gap-2 text-sm font-medium text-[#1E5A38]"><MapPin className="h-4 w-4" /> Manchay Bajo, Pachacámac, Lima</p>
        </div>
        <div className="relative min-h-[280px] sm:min-h-[400px]">
          <Image src="/nuestrocompromiso.jpg" alt="Cultivo del Fundo Agroecológico" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#64804E]">Nuestra forma de cultivar</p>
          <h2 className="font-serif text-4xl">Cuidar cada etapa es parte de cultivar.</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map(({ title, text, icon: Icon }) => (
              <article key={title} className="border-t-2 border-[#B7D977] py-5">
                <Icon className="h-5 w-5 text-[#1E5A38]" />
                <h3 className="mt-4 font-serif text-2xl">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#59685B]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-12 sm:px-8 md:grid-cols-2 lg:px-12 lg:py-16">
        <article className="border border-[#E1E6DD] bg-white p-6 sm:p-8">
          <h2 className="font-serif text-3xl">Misión</h2>
          <p className="mt-4 leading-7 text-[#59685B]">Cultivar alimentos únicos y nutritivos que promuevan la salud de las personas y el cuidado del medio ambiente.</p>
        </article>
        <article className="border border-[#E1E6DD] bg-white p-6 sm:p-8">
          <h2 className="font-serif text-3xl">Visión</h2>
          <p className="mt-4 leading-7 text-[#59685B]">Ser líder en la producción de frambuesas en Lima, consolidando un modelo que integre sostenibilidad, eficiencia e innovación.</p>
        </article>
      </section>

      <section className="bg-[#EAF1DF]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <div>
            <p className="font-semibold text-[#1E5A38]">Certificación SENASA – Orgánico Perú</p>
            <p className="mt-1 text-sm text-[#526558]">En trámite. Consultar al fundo por información y disponibilidad.</p>
          </div>
          <Link href="/productos" className="inline-flex min-h-11 items-center justify-center gap-2 bg-[#1E5A38] px-5 font-semibold text-white hover:bg-[#143322]">Conocer productos <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </div>
  )
}
