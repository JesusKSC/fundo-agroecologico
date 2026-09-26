"use client"

import { ShoppingBag } from "lucide-react"
import { useCart } from "./cart-provider"

export function AddToCartButton({ slug }: { slug: string }) {
  const { addItem } = useCart()

  return (
    <button
      type="button"
      onClick={() => addItem(slug)}
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-[#1E5A38] px-4 font-semibold text-white transition-colors hover:bg-[#143322]"
    >
      <ShoppingBag className="h-4 w-4" />
      Agregar al carrito
    </button>
  )
}