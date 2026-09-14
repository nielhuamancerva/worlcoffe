import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import { formatPrice } from '@/lib/products'
import { sellerStats, type Seller } from '@/lib/sellers'

export function SellerCard({ seller }: { seller: Seller }) {
  const stats = sellerStats(seller)
  return (
    <Link
      href={`/marcas/${seller.slug}`}
      className="group flex flex-col justify-between rounded-sm border border-[#e8ddd2] bg-white p-6 transition hover:border-[#c9b6a6] hover:shadow-sm"
    >
      <div>
        <div className="flex items-center gap-4">
          <span className="flex size-12 items-center justify-center rounded-full bg-[#2d211c] font-serif text-lg text-[#f7f1e9]">
            {seller.logoInitials}
          </span>
          <div>
            <p className="font-serif text-xl text-[#2d211c] group-hover:text-[#9b4b2d]">{seller.name}</p>
            <p className="mt-0.5 flex items-center gap-1 text-xs text-[#9b7766]">
              <MapPin className="size-3" /> {seller.location}
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-[#86756e]">{seller.tagline}</p>
      </div>
      <div className="mt-6 flex items-center justify-between border-t border-[#e8ddd2] pt-4">
        <p className="text-xs text-[#86756e]">
          {stats.count} {stats.count === 1 ? 'café' : 'cafés'}
          {stats.from > 0 && <> · desde {formatPrice(stats.from)}</>}
        </p>
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#b65f3d]">
          Ver tienda <ArrowRight className="size-3.5 transition group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  )
}
