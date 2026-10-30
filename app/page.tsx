'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Coffee, MapPin, Sparkles, Store } from 'lucide-react'
import { BestSellers } from '@/components/BestSellers'
import { Header } from '@/components/Header'
import { ProductCard } from '@/components/ProductCard'
import { ZodiacIcon } from '@/components/ZodiacIcon'
import { brands, departments, products, varieties, zodiacSigns, type Product } from '@/lib/products'

// Filtro principal: se elige por qué filtrar y luego una opción de esa lista (la primera es "todos").
const filterModes = [
  { id: 'departamento', label: 'Departamento', icon: MapPin, options: departments, field: 'department' },
  { id: 'tipo', label: 'Tipo', icon: Coffee, options: varieties, field: 'variety' },
  { id: 'signo', label: 'Signo', icon: Sparkles, options: zodiacSigns, field: 'zodiac' },
] as const

type FilterMode = (typeof filterModes)[number]['id']

function Storefront() {
  const [query, setQuery] = useState('')
  const [mode, setMode] = useState<FilterMode>('departamento')
  const activeMode = filterModes.find((item) => item.id === mode)!
  const [value, setValue] = useState<string>(activeMode.options[0])
  const selectMode = (next: FilterMode) => { setMode(next); setValue(filterModes.find((item) => item.id === next)!.options[0]) }
  const matches = (product: Product) => { const field = product[activeMode.field]; return value === activeMode.options[0] || (Array.isArray(field) ? field.includes(value) : field === value) }
  const rankingLabel = value === activeMode.options[0] ? '' : mode === 'departamento' ? `en ${value}` : mode === 'tipo' ? `· ${value}` : mode === 'signo' ? `para ${value}` : `de ${value}`
  const filtered = useMemo(() => products.filter((product) => matches(product) &&`${product.name} ${product.notes} ${product.origin}`.toLowerCase().includes(query.toLowerCase())), [activeMode, value, query])
  return <div className="min-h-screen bg-[#fbfaf7] text-[#2d211c]"><Header onSearch={setQuery} />
    <main>
      <section className="mx-auto grid max-w-7xl gap-0 px-5 pt-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pt-8"><div className="relative flex min-h-[450px] flex-col justify-end overflow-hidden bg-[#2d211c] p-7 text-[#f9f3ea] sm:p-12 lg:min-h-[570px]"><Image src="/coffee-hero.png" alt="Café recién preparado junto a granos de café" fill priority className="object-cover opacity-80" sizes="(max-width: 1024px) 100vw, 55vw" /><div className="relative max-w-lg"><p className="mb-5 text-[11px] font-bold uppercase tracking-[0.24em] text-[#e8b49a]">Café de especialidad, recién tostado</p><h1 className="max-w-md font-serif text-5xl leading-[0.95] tracking-tight sm:text-7xl">El mundo en una taza.</h1><p className="mt-6 max-w-sm text-base leading-relaxed text-[#eaded4]">Cafés de distintos orígenes y perfiles de sabor, tostados en su punto y listos para llegar a tu puerta.</p><a href="#catalogo" className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-white underline decoration-[#d98663] underline-offset-8">Descubre el catálogo <ArrowRight className="size-4" /></a></div></div><div className="flex flex-col justify-between bg-[#e9ddcf] p-7 sm:p-12 lg:min-h-[570px]"><div><p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#9b4b2d]">Selección de la semana</p><h2 className="mt-5 max-w-sm font-serif text-4xl leading-tight text-[#4b3025]">Pequeños rituales, grandes momentos.</h2></div><div className="mt-10"><div className="relative mx-auto aspect-square max-w-[310px] overflow-hidden rounded-full bg-[#c3a38a]"><Image src="/coffee-2.png" alt="Bolsa de café de especialidad" fill className="object-contain p-8" sizes="310px" /></div><div className="mt-7 flex items-end justify-between border-t border-[#c7b2a1] pt-5"><div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9b7766]">Favorito de la casa</p><p className="mt-1 font-serif text-xl">Floral de Cusco</p></div><span className="font-semibold">S/ 22.00</span></div></div></div></section>
      <section id="origenes" className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-16 sm:flex-row sm:items-end sm:justify-between lg:px-8"><div><p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#b65f3d]">Una buena selección</p><h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">Encuentra tu próxima taza</h2></div><div className="max-w-sm"><p className="text-sm leading-relaxed text-[#86756e]">Elegimos cada café con una sola obsesión: que llegue a tu taza en su mejor momento.</p></div></section>
      <section id="filtros" className="mx-auto max-w-7xl px-5 pb-10 lg:px-8"><div className="flex flex-col gap-4 border-y border-[#e8ddd2] py-4 sm:flex-row sm:items-start"><div className="flex shrink-0 items-center gap-1 rounded-full bg-[#f0e6db] p-1">{filterModes.map((item) => <button key={item.id} onClick={() => selectMode(item.id)} aria-pressed={mode === item.id} className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition ${mode === item.id ? 'bg-[#2d211c] text-white shadow-sm' : 'text-[#806c62] hover:text-[#2d211c]'}`}><item.icon className="size-3.5" />{item.label}</button>)}</div><div className="flex min-w-0 flex-wrap gap-2">{activeMode.options.map((item) => <button key={item} onClick={() => setValue(item)} className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border px-4 py-2 text-xs font-semibold transition ${value === item ? 'border-[#b65f3d] bg-[#b65f3d] text-white' : 'border-[#d9c9bd] text-[#806c62] hover:bg-[#f0e6db]'}`}>{mode === 'departamento' && item !== activeMode.options[0] && <MapPin className="size-3" />}{mode === 'signo' && <ZodiacIcon sign={item} className="text-sm" />}{item}</button>)}</div></div></section>
      <BestSellers match={matches} label={rankingLabel} />
      <section id="catalogo" className="mx-auto max-w-7xl px-5 pb-24 lg:px-8"><div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">{filtered.map((product) => <ProductCard key={product.id} product={product} />)}</div>{filtered.length === 0 && <p className="py-20 text-center text-[#86756e]">No encontramos ese café. Prueba con otra búsqueda.</p>}</section>
    </main><footer className="border-t border-[#e8ddd2] bg-[#f0e7dc]"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-sm text-[#806c62] sm:flex-row sm:items-center sm:justify-between lg:px-8"><p>© 2026 Mi Cafecito</p><div className="flex gap-5"><a href="/vender" className="font-medium hover:text-[#b65f3d]">Vende tu café</a></div></div></footer>
  </div>
}

export default function Page() { return <Storefront /> }
