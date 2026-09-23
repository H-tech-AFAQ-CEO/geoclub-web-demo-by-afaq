'use client'

import { useState } from 'react'
import { Bot, Send, X, Sparkles } from 'lucide-react'
import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'
import { Button } from '@/components/ui/button'

type Club = { id: string; name: string; address: string; area: string; type: string; lat: number; lng: number; color: string }

function MiloAvatar({ small = false }: { small?: boolean }) {
  return <div className={`relative grid shrink-0 place-items-center overflow-hidden rounded-full bg-[#e56f51] ${small ? 'size-10' : 'size-11'}`}><div className="absolute top-[18%] size-[30%] rounded-full bg-[#f4c8aa]" /><div className="absolute bottom-[-12%] h-[55%] w-[58%] rounded-t-[45%] bg-[#17343b]" /><div className="absolute bottom-[31%] h-[8%] w-[18%] rotate-[30deg] bg-[#f4c8aa]" /><div className="absolute bottom-[31%] h-[8%] w-[18%] -rotate-[30deg] bg-[#f4c8aa]" /><div className="absolute top-[24%] h-[4%] w-[20%] rounded-full bg-[#17343b]" /></div>
}

export default function Concierge({ clubs, onSelect }: { clubs: Club[]; onSelect: (id: string) => void }) {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const { messages, sendMessage, status } = useChat({ transport: new DefaultChatTransport({ api: '/api/concierge' }) })
  const submit = (event: React.FormEvent) => { event.preventDefault(); if (!input.trim()) return; sendMessage({ text: input }); setInput('') }

  return <div className="fixed bottom-5 right-5 z-[900] md:bottom-7 md:right-7">
    {open && <div className="mb-3 flex h-[470px] w-[min(360px,calc(100vw-32px))] flex-col overflow-hidden rounded-[24px] border border-[#dbe5df] bg-[#fffdf9] shadow-[0_20px_60px_rgba(23,52,59,.22)]">
      <div className="flex items-center justify-between bg-[#17343b] px-4 py-3 text-white"><div className="flex items-center gap-2"><MiloAvatar small /><div><p className="text-sm font-semibold">Milo, your concierge</p><p className="text-[10px] text-[#b9cfca]">Always on call · Miami</p></div></div><Button variant="ghost" size="icon" className="text-white hover:bg-white/10" onClick={() => setOpen(false)} aria-label="Close concierge"><X /></Button></div>
      <div className="flex-1 overflow-y-auto p-4"><div className="mb-3 max-w-[85%] rounded-2xl rounded-tl-sm bg-[#edf2ed] p-3 text-sm text-[#3e5b5a]">Hi, I&apos;m Milo. Ask me to find a club by vibe, neighborhood, or occasion.</div>{messages.map((message) => <div key={message.id} className={`mb-3 flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}><div className={`max-w-[85%] rounded-2xl p-3 text-sm ${message.role === 'user' ? 'rounded-br-sm bg-[#e56f51] text-white' : 'rounded-bl-sm bg-[#edf2ed] text-[#3e5b5a]'}`}>{message.parts?.map((part, i) => part.type === 'text' ? <span key={i}>{part.text}</span> : null)}</div></div>)}{status === 'submitted' && <p className="text-xs text-[#81938e]">Milo is thinking…</p>}</div>
      <form onSubmit={submit} className="flex gap-2 border-t border-[#e2e8e2] p-3"><input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask Milo anything…" className="min-w-0 flex-1 rounded-full border border-[#dbe5df] bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-[#e8a28e]" /><Button type="submit" size="icon" className="size-9 rounded-full bg-[#17343b]" aria-label="Send"><Send size={15} /></Button></form>
    </div>}
    <button onClick={() => setOpen(!open)} aria-label="Ask Milo AI concierge" className="group flex items-center gap-3 rounded-full bg-[#17343b] p-1.5 pr-4 text-left text-white shadow-[0_12px_30px_rgba(23,52,59,.25)] transition-transform hover:-translate-y-1"><MiloAvatar /><span className="hidden sm:block"><span className="block text-xs font-semibold">Ask Milo</span><span className="flex items-center gap-1 text-[10px] text-[#b9cfca]"><Sparkles size={10} /> AI concierge</span></span></button>
  </div>
}
