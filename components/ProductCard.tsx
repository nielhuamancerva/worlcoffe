'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Plus } from 'lucide-react'
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
      <div><p className="mb-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#9b7766]">{product.brand}</p><Link href={`/products/${product.id}`} className="font-serif text-lg text-[#2d211c] hover:text-[#9b4b2d]">{product.name}</Link><p className="mt-1 text-sm text-[#86756e]">{product.notes}</p></div>
      <div className="text-right"><p className="font-semibold text-[#2d211c]">{formatPrice(product.price)}</p><Button aria-label={`Agregar ${product.name}`} onClick={() => addItem(product)} size="icon" className="mt-2 size-8 rounded-full bg-[#b65f3d] text-white hover:bg-[#95492f]"><Plus data-icon="inline-start" /></Button></div>
    </div>
  </article>
}
