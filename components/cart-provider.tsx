"use client"

import { createContext, useContext, useEffect, useState } from "react"
import type { ReactNode } from "react"
import { getProduct } from "../lib/products"

type CartItem = { slug: string; quantity: number }
type CartContextValue = {
  items: CartItem[]
  itemCount: number
  total: number
  loaded: boolean
  addItem: (slug: string) => void
  setQuantity: (slug: string, quantity: number) => void
  removeItem: (slug: string) => void
}

const STORAGE_KEY = "fundo-agroecologico-cart"
const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed: unknown = JSON.parse(stored)
        if (Array.isArray(parsed)) {
          setItems(
            parsed.filter(
              (item): item is CartItem =>
                typeof item?.slug === "string" &&
                typeof item?.quantity === "number" &&
                Number.isInteger(item.quantity) &&
                item.quantity > 0 &&
                Boolean(getProduct(item.slug)?.price),
            ),
          )
        }
      }
    } catch {
      window.localStorage.removeItem(STORAGE_KEY)
    }
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (loaded) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items, loaded])

  function addItem(slug: string) {
    if (!getProduct(slug)?.price) return
    setItems((current) => {
      const existing = current.find((item) => item.slug === slug)
      if (existing) {
        return current.map((item) =>
          item.slug === slug ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }
      return [...current, { slug, quantity: 1 }]
    })
  }

  function setQuantity(slug: string, quantity: number) {
    if (quantity <= 0) {
      removeItem(slug)
      return
    }
    setItems((current) =>
      current.map((item) => (item.slug === slug ? { ...item, quantity } : item)),
    )
  }

  function removeItem(slug: string) {
    setItems((current) => current.filter((item) => item.slug !== slug))
  }

  const itemCount = items.reduce((total, item) => total + item.quantity, 0)
  const total = items.reduce((sum, item) => {
    return sum + (getProduct(item.slug)?.price ?? 0) * item.quantity
  }, 0)

  return (
    <CartContext.Provider value={{ items, itemCount, total, loaded, addItem, setQuantity, removeItem }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error("useCart must be used within CartProvider")
  return context
}