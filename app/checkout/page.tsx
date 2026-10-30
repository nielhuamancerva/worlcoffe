'use client'

import Link from 'next/link'
import { ArrowLeft, CheckCircle2, Truck } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/Header'
import { useCart } from '@/lib/cart-context'
import { formatPrice } from '@/lib/products'

// Imagen del código QR (colocar en /public) y número para enviar el comprobante
const PAYMENT_QR_SRC = '/qr-pago.png'
const PAYMENT_PHONE = '987 654 321'

export default function CheckoutPage() {
  const { subtotal, clearCart } = useCart(); const [step, setStep] = useState<'form' | 'payment' | 'complete'>('form')
  const isEmpty = subtotal <= 0
  if (step === 'complete') return <div className="min-h-screen bg-[#fbfaf7] text-[#2d211c]"><Header /><main className="mx-auto max-w-lg px-5 py-24 text-center"><CheckCircle2 className="mx-auto size-14 text-[#b65f3d]" /><h1 className="mt-6 font-serif text-4xl">Pedido recibido</h1><p className="mt-4 leading-relaxed text-[#806c62]">Gracias por elegir Mi Cafecito. Validaremos tu comprobante y te contactaremos para coordinar el envío.</p><Button asChild className="mt-8 rounded-full bg-[#2d211c] text-white"><Link href="/">Volver a la tienda</Link></Button></main></div>
  return <div className="min-h-screen bg-[#fbfaf7] text-[#2d211c]"><Header />
    <main className="mx-auto max-w-5xl px-5 py-10 lg:px-8">
      {step === 'form'
        ? <Link href="/cart" className="inline-flex items-center gap-2 text-sm text-[#806c62]">
          <ArrowLeft className="size-4" /> Volver al carrito</Link>
        : <button type="button" onClick={() => setStep('form')} className="inline-flex items-center gap-2 text-sm text-[#806c62]">
          <ArrowLeft className="size-4" /> Volver a tus datos</button>}
      <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_320px]">
        {step === 'form'
          ? <form onSubmit={(event) => { event.preventDefault(); if (!isEmpty) setStep('payment') }} className="max-w-xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#b65f3d]">Paso 1 de 2</p>
            <h1 className="mt-3 font-serif text-5xl">Pedido</h1>
            <p className="mt-4 text-sm text-[#806c62]">Completa tus datos para el envío de tu café. El costo de envío lo paga el comprador.</p>
            <div className="mt-10 grid gap-5">
              <label className="grid gap-2 text-sm font-medium">Nombre completo<input required className="border-b border-[#cbbab0] bg-transparent px-1 py-3 outline-none focus:border-[#b65f3d]" placeholder="Tu nombre" /></label>
              <label className="grid gap-2 text-sm font-medium">Email<input required type="email" className="border-b border-[#cbbab0] bg-transparent px-1 py-3 outline-none focus:border-[#b65f3d]" placeholder="tu@email.com" /></label>
              <label className="grid gap-2 text-sm font-medium">Dirección de envío<input required className="border-b border-[#cbbab0] bg-transparent px-1 py-3 outline-none focus:border-[#b65f3d]" placeholder="Calle, número, ciudad" /></label>
              <label className="grid gap-2 text-sm font-medium">Referencia<input required className="border-b border-[#cbbab0] bg-transparent px-1 py-3 outline-none focus:border-[#b65f3d]" placeholder="Al costado del grifo" /></label>
              <label className="grid gap-2 text-sm font-medium">Celular<input required className="border-b border-[#cbbab0] bg-transparent px-1 py-3 outline-none focus:border-[#b65f3d]" placeholder="987654321" /></label>
            </div>
            {isEmpty
              ? <><p className="mt-10 text-center text-sm text-[#806c62]">Tu carrito está vacío. Elige tu café favorito para continuar.</p>
                <Button asChild className="mt-4 w-full rounded-full bg-[#b65f3d] py-6 text-white hover:bg-[#95492f]"><Link href="/">Seguir comprando</Link></Button></>
              : <Button type="submit" className="mt-10 w-full rounded-full bg-[#b65f3d] py-6 text-white hover:bg-[#95492f]">Confirmar pedido</Button>}</form>
          : <section className="max-w-xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#b65f3d]">Paso 2 de 2</p>
            <h1 className="mt-3 font-serif text-5xl">Pago</h1>
            <p className="mt-4 text-sm text-[#806c62]">Escanea el código QR para pagar {formatPrice(subtotal)}.</p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#e3c4b5] bg-[#f8ebe4] px-4 py-2 text-sm font-medium text-[#95492f]">
              <Truck className="size-4 shrink-0" /> El costo de envío lo paga al recibir su pedido.</p>
            <div className="mt-10 flex flex-col items-center bg-[#f0e7dc] p-8 text-center">
              <img src={PAYMENT_QR_SRC} alt="Código QR de pago con Yape" className="h-auto w-64 rounded-xl" />
              <p className="mt-6 text-sm text-[#806c62]">Envía el comprobante de pago al número:</p>
              <a href={`https://wa.me/51${PAYMENT_PHONE.replace(/\s/g, '')}`} target="_blank" rel="noopener noreferrer" className="mt-2 text-2xl font-semibold text-[#b65f3d]">{PAYMENT_PHONE}</a>
            </div>
            <Button type="button" onClick={() => { clearCart(); setStep('complete') }} className="mt-10 w-full rounded-full bg-[#b65f3d] py-6 text-white hover:bg-[#95492f]">Ya realicé el pago</Button>
          </section>}
        <aside className="h-fit bg-[#f0e7dc] p-7"><h2 className="font-serif text-2xl">Tu pedido</h2>
          <div className="mt-7 flex justify-between border-b border-[#d8c5b5] py-4 text-sm">
            <span>Productos</span><span>{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between py-4 text-lg font-semibold"><span>Total</span>
            <span>{formatPrice(subtotal)}</span></div>
          <p className="text-xs leading-relaxed text-[#806c62]">El costo de envío no está incluido y lo paga el comprador.</p>
        </aside>
      </div>
    </main>
  </div>
}
