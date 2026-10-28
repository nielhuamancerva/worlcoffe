'use client'

import { useEffect, useState } from 'react'
import { ChevronDown, MessageCircle } from 'lucide-react'

type Comment = { id: string; name: string; text: string; date: string }

// Comentarios guardados en el navegador del visitante, por café (demo sin backend).
export function ProductComments({ productId }: { productId: string }) {
  const storageKey = `cafe-comments-${productId}`
  const [comments, setComments] = useState<Comment[]>([])
  const [name, setName] = useState('')
  const [text, setText] = useState('')

  useEffect(() => { try { const saved = window.localStorage.getItem(storageKey); setComments(saved ? JSON.parse(saved) : []) } catch { setComments([]) } }, [storageKey])

  const addComment = (event: React.FormEvent) => {
    event.preventDefault()
    if (!text.trim()) return
    const next = [{ id: crypto.randomUUID(), name: name.trim() || 'Anónimo', text: text.trim(), date: new Date().toISOString() }, ...comments]
    setComments(next)
    try { window.localStorage.setItem(storageKey, JSON.stringify(next)) } catch {}
    setText('')
  }

  return <details className="group mt-6 border-t border-[#e8ddd2] pt-4 text-sm">
    <summary className="inline-flex cursor-pointer list-none items-center gap-2 text-sm text-[#664638] hover:text-[#b65f3d] [&::-webkit-details-marker]:hidden">
      <MessageCircle className="size-4 text-[#b65f3d]" /> Comentarios ({comments.length}) · <span className="font-semibold text-[#b65f3d] underline underline-offset-4">Deja tu opinión</span>
      <ChevronDown className="size-3.5 transition-transform group-open:rotate-180" />
    </summary>
    <form onSubmit={addComment} className="mt-4 grid max-w-lg gap-2">
      <input value={name} onChange={(event) => setName(event.target.value)} maxLength={40} placeholder="Tu nombre (opcional)" className="border-b border-[#e0d4ca] bg-transparent px-1 py-2 text-sm outline-none focus:border-[#b65f3d]" />
      <textarea required value={text} onChange={(event) => setText(event.target.value)} maxLength={500} rows={2} placeholder="¿Qué te pareció este café?" className="resize-none border-b border-[#e0d4ca] bg-transparent px-1 py-2 text-sm outline-none focus:border-[#b65f3d]" />
      <button type="submit" className="justify-self-start rounded-full border border-[#d9c9bd] px-4 py-1.5 text-xs font-semibold text-[#806c62] transition hover:border-[#b65f3d] hover:text-[#b65f3d]">Publicar comentario</button>
    </form>
    {comments.length > 0 && <ul className="mt-5 grid max-w-lg gap-4">{comments.map((comment) => <li key={comment.id}>
      <p className="text-xs text-[#9b7766]"><span className="font-semibold text-[#664638]">{comment.name}</span> · {new Date(comment.date).toLocaleDateString('es-PE', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
      <p className="mt-1 whitespace-pre-line leading-relaxed text-[#2d211c]">{comment.text}</p>
    </li>)}</ul>}
  </details>
}
