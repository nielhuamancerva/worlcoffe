'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { internalRating, type Product } from './products'

type LikesContextValue = { isLiked: (id: string) => boolean; toggleLike: (id: string) => void; likesOf: (product: Product) => number; ratingOf: (product: Product) => number }

const LikesContext = createContext<LikesContextValue | null>(null)

// Guarda los "me gusta" del visitante en su navegador; se suman a los del catálogo.
export function LikesProvider({ children }: { children: React.ReactNode }) {
  const [liked, setLiked] = useState<string[]>([])
  useEffect(() => { const saved = window.localStorage.getItem('cafe-likes'); if (saved) setLiked(JSON.parse(saved)) }, [])
  useEffect(() => { window.localStorage.setItem('cafe-likes', JSON.stringify(liked)) }, [liked])
  const value = useMemo(() => {
    const isLiked = (id: string) => liked.includes(id)
    const likesOf = (product: Product) => product.likes + (isLiked(product.id) ? 1 : 0)
    return { isLiked, likesOf, ratingOf: (product: Product) => internalRating(likesOf(product), product.sold), toggleLike: (id: string) => setLiked((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]) }
  }, [liked])
  return <LikesContext.Provider value={value}>{children}</LikesContext.Provider>
}

export function useLikes() { const context = useContext(LikesContext); if (!context) throw new Error('useLikes must be used within LikesProvider'); return context }
