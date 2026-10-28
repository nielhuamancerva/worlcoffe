export type Product = {
  id: string
  name: string
  brand: string
  category: string
  variety: string
  price: number
  image: string
  roast: string
  origin: string
  province: string
  district: string
  department: string
  zodiac: string[]
  sold: number
  likes: number
  cupScore: number
  notes: string
  weight: string
  description: string
  featured?: boolean
}

export const products: Product[] = [
  { id: 'altura-colombia', name: 'Altura Cajamarca', brand: 'Café Origen', category: 'Grano', variety: 'Caturra', price: 18.5, image: '/coffee-1.png', roast: 'Medio', origin: 'Huabal, Jaén, Cajamarca', district: 'Huabal', province: 'Jaén', department: 'Cajamarca', zodiac: ['Tauro', 'Leo'], sold: 342, likes: 128, cupScore: 86.5, notes: 'Caramelo, panela y frutos rojos', weight: '250 g', description: 'Un café dulce y equilibrado de altura, tostado con cuidado para revelar todo el carácter de Huabal, en Jaén.', featured: true },
  { id: 'ethiopia-floral', name: 'Floral de Cusco', brand: 'Kaffa House', category: 'Grano', variety: 'Geisha', price: 22, image: '/coffee-2.png', roast: 'Claro', origin: 'Huayopata, La Convención, Cusco', district: 'Huayopata', province: 'La Convención', department: 'Cusco', zodiac: ['Libra', 'Piscis'], sold: 289, likes: 164, cupScore: 88.75, notes: 'Jazmín, bergamota y durazno', weight: '250 g', description: 'Aromático, floral y brillante. Una taza limpia para quienes disfrutan descubrir nuevos perfiles.', featured: true },
  { id: 'cerrado-brasil', name: 'Selva Central', brand: 'Terra Coffee', category: 'Grano', variety: 'Catimor', price: 16.75, image: '/coffee-3.png', roast: 'Medio', origin: 'Perené, Chanchamayo, Junín', district: 'Perené', province: 'Chanchamayo', department: 'Junín', zodiac: ['Capricornio'], sold: 415, likes: 141, cupScore: 85.25, notes: 'Chocolate, nuez y miel', weight: '500 g', description: 'Cuerpo sedoso y dulzor natural. El espresso de todos los días, hecho extraordinario.', featured: true },
  { id: 'luz-de-manana', name: 'Luz de Mañana', brand: 'Café Origen', category: 'Molido', variety: 'Typica', price: 19.5, image: '/coffee-4.png', roast: 'Claro', origin: 'Huambo, Rodríguez de Mendoza, Amazonas', district: 'Huambo', province: 'Rodríguez de Mendoza', department: 'Amazonas', zodiac: ['Géminis', 'Acuario'], sold: 198, likes: 87, cupScore: 86, notes: 'Cítricos, miel y té negro', weight: '250 g', description: 'Molido para filtro y listo para comenzar el día con una taza vibrante.', featured: true },
  { id: 'espresso-noir', name: 'Espresso Noir', brand: 'Kaffa House', category: 'Grano', variety: 'Bourbon', price: 17.25, image: '/coffee-5.png', roast: 'Oscuro', origin: 'Jepelacio, Moyobamba, San Martín', district: 'Jepelacio', province: 'Moyobamba', department: 'San Martín', zodiac: ['Aries', 'Escorpio'], sold: 376, likes: 119, cupScore: 84.5, notes: 'Cacao, avellana y especias', weight: '250 g', description: 'Intenso y aterciopelado, con una crema persistente que transforma cualquier espresso.', featured: true },
  { id: 'finca-luna', name: 'Finca Luna', brand: 'Terra Coffee', category: 'Grano', variety: 'Pache', price: 21.5, image: '/coffee-6.png', roast: 'Medio', origin: 'Villa Rica, Oxapampa, Pasco', district: 'Villa Rica', province: 'Oxapampa', department: 'Pasco', zodiac: ['Cáncer', 'Sagitario'], sold: 154, likes: 96, cupScore: 87.25, notes: 'Ciruela, vainilla y caramelo', weight: '400 g', description: 'Un lote de finca con notas dulces y una textura redonda, ideal para métodos manuales.', featured: true },
  { id: 'sierra-verde', name: 'Sierra Verde', brand: 'Café Origen', category: 'Grano', variety: 'Typica', price: 20, image: '/coffee-7.png', roast: 'Medio', origin: 'San Juan del Oro, Sandia, Puno', district: 'San Juan del Oro', province: 'Sandia', department: 'Puno', zodiac: ['Virgo'], sold: 231, likes: 73, cupScore: 85.75, notes: 'Manzana, cacao y azúcar morena', weight: '250 g', description: 'Un origen puneño expresivo y balanceado, pensado para disfrutar sin prisa.' }]

export const brands = ['Todas', 'Café Origen', 'Kaffa House', 'Terra Coffee']
export const categories = ['Todas', 'Grano', 'Molido']
// Variedades de café que se cultivan en Perú.
export const coffeeVarieties = ['Geisha', 'Caturra', 'Typica', 'Bourbon', 'Catuai', 'Pache', 'Catimor']
export const varieties = ['Todas', ...coffeeVarieties]

// Departamentos cafetaleros del Perú (para publicar un café).
export const coffeeDepartments = ['Amazonas', 'Ayacucho', 'Cajamarca', 'Cusco', 'Huánuco', 'Junín', 'Pasco', 'Piura', 'Puno', 'San Martín']

// Departamentos con café en el catálogo, para el filtro de la tienda.
export const departments = ['Todos', ...Array.from(new Set(products.map((product) => product.department))).sort((a, b) => a.localeCompare(b, 'es'))]

export function getProduct(id: string) {
  return products.find((product) => product.id === id)
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat('es-PE', { style: 'currency', currency: 'PEN' }).format(price)
}

export const featuredProducts = products.filter((product) => product.featured)

// Ranking por unidades vendidas, de mayor a menor.
export const bestSellers = [...products].sort((a, b) => b.sold - a.sold)

// Valoración interna de 0 a 5: 60 % me gusta y 40 % ventas, ambos relativos al mejor del catálogo.
const maxLikes = Math.max(...products.map((product) => product.likes))
const maxSold = Math.max(...products.map((product) => product.sold))

export function internalRating(likes: number, sold: number) {
  const score = 0.6 * Math.min(likes / maxLikes, 1) + 0.4 * Math.min(sold / maxSold, 1)
  return Math.round(score * 50) / 10
}

// Signos zodiacales en orden del calendario; cada café tiene uno o dos afines a su perfil.
// Símbolo Unicode de cada signo; se dibuja con la fuente Noto Sans Symbols de Google (ver ZodiacIcon), no como emoji.
export const zodiacSymbols: Record<string, string> = { Aries: '\u2648', Tauro: '\u2649', Géminis: '\u264A', Cáncer: '\u264B', Leo: '\u264C', Virgo: '\u264D', Libra: '\u264E', Escorpio: '\u264F', Sagitario: '\u2650', Capricornio: '\u2651', Acuario: '\u2652', Piscis: '\u2653' }
export const zodiacSigns = ['Todos', ...Object.keys(zodiacSymbols)]
