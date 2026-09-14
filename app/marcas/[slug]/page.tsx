import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, Check, MapPin } from 'lucide-react'
import { Header } from '@/components/Header'
import { ProductCard } from '@/components/ProductCard'
import { getProductsBySeller, getSeller, sellers } from '@/lib/sellers'

export function generateStaticParams() {
  return sellers.map((seller) => ({ slug: seller.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const seller = getSeller(slug)
  if (!seller) return { title: 'Tostador no encontrado — El Buen Grano' }
  return {
    title: `${seller.name} — El Buen Grano`,
    description: seller.description,
  }
}

export default async function SellerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const seller = getSeller(slug)
  if (!seller) notFound()

  const catalog = getProductsBySeller(seller)

  return (
    <div className="min-h-screen bg-[#fbfaf7] text-[#2d211c]">
      <Header />
      <main>
        <section className="relative min-h-[320px] overflow-hidden bg-[#2d211c] text-[#f9f3ea]">
          <Image
            src={seller.cover}
            alt={`Café de ${seller.name}`}
            fill
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="relative mx-auto flex min-h-[320px] max-w-7xl flex-col justify-end px-5 py-10 lg:px-8">
            <Link
              href="/marcas"
              className="inline-flex w-fit items-center gap-2 text-sm text-[#eaded4] hover:text-white"
            >
              <ArrowLeft className="size-4" /> Todos los tostadores
            </Link>
            <div className="mt-6 flex items-center gap-5">
              <span className="flex size-16 items-center justify-center rounded-full bg-[#f7f1e9] font-serif text-2xl text-[#2d211c]">
                {seller.logoInitials}
              </span>
              <div>
                <h1 className="font-serif text-4xl leading-none sm:text-5xl">{seller.name}</h1>
                <p className="mt-2 text-sm text-[#eaded4]">{seller.tagline}</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#eaded4]">
              <span className="flex items-center gap-1.5">
                <MapPin className="size-3.5" /> {seller.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="size-3.5" /> Desde {seller.founded}
              </span>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1fr_320px] lg:px-8">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#b65f3d]">Sobre el tostador</p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#5f4f48]">{seller.description}</p>
          </div>
          <div className="h-fit rounded-sm bg-[#f0e7dc] p-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9b4b2d]">Lo que los define</p>
            <ul className="mt-4 space-y-3">
              {seller.values.map((value) => (
                <li key={value} className="flex items-center gap-2 text-sm text-[#5f4f48]">
                  <Check className="size-4 text-[#b65f3d]" /> {value}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
          <div className="mb-8 flex items-end justify-between border-b border-[#e8ddd2] pb-4">
            <h2 className="font-serif text-3xl">Cafés de {seller.name}</h2>
            <span className="text-sm text-[#86756e]">
              {catalog.length} {catalog.length === 1 ? 'producto' : 'productos'}
            </span>
          </div>
          {catalog.length > 0 ? (
            <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
              {catalog.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="py-20 text-center text-[#86756e]">Este tostador todavía no ha publicado cafés.</p>
          )}
        </section>
      </main>
      <footer className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-xs text-[#806c62] sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>© 2026 El Buen Grano</p>
        <p>Un marketplace para tostadores independientes.</p>
      </footer>
    </div>
  )
}
