'use client'

import Link from 'next/link'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/Header'
import { useCart } from '@/lib/cart-context'
import { formatPrice } from '@/lib/products'

export default function CheckoutPage() {
  const { subtotal, clearCart } = useCart(); const [complete, setComplete] = useState(false)
  if (complete) return <div className="min-h-screen bg-[#fbfaf7] text-[#2d211c]"><Header /><main className="mx-auto max-w-lg px-5 py-24 text-center"><CheckCircle2 className="mx-auto size-14 text-[#b65f3d]" /><h1 className="mt-6 font-serif text-4xl">Pedido recibido</h1><p className="mt-4 leading-relaxed text-[#806c62]">Gracias por elegir El Buen Grano. Esta demostración no procesa pagos reales.</p><Button asChild className="mt-8 rounded-full bg-[#2d211c] text-white"><Link href="/">Volver a la tienda</Link></Button></main></div>
  return <div className="min-h-screen bg-[#fbfaf7] text-[#2d211c]"><Header /><main className="mx-auto max-w-5xl px-5 py-10 lg:px-8"><Link href="/cart" className="inline-flex items-center gap-2 text-sm text-[#806c62]"><ArrowLeft className="size-4" /> Volver al carrito</Link><div className="mt-10 grid gap-12 lg:grid-cols-[1fr_320px]"><form onSubmit={(event) => { event.preventDefault(); clearCart(); setComplete(true) }} className="max-w-xl"><p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#b65f3d]">Último paso</p><h1 className="mt-3 font-serif text-5xl">Checkout</h1><p className="mt-4 text-sm text-[#806c62]">Completa tus datos para simular el envío de tu café.</p><div className="mt-10 grid gap-5"><label className="grid gap-2 text-sm font-medium">Nombre completo<input required className="border-b border-[#cbbab0] bg-transparent px-1 py-3 outline-none focus:border-[#b65f3d]" placeholder="Tu nombre" /></label><label className="grid gap-2 text-sm font-medium">Email<input required type="email" className="border-b border-[#cbbab0] bg-transparent px-1 py-3 outline-none focus:border-[#b65f3d]" placeholder="tu@email.com" /></label><label className="grid gap-2 text-sm font-medium">Dirección de envío<input required className="border-b border-[#cbbab0] bg-transparent px-1 py-3 outline-none focus:border-[#b65f3d]" placeholder="Calle, número, ciudad" /></label></div><Button type="submit" className="mt-10 w-full rounded-full bg-[#b65f3d] py-6 text-white hover:bg-[#95492f]">Confirmar pedido</Button></form><aside className="h-fit bg-[#f0e7dc] p-7"><h2 className="font-serif text-2xl">Tu pedido</h2><div className="mt-7 flex justify-between border-b border-[#d8c5b5] py-4 text-sm"><span>Productos</span><span>{formatPrice(subtotal)}</span></div><div className="flex justify-between py-4 text-lg font-semibold"><span>Total</span><span>{formatPrice(subtotal)}</span></div><p className="text-xs leading-relaxed text-[#806c62]">Envío gratis en esta demostración.</p></aside></div></main></div>
}
