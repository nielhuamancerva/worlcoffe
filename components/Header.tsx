'use client'

import Link from 'next/link'
import { Coffee, Search, ShoppingBag } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { Button } from '@/components/ui/button'

export function Header({ onSearch }: { onSearch?: (value: string) => void }) {
  const { count } = useCart()
  return <header className="sticky top-0 z-40 border-b border-[#e8ddd2] bg-[#fbfaf7]/95 backdrop-blur">
    <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
      <Link href="/" className="flex items-center gap-2 text-[#2d211c]"><span className="flex size-9 items-center justify-center rounded-full bg-[#2d211c] text-[#f7f1e9]"><Coffee data-icon="inline-start" /></span><span className="font-serif text-xl font-semibold tracking-tight">El Buen Grano</span></Link>
      <nav className="hidden items-center gap-8 text-sm font-medium text-[#75645d] md:flex"><Link href="#catalogo" className="hover:text-[#9b4b2d]">Catálogo</Link><Link href="#origenes" className="hover:text-[#9b4b2d]">Nuestros orígenes</Link><Link href="#historia" className="hover:text-[#9b4b2d]">Nuestra historia</Link></nav>
      <div className="flex items-center gap-2"><div className="hidden items-center border-b border-[#cbbab0] px-2 sm:flex"><Search className="size-4 text-[#9b7766]" /><input aria-label="Buscar café" onChange={(event) => onSearch?.(event.target.value)} placeholder="Buscar café" className="w-28 border-0 bg-transparent px-2 py-2 text-sm outline-none placeholder:text-[#aa978d]" /></div><Button asChild variant="ghost" size="icon" className="relative text-[#2d211c] hover:bg-[#f0e6db]"><Link href="/cart" aria-label="Ver carrito"><ShoppingBag data-icon="inline-start" />{count > 0 && <span className="absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-[#b65f3d] text-[10px] text-white">{count}</span>}</Link></Button></div>
    </div>
  </header>
}
