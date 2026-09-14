'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CheckCircle2, Coffee, Megaphone, Package, Wallet } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/Header'

const benefits = [
  {
    icon: Megaphone,
    title: 'Llega a más amantes del café',
    text: 'Exponte ante clientes que buscan cafés de especialidad, sin invertir en tu propia tienda online.',
  },
  {
    icon: Package,
    title: 'Tú tuestas, nosotros el escaparate',
    text: 'Publica tus lotes con su origen, notas y formato. Gestionamos la vitrina; tú mantienes tu marca.',
  },
  {
    icon: Wallet,
    title: 'Comisiones transparentes',
    text: 'Sin cuotas de alta. Solo una comisión clara por cada venta que cierras en el marketplace.',
  },
]

const steps = [
  { n: '01', title: 'Cuéntanos sobre ti', text: 'Envía la solicitud con los datos de tu tostaduría.' },
  { n: '02', title: 'Validamos tu café', text: 'Revisamos calidad y trazabilidad de tus lotes.' },
  { n: '03', title: 'Publica y vende', text: 'Creamos tu perfil y tus cafés aparecen en el catálogo.' },
]

export default function VenderPage() {
  const [sent, setSent] = useState(false)

  if (sent) {
    return (
      <div className="min-h-screen bg-[#fbfaf7] text-[#2d211c]">
        <Header />
        <main className="mx-auto max-w-lg px-5 py-24 text-center">
          <CheckCircle2 className="mx-auto size-14 text-[#b65f3d]" />
          <h1 className="mt-6 font-serif text-4xl">Solicitud recibida</h1>
          <p className="mt-4 leading-relaxed text-[#806c62]">
            Gracias por tu interés en unirte a El Buen Grano. Revisaremos tu tostaduría y te contactaremos pronto.
            Esta es una demostración y no se ha enviado ningún dato real.
          </p>
          <Button asChild className="mt-8 rounded-full bg-[#2d211c] text-white">
            <Link href="/marcas">Ver los tostadores</Link>
          </Button>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#fbfaf7] text-[#2d211c]">
      <Header />
      <main>
        <section className="mx-auto max-w-7xl px-5 pt-14 lg:px-8">
          <div className="max-w-2xl">
            <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.24em] text-[#b65f3d]">
              <Coffee className="size-4" /> Para tostadores
            </p>
            <h1 className="mt-4 font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl">
              Vende tu café en El Buen Grano
            </h1>
            <p className="mt-6 text-base leading-relaxed text-[#5f4f48]">
              Somos el marketplace donde las tostadurías independientes exponen su café. Tú te encargas del tueste;
              nosotros conectamos tu marca con nuevos clientes.
            </p>
            <a
              href="#solicitud"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#b65f3d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#95492f]"
            >
              Solicitar unirme
            </a>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-6 px-5 py-16 sm:grid-cols-3 lg:px-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="rounded-sm border border-[#e8ddd2] bg-white p-7">
              <benefit.icon className="size-8 text-[#b65f3d]" />
              <h2 className="mt-5 font-serif text-xl">{benefit.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#86756e]">{benefit.text}</p>
            </div>
          ))}
        </section>

        <section className="border-y border-[#e8ddd2] bg-[#f0e7dc]">
          <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
            <h2 className="font-serif text-3xl">Cómo funciona</h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-3">
              {steps.map((step) => (
                <div key={step.n}>
                  <p className="font-serif text-4xl text-[#c9a288]">{step.n}</p>
                  <h3 className="mt-3 font-serif text-xl">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#806c62]">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="solicitud" className="mx-auto max-w-2xl px-5 py-16 lg:px-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#b65f3d]">Solicitud de alta</p>
          <h2 className="mt-3 font-serif text-4xl">Cuéntanos sobre tu tostaduría</h2>
          <form
            onSubmit={(event) => {
              event.preventDefault()
              setSent(true)
            }}
            className="mt-8 grid gap-5"
          >
            <label className="grid gap-2 text-sm font-medium">
              Nombre de la tostaduría
              <input
                required
                className="border-b border-[#cbbab0] bg-transparent px-1 py-3 outline-none focus:border-[#b65f3d]"
                placeholder="Ej. Café Origen"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium">
              Persona de contacto
              <input
                required
                className="border-b border-[#cbbab0] bg-transparent px-1 py-3 outline-none focus:border-[#b65f3d]"
                placeholder="Tu nombre"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium">
              Email
              <input
                required
                type="email"
                className="border-b border-[#cbbab0] bg-transparent px-1 py-3 outline-none focus:border-[#b65f3d]"
                placeholder="tostaduria@email.com"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium">
              Ubicación
              <input
                required
                className="border-b border-[#cbbab0] bg-transparent px-1 py-3 outline-none focus:border-[#b65f3d]"
                placeholder="Ciudad, país"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium">
              Cuéntanos sobre tu café
              <textarea
                required
                rows={4}
                className="resize-none border-b border-[#cbbab0] bg-transparent px-1 py-3 outline-none focus:border-[#b65f3d]"
                placeholder="Orígenes, tipos de tueste, qué te hace diferente..."
              />
            </label>
            <Button type="submit" className="mt-4 w-full rounded-full bg-[#b65f3d] py-6 text-white hover:bg-[#95492f]">
              Enviar solicitud
            </Button>
            <p className="text-center text-xs leading-relaxed text-[#806c62]">
              Formulario de demostración. No se envía ni se guarda ningún dato.
            </p>
          </form>
        </section>
      </main>
      <footer className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-xs text-[#806c62] sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>© 2026 El Buen Grano</p>
        <p>Un marketplace para tostadores independientes.</p>
      </footer>
    </div>
  )
}
