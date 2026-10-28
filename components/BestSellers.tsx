'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, Trophy } from 'lucide-react'
import { RatingBadge } from '@/components/LikeButton'
import { bestSellers, formatPrice, type Product } from '@/lib/products'

export function BestSellers({ match, label }: { match: (product: Product) => boolean; label: string }) {
  const [open, setOpen] = useState(false)
  const ranking = bestSellers.filter(match)
  const [first, ...rest] = ranking

  return <section id="mas-vendidos" className="mx-auto max-w-7xl px-5 pb-12 lg:px-8">
    <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#b65f3d]">Ranking</p>
    <h2 className="mt-2 font-serif text-2xl tracking-tight sm:text-3xl">Más vendidos{label && <> {label}</>}</h2>
    {!first && <p className="py-10 text-center text-[#86756e]">Aún no hay ventas con este filtro.</p>}
    {first && <div className="mt-4 overflow-hidden rounded-md border border-[#e8ddd2] bg-white">
      <Link href={`/products/${first.id}`} className="flex items-center gap-3 bg-[#2d211c] px-3 py-2.5 text-[#f9f3ea] transition hover:bg-[#3a2b24] sm:gap-4 sm:px-4">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#b65f3d] font-serif text-base text-white ring-2 ring-[#e8b49a]/40">1</span>
        <div className="relative size-12 shrink-0 overflow-hidden rounded-sm bg-[#f2ede5]"><Image src={first.image} alt={first.name} fill className="object-contain p-1" sizes="48px" /></div>
        <div className="min-w-0 flex-1">
          <p className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#e8b49a]"><Trophy className="size-3" /> El más vendido</p>
          <p className="truncate font-serif text-lg leading-tight">{first.name}</p>
          <p className="truncate text-xs text-[#d9c9bd]">{first.brand} · {first.origin}</p>
        </div>
        <div className="shrink-0 text-right"><p className="font-semibold">{formatPrice(first.price)}</p><p className="text-xs text-[#d9c9bd]">{first.sold} vendidos · <RatingBadge product={first} className="text-[#f0c060]" /></p></div>
      </Link>
      {rest.length > 0 && <>
        <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
          <ol start={2} className="divide-y divide-[#e8ddd2] overflow-hidden">
            {rest.map((product, index) => <li key={product.id}><Link href={`/products/${product.id}`} tabIndex={open ? undefined : -1} className="flex items-center gap-3 px-3 py-2 transition hover:bg-[#f5efe7] sm:gap-4 sm:px-4">
              <span className="w-8 shrink-0 text-center font-serif text-base text-[#c9a690]">{index + 2}</span>
              <div className="relative size-10 shrink-0 overflow-hidden rounded-sm bg-[#f2ede5]"><Image src={product.image} alt={product.name} fill className="object-contain p-1" sizes="40px" /></div>
              <div className="min-w-0 flex-1"><p className="truncate font-serif text-base leading-tight">{product.name}</p><p className="truncate text-xs text-[#86756e]">{product.brand} · {product.origin}</p></div>
              <div className="shrink-0 text-right"><p className="font-semibold">{formatPrice(product.price)}</p><p className="text-xs text-[#86756e]">{product.sold} vendidos · <RatingBadge product={product} /></p></div>
            </Link></li>)}
          </ol>
        </div>
        <button onClick={() => setOpen(!open)} aria-expanded={open} className="flex w-full items-center justify-center gap-1.5 border-t border-[#e8ddd2] py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#b65f3d] transition hover:bg-[#f5efe7]">
          {open ? 'Ver menos' : `Ver ranking completo (${rest.length} más)`}
          <ChevronDown className={`size-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
        </button>
      </>}
    </div>}
  </section>
}
