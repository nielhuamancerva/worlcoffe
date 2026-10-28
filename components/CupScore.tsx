import { Coffee } from 'lucide-react'

// Puntaje de taza (escala SCA, 0–100) mostrado como porcentaje.
function cupLevel(score: number) {
  if (score >= 90) return 'Excepcional'
  if (score >= 85) return 'Excelente'
  if (score >= 80) return 'Muy bueno'
  return 'Comercial'
}

// Celda compacta para la ficha del café; se destaca con el color de acento.
export function CupScore({ score }: { score: number }) {
  return <div className="col-span-2 rounded-md bg-[#f5ece3] px-3 py-2.5">
    <p className="inline-flex items-center gap-1 text-xs text-[#b65f3d]"><Coffee className="size-3.5" /> Puntaje de taza</p>
    <div className="mt-1 flex items-center gap-3">
      <p className="font-semibold text-[#b65f3d]">{score.toLocaleString('es-PE', { maximumFractionDigits: 2 })}%</p>
      <div className="h-1 max-w-40 flex-1 overflow-hidden rounded-full bg-[#e8d9cb]" role="meter" aria-valuemin={0} aria-valuemax={100} aria-valuenow={score} aria-label="Puntaje de taza">
        <div className="h-full rounded-full bg-[#b65f3d]" style={{ width: `${score}%` }} />
      </div>
      <span className="text-xs text-[#86756e]">{cupLevel(score)}</span>
    </div>
  </div>
}
