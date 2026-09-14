import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Store } from 'lucide-react'
import { Header } from '@/components/Header'
import { SellerCard } from '@/components/SellerCard'
import { sellers } from '@/lib/sellers'
import { products } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Tostadores — El Buen Grano',
  description: 'Descubre los tostadores independientes que exponen y venden su café en El Buen Grano.',
}

export default function MarcasPage() {
  return (
    <div className="min-h-screen bg-[#fbfaf7] text-[#2d211c]">
      <Header />
      <main className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <section className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#b65f3d]">El marketplace</p>
            <h1 className="mt-3 font-serif text-5xl tracking-tight sm:text-6xl">Nuestros tostadores</h1>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-[#86756e]">
              Cada marca es una empresa independiente que expone su café en El Buen Grano. Explora sus historias,
              conoce sus orígenes y compra directamente de quienes tuestan.
            </p>
          </div>
          <div className="flex shrink-0 gap-8 text-center">
            <div>
              <p className="font-serif text-4xl text-[#b65f3d]">{sellers.length}</p>
              <p className="mt-1 text-xs text-[#86756e]">Tostadores</p>
            </div>
            <div>
              <p className="font-serif text-4xl text-[#b65f3d]">{products.length}</p>
              <p className="mt-1 text-xs text-[#86756e]">Cafés</p>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sellers.map((seller) => (
            <SellerCard key={seller.slug} seller={seller} />
          ))}
        </section>

        <section className="mt-16 flex flex-col items-start gap-6 rounded-sm bg-[#2d211c] p-8 text-[#f9f3ea] sm:flex-row sm:items-center sm:justify-between sm:p-12">
          <div className="flex items-center gap-5">
            <Store className="size-9 text-[#e8b49a]" />
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl">¿Tuestas tu propio café?</h2>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-[#eaded4]">
                Únete al marketplace y llega a nuevos clientes sin montar tu propia tienda online.
              </p>
            </div>
          </div>
          <Link
            href="/vender"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#b65f3d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#95492f]"
          >
            Vender en El Buen Grano <ArrowRight className="size-4" />
          </Link>
        </section>
      </main>
      <footer className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-xs text-[#806c62] sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>© 2026 El Buen Grano</p>
        <p>Un marketplace para tostadores independientes.</p>
      </footer>
    </div>
  )
}
