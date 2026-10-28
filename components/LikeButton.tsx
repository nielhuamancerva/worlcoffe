'use client'

import { Heart, Star } from 'lucide-react'
import { useLikes } from '@/lib/likes-context'
import type { Product } from '@/lib/products'

export function LikeButton({ product, className = '' }: { product: Product; className?: string }) {
  const { isLiked, toggleLike, likesOf } = useLikes()
  const liked = isLiked(product.id)
  return <button type="button" onClick={() => toggleLike(product.id)} aria-pressed={liked} aria-label={liked ? `Quitar me gusta de ${product.name}` : `Me gusta ${product.name}`} className={`inline-flex items-center gap-1 rounded-full text-xs font-semibold transition ${liked ? 'text-[#c0392b]' : 'text-[#9b7766] hover:text-[#c0392b]'} ${className}`}>
    <Heart className={`size-4 transition-transform active:scale-125 ${liked ? 'fill-current' : ''}`} />{likesOf(product)}
  </button>
}

export function RatingBadge({ product, className = '' }: { product: Product; className?: string }) {
  const { ratingOf } = useLikes()
  return <span title="Valoración interna: 60 % me gusta, 40 % ventas" className={`inline-flex items-center gap-1 text-xs font-semibold text-[#b8860b] ${className}`}>
    <Star className="size-3.5 fill-current" />{ratingOf(product).toFixed(1)}
  </span>
}
