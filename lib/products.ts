export type Product = {
  slug: string
  name: string
  variety: string
  description: string
  image: string
  price: number | null
}

export const products: Product[] = [
  {
    slug: "fresa",
    name: "Fresa",
    variety: "Camarosa",
    description:
      "Fruto rojo intenso, de pulpa firme y jugosa, aroma natural y sabor equilibrado entre dulzor y ligera acidez.",
    image: "/fresa.jpg",
    price: 15,
  },
  {
    slug: "arandano",
    name: "Arándano",
    variety: "Ventura y Emerald",
    description:
      "Fruto firme y jugoso, con sabor equilibrado y su característica pruina natural.",
    image: "https://www.fundoagroecologico.com/__l5e/assets-v1/3db4d87d-8816-4e4f-b5bc-7bc3bd7da295/arandano-cosecha.jpg",
    price: null,
  },
  {
    slug: "aguaymanto",
    name: "Aguaymanto",
    variety: "Celendín",
    description:
      "Pequeño fruto andino de color amarillo a anaranjado al madurar, con sabor dulce y notas de acidez.",
    image: "https://www.fundoagroecologico.com/assets/aguaymanto-oO7aj6L9.png",
    price: null,
  },
  {
    slug: "frambuesa",
    name: "Frambuesa",
    variety: "Heritage",
    description:
      "Fruto rojo brillante, de textura delicada, aroma intenso y sabor equilibrado entre dulce y ligeramente ácido.",
    image: "/frambruesas.jpeg",
    price: 20,
  },
  {
    slug: "zarzamora",
    name: "Zarzamora",
    variety: "Castilla",
    description:
      "Fruto jugoso y aromático, de color rojo oscuro a morado y negro al madurar.",
    image: "https://www.fundoagroecologico.com/assets/zarzamora-PcSJa0Cq.jpg",
    price: null,
  },
]

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug)
}