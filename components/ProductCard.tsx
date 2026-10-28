'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Coffee, MapPin, Plus } from 'lucide-react'
import { LikeButton, RatingBadge } from '@/components/LikeButton'
import { Button } from '@/components/ui/button'
import { useCart } from '@/lib/cart-context'
import { formatPrice, type Product } from '@/lib/products'

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()
  return <article className="group relative flex flex-col">
    <Link href={`/products/${product.id}`} className="relative mb-4 aspect-[4/5] overflow-hidden rounded-sm bg-[#f2ede5]">
      <Image src={product.image} alt={product.name} fill className="object-contain p-5 transition duration-500 group-hover:scale-105" sizes="(max-width: 768px) 50vw, 25vw" />
      <span className="absolute left-3 top-3 rounded-full bg-white/85 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#664638]">{product.category}</span>
    </Link>
    <div className="flex items-start justify-between gap-3">
      <div><p className="mb-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#9b7766]">{product.brand}</p><Link href={`/products/${product.id}`} className="font-serif text-lg text-[#2d211c] hover:text-[#9b4b2d]">{product.name}</Link><p className="mt-1 text-sm text-[#86756e]">{product.notes}</p><p className="mt-1 flex items-start gap-1 text-xs text-[#9b7766]" title={`Distrito ${product.district}, provincia ${product.province}, departamento ${product.department}`}><MapPin className="mt-px size-3 shrink-0" /><span><span className="font-semibold text-[#664638]">{product.district}</span>, {product.province} · {product.department}</span></p><div className="mt-2 flex flex-wrap items-center gap-3"><LikeButton product={product} /><RatingBadge product={product} /><span title="Puntaje de taza (escala SCA)" className="inline-flex items-center gap-1 rounded-full bg-[#f5ece3] px-2 py-0.5 text-xs font-semibold text-[#b65f3d]"><Coffee className="size-3.5" />{product.cupScore.toLocaleString('es-PE', { maximumFractionDigits: 2 })}%</span></div></div>
      <div className="text-right"><p className="font-semibold text-[#2d211c]">{formatPrice(product.price)}</p><Button aria-label={`Agregar ${product.name}`} onClick={() => addItem(product)} size="icon" className="mt-2 size-8 rounded-full bg-[#b65f3d] text-white hover:bg-[#95492f]"><Plus data-icon="inline-start" /></Button></div>
    </div>
  </article>
}
