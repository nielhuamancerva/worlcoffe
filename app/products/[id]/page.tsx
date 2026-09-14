'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Minus, Plus } from 'lucide-react'
import { use, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/Header'
import { ProductCard } from '@/components/ProductCard'
import { useCart } from '@/lib/cart-context'
import { formatPrice, getProduct, products } from '@/lib/products'

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params); const product = getProduct(id); const [quantity, setQuantity] = useState(1); const { addItem } = useCart()
  if (!product) return <div className="min-h-screen bg-[#fbfaf7] px-5 py-20 text-center"><p className="font-serif text-3xl">Café no encontrado</p><Link href="/" className="mt-4 inline-block text-[#b65f3d]">Volver a la tienda</Link></div>
  return <div className="min-h-screen bg-[#fbfaf7] text-[#2d211c]"><Header /><main className="mx-auto max-w-7xl px-5 py-10 lg:px-8"><Link href="/" className="inline-flex items-center gap-2 text-sm text-[#806c62]"><ArrowLeft className="size-4" /> Volver al catálogo</Link><div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-20"><div className="relative aspect-square bg-[#f2ede5]"><Image src={product.image} alt={product.name} fill className="object-contain p-10" sizes="(max-width: 1024px) 100vw, 50vw" /></div><div className="flex flex-col justify-center"><p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#b65f3d]">{product.brand}</p><h1 className="mt-4 font-serif text-5xl leading-none">{product.name}</h1><p className="mt-5 text-2xl font-semibold">{formatPrice(product.price)}</p><p className="mt-6 max-w-lg leading-relaxed text-[#806c62]">{product.description}</p><div className="my-8 grid grid-cols-2 gap-4 border-y border-[#e8ddd2] py-5 text-sm"><div><p className="text-xs text-[#9b7766]">Origen</p><p className="mt-1 font-medium">{product.origin}</p></div><div><p className="text-xs text-[#9b7766]">Notas</p><p className="mt-1 font-medium">{product.notes}</p></div><div><p className="text-xs text-[#9b7766]">Tostado</p><p className="mt-1 font-medium">{product.roast}</p></div><div><p className="text-xs text-[#9b7766]">Formato</p><p className="mt-1 font-medium">{product.weight}</p></div></div><div className="flex gap-3"><div className="flex items-center gap-3 rounded-full border border-[#d9c9bd] px-3"><Button variant="ghost" size="icon" className="size-8" onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus data-icon="inline-start" /></Button><span className="w-4 text-center">{quantity}</span><Button variant="ghost" size="icon" className="size-8" onClick={() => setQuantity(quantity + 1)}><Plus data-icon="inline-start" /></Button></div><Button onClick={() => { for (let i = 0; i < quantity; i++) addItem(product) }} className="flex-1 rounded-full bg-[#b65f3d] py-6 text-white hover:bg-[#95492f]">Agregar al carrito</Button></div></div></div><section className="mt-24 border-t border-[#e8ddd2] pt-10"><p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#b65f3d]">También te puede gustar</p><div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4">{products.filter((item) => item.id !== product.id).slice(0, 4).map((item) => <ProductCard key={item.id} product={item} />)}</div></section></main></div>
}
