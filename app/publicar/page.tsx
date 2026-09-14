'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, CheckCircle2, PackagePlus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/Header'
import { formatPrice } from '@/lib/products'
import { sellers } from '@/lib/sellers'

const categories = ['Grano', 'Molido', 'Listo para tomar']
const roasts = ['Claro', 'Medio', 'Oscuro']
const gallery = ['/coffee-1.png', '/coffee-2.png', '/coffee-3.png', '/coffee-4.png', '/coffee-5.png', '/coffee-6.png', '/coffee-7.png', '/coffee-8.png']

export default function PublicarPage() {
  const [published, setPublished] = useState(false)
  const [brand, setBrand] = useState(sellers[0]?.name ?? '')
  const [name, setName] = useState('')
  const [category, setCategory] = useState(categories[0])
  const [roast, setRoast] = useState(roasts[1])
  const [price, setPrice] = useState('')
  const [weight, setWeight] = useState('')
  const [origin, setOrigin] = useState('')
  const [notes, setNotes] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(gallery[0])

  const priceValue = Number.parseFloat(price)

  if (published) {
    return (
      <div className="min-h-screen bg-[#fbfaf7] text-[#2d211c]">
        <Header />
        <main className="mx-auto max-w-lg px-5 py-24 text-center">
          <CheckCircle2 className="mx-auto size-14 text-[#b65f3d]" />
          <h1 className="mt-6 font-serif text-4xl">Café publicado</h1>
          <p className="mt-4 leading-relaxed text-[#806c62]">
            Tu café ya estaría visible en el catálogo de {brand}. Esta es una demostración: el producto no se guarda
            de forma permanente.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild className="rounded-full bg-[#2d211c] text-white">
              <Link href="/marcas">Ver tostadores</Link>
            </Button>
            <Button
              variant="outline"
              className="rounded-full"
              onClick={() => {
                setPublished(false)
                setName('')
                setPrice('')
                setWeight('')
                setOrigin('')
                setNotes('')
                setDescription('')
              }}
            >
              Publicar otro café
            </Button>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#fbfaf7] text-[#2d211c]">
      <Header />
      <main className="mx-auto max-w-6xl px-5 py-10 lg:px-8">
        <Link href="/vender" className="inline-flex items-center gap-2 text-sm text-[#806c62] hover:text-[#b65f3d]">
          <ArrowLeft className="size-4" /> Volver a vender
        </Link>

        <div className="mt-8 flex items-center gap-4">
          <span className="flex size-12 items-center justify-center rounded-full bg-[#b65f3d] text-white">
            <PackagePlus className="size-6" />
          </span>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#b65f3d]">Panel del tostador</p>
            <h1 className="font-serif text-4xl leading-none">Subir un café</h1>
          </div>
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_340px]">
          <form
            onSubmit={(event) => {
              event.preventDefault()
              setPublished(true)
            }}
            className="grid gap-5"
          >
            <label className="grid gap-2 text-sm font-medium">
              Tostaduría
              <select
                value={brand}
                onChange={(event) => setBrand(event.target.value)}
                className="rounded-md border border-[#d9c9bd] bg-transparent px-3 py-3 outline-none focus:border-[#b65f3d]"
              >
                {sellers.map((seller) => (
                  <option key={seller.slug}>{seller.name}</option>
                ))}
              </select>
            </label>

            <label className="grid gap-2 text-sm font-medium">
              Nombre del café
              <input
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="border-b border-[#cbbab0] bg-transparent px-1 py-3 outline-none focus:border-[#b65f3d]"
                placeholder="Ej. Altura Colombia"
              />
            </label>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium">
                Categoría
                <select
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                  className="rounded-md border border-[#d9c9bd] bg-transparent px-3 py-3 outline-none focus:border-[#b65f3d]"
                >
                  {categories.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-medium">
                Tostado
                <select
                  value={roast}
                  onChange={(event) => setRoast(event.target.value)}
                  className="rounded-md border border-[#d9c9bd] bg-transparent px-3 py-3 outline-none focus:border-[#b65f3d]"
                >
                  {roasts.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium">
                Precio (€)
                <input
                  required
                  type="number"
                  min="0"
                  step="0.01"
                  value={price}
                  onChange={(event) => setPrice(event.target.value)}
                  className="border-b border-[#cbbab0] bg-transparent px-1 py-3 outline-none focus:border-[#b65f3d]"
                  placeholder="18.50"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium">
                Formato / peso
                <input
                  required
                  value={weight}
                  onChange={(event) => setWeight(event.target.value)}
                  className="border-b border-[#cbbab0] bg-transparent px-1 py-3 outline-none focus:border-[#b65f3d]"
                  placeholder="250 g"
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm font-medium">
              Origen
              <input
                required
                value={origin}
                onChange={(event) => setOrigin(event.target.value)}
                className="border-b border-[#cbbab0] bg-transparent px-1 py-3 outline-none focus:border-[#b65f3d]"
                placeholder="Huila, Colombia"
              />
            </label>

            <label className="grid gap-2 text-sm font-medium">
              Notas de cata
              <input
                required
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                className="border-b border-[#cbbab0] bg-transparent px-1 py-3 outline-none focus:border-[#b65f3d]"
                placeholder="Caramelo, panela y frutos rojos"
              />
            </label>

            <label className="grid gap-2 text-sm font-medium">
              Descripción
              <textarea
                required
                rows={4}
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                className="resize-none border-b border-[#cbbab0] bg-transparent px-1 py-3 outline-none focus:border-[#b65f3d]"
                placeholder="Cuenta la historia de este café, su proceso y por qué destaca."
              />
            </label>

            <div className="grid gap-2 text-sm font-medium">
              Imagen del producto
              <div className="flex flex-wrap gap-3">
                {gallery.map((src) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setImage(src)}
                    className={`relative size-16 overflow-hidden rounded-md border bg-[#f2ede5] transition ${
                      image === src ? 'border-[#b65f3d] ring-2 ring-[#b65f3d]/40' : 'border-[#e8ddd2] hover:border-[#c9b6a6]'
                    }`}
                    aria-label={`Elegir imagen ${src}`}
                  >
                    <Image src={src} alt="" fill className="object-contain p-1.5" sizes="64px" />
                  </button>
                ))}
              </div>
              <p className="text-xs font-normal text-[#9b7766]">
                Demo: elige una imagen de muestra. La subida de archivos llegará con el backend.
              </p>
            </div>

            <Button type="submit" className="mt-4 w-full rounded-full bg-[#b65f3d] py-6 text-white hover:bg-[#95492f]">
              Publicar café
            </Button>
            <p className="text-center text-xs leading-relaxed text-[#806c62]">
              Formulario de demostración. El producto no se guarda de forma permanente.
            </p>
          </form>

          <aside className="h-fit lg:sticky lg:top-24">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#b65f3d]">Vista previa</p>
            <article className="mt-4 flex flex-col rounded-sm border border-[#e8ddd2] bg-white p-4">
              <div className="relative mb-4 aspect-[4/5] overflow-hidden rounded-sm bg-[#f2ede5]">
                <Image src={image} alt={name || 'Vista previa'} fill className="object-contain p-5" sizes="320px" />
                <span className="absolute left-3 top-3 rounded-full bg-white/85 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#664638]">
                  {category}
                </span>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#9b7766]">{brand}</p>
              <p className="mt-1 font-serif text-lg text-[#2d211c]">{name || 'Nombre del café'}</p>
              <p className="mt-1 text-sm text-[#86756e]">{notes || 'Notas de cata'}</p>
              <p className="mt-3 font-semibold text-[#2d211c]">
                {Number.isFinite(priceValue) && priceValue > 0 ? formatPrice(priceValue) : '—'}
              </p>
            </article>
          </aside>
        </div>
      </main>
      <footer className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-xs text-[#806c62] sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>© 2026 El Buen Grano</p>
        <p>Un marketplace para tostadores independientes.</p>
      </footer>
    </div>
  )
}
