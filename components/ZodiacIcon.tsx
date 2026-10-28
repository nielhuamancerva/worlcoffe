import { zodiacSymbols } from '@/lib/products'

// Dibuja el signo con Noto Sans Symbols (Google Fonts) en estilo texto: monocromo y del color del texto.
// ︎ fuerza la versión de texto para que el sistema no lo cambie por un emoji de color.
export function ZodiacIcon({ sign, className = '' }: { sign: string; className?: string }) {
  const symbol = zodiacSymbols[sign]
  if (!symbol) return null
  return <span aria-hidden="true" className={`font-signs leading-none ${className}`}>{symbol}{'︎'}</span>
}
