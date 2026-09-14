export type Product = {
  id: string
  name: string
  brand: string
  category: string
  price: number
  image: string
  roast: string
  origin: string
  notes: string
  weight: string
  description: string
  featured?: boolean
}

export const products: Product[] = [
  { id: 'altura-colombia', name: 'Altura Colombia', brand: 'Café Origen', category: 'Grano', price: 18.5, image: '/coffee-1.png', roast: 'Medio', origin: 'Huila, Colombia', notes: 'Caramelo, panela y frutos rojos', weight: '250 g', description: 'Un café dulce y equilibrado de altura, tostado con cuidado para revelar todo el carácter de Huila.', featured: true },
  { id: 'ethiopia-floral', name: 'Ethiopia Floral', brand: 'Kaffa House', category: 'Grano', price: 22, image: '/coffee-2.png', roast: 'Claro', origin: 'Yirgacheffe, Etiopía', notes: 'Jazmín, bergamota y durazno', weight: '250 g', description: 'Aromático, floral y brillante. Una taza limpia para quienes disfrutan descubrir nuevos perfiles.', featured: true },
  { id: 'cerrado-brasil', name: 'Cerrado Brasil', brand: 'Terra Coffee', category: 'Grano', price: 16.75, image: '/coffee-3.png', roast: 'Medio', origin: 'Minas Gerais, Brasil', notes: 'Chocolate, nuez y miel', weight: '500 g', description: 'Cuerpo sedoso y dulzor natural. El espresso de todos los días, hecho extraordinario.', featured: true },
  { id: 'luz-de-manana', name: 'Luz de Mañana', brand: 'Café Origen', category: 'Molido', price: 19.5, image: '/coffee-4.png', roast: 'Claro', origin: 'Nariño, Colombia', notes: 'Cítricos, miel y té negro', weight: '250 g', description: 'Molido para filtro y listo para comenzar el día con una taza vibrante.', featured: true },
  { id: 'espresso-noir', name: 'Espresso Noir', brand: 'Kaffa House', category: 'Grano', price: 17.25, image: '/coffee-5.png', roast: 'Oscuro', origin: 'Blend de origen', notes: 'Cacao, avellana y especias', weight: '250 g', description: 'Intenso y aterciopelado, con una crema persistente que transforma cualquier espresso.', featured: true },
  { id: 'finca-luna', name: 'Finca Luna', brand: 'Terra Coffee', category: 'Grano', price: 21.5, image: '/coffee-6.png', roast: 'Medio', origin: 'Antioquia, Colombia', notes: 'Ciruela, vainilla y caramelo', weight: '400 g', description: 'Un lote de finca con notas dulces y una textura redonda, ideal para métodos manuales.', featured: true },
  { id: 'sierra-verde', name: 'Sierra Verde', brand: 'Café Origen', category: 'Grano', price: 20, image: '/coffee-7.png', roast: 'Medio', origin: 'Veracruz, México', notes: 'Manzana, cacao y azúcar morena', weight: '250 g', description: 'Un origen mexicano expresivo y balanceado, pensado para disfrutar sin prisa.' },
  { id: 'cold-brew', name: 'Cold Brew Concentrado', brand: 'Kaffa House', category: 'Listo para tomar', price: 14.5, image: '/coffee-8.png', roast: 'Medio', origin: 'Blend de origen', notes: 'Chocolate negro y caramelo', weight: '500 ml', description: 'Concentrado suave y refrescante para preparar cold brew en casa en segundos.' },
]

export const brands = ['Todas', 'Café Origen', 'Kaffa House', 'Terra Coffee']
export const categories = ['Todas', 'Grano', 'Molido', 'Listo para tomar']

export function getProduct(id: string) {
  return products.find((product) => product.id === id)
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(price)
}

export const featuredProducts = products.filter((product) => product.featured)
