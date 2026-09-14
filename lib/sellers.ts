import { products, type Product } from './products'

export type Seller = {
  slug: string
  name: string
  tagline: string
  location: string
  founded: string
  logoInitials: string
  cover: string
  description: string
  values: string[]
}

// Empresas (tostadores) que exponen y venden su café en el marketplace.
// El campo `name` coincide con `product.brand` para enlazar los cafés.
export const sellers: Seller[] = [
  {
    slug: 'cafe-origen',
    name: 'Café Origen',
    tagline: 'Café de altura, trazado hasta la finca',
    location: 'Huila, Colombia',
    founded: '2016',
    logoInitials: 'CO',
    cover: '/coffee-1.png',
    description:
      'Un tostador familiar que trabaja directamente con productores de altura en Colombia y México. Cada lote se compra con trazabilidad y se tuesta en pequeñas cantidades para respetar el perfil del origen.',
    values: ['Comercio directo', 'Lotes pequeños', 'Trazabilidad total'],
  },
  {
    slug: 'kaffa-house',
    name: 'Kaffa House',
    tagline: 'Perfiles limpios y exploración de orígenes',
    location: 'Madrid, España',
    founded: '2019',
    logoInitials: 'KH',
    cover: '/coffee-2.png',
    description:
      'Especialistas en tuestes claros y cafés de exploración. Kaffa House busca lotes únicos por todo el mundo para acercar tazas brillantes y llenas de matices a casa.',
    values: ['Tuestes claros', 'Ediciones limitadas', 'Cata y formación'],
  },
  {
    slug: 'terra-coffee',
    name: 'Terra Coffee',
    tagline: 'Espresso con cuerpo, todos los días',
    location: 'Lisboa, Portugal',
    founded: '2014',
    logoInitials: 'TC',
    cover: '/coffee-3.png',
    description:
      'Tostador urbano enfocado en cafés de cuerpo sedoso y dulzor natural, pensados para el espresso diario. Colaboran con cooperativas de Brasil y Colombia con relaciones a largo plazo.',
    values: ['Relaciones a largo plazo', 'Café para espresso', 'Sostenibilidad'],
  },
]

export function getSeller(slug: string) {
  return sellers.find((seller) => seller.slug === slug)
}

export function getSellerByName(name: string) {
  return sellers.find((seller) => seller.name === name)
}

export function getProductsBySeller(seller: Seller): Product[] {
  return products.filter((product) => product.brand === seller.name)
}

export function sellerStats(seller: Seller) {
  const items = getProductsBySeller(seller)
  const prices = items.map((item) => item.price)
  return {
    count: items.length,
    from: prices.length ? Math.min(...prices) : 0,
  }
}
