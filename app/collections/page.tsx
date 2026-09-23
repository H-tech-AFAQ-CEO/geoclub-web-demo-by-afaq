'use client'

import Link from 'next/link'
import { ArrowUpRight, ChevronLeft, Sparkles } from 'lucide-react'
import { clubs } from '@/app/page'

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-[#f5f4ef] px-5 py-6 text-[#17343b] md:px-10 md:py-8">
      <header className="mx-auto flex max-w-6xl items-center justify-between">
        <Link href="/" className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-full bg-[#17343b] font-bold text-[#f4c8aa]">C</span><span className="font-serif text-xl">Clubhouse<span className="text-[#d86f55]">.</span></span></Link>
        <Link href="/" className="flex items-center gap-2 text-sm text-[#668080] transition-colors hover:text-[#17343b]"><ChevronLeft size={16} /> Back to explore</Link>
      </header>
      <section className="mx-auto max-w-6xl py-16 md:py-24"><div className="max-w-2xl"><div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#d86f55]"><Sparkles size={14} /> The edit</div><h1 className="mt-4 font-serif text-5xl leading-none tracking-[-.04em] md:text-7xl">Collections for <em className="font-normal text-[#d86f55]">belonging.</em></h1><p className="mt-6 text-base leading-7 text-[#718481]">A seasonal edit of places, rituals, and rooms worth making time for in Miami.</p></div><div className="mt-14 grid gap-5 md:grid-cols-2">{clubs.map((club, index) => <article key={club.id} className="group rounded-[28px] border border-[#dce5df] bg-white p-6 shadow-[0_18px_50px_rgba(35,61,56,.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(35,61,56,.12)]"><div className="flex items-start justify-between"><span className="grid size-10 place-items-center rounded-full text-xs font-semibold text-white" style={{ backgroundColor: club.color }}>{String(index + 1).padStart(2, '0')}</span><ArrowUpRight className="text-[#9aada8] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" /></div><p className="mt-12 text-xs font-semibold uppercase tracking-[0.16em] text-[#d86f55]">{club.type}</p><h2 className="mt-2 font-serif text-3xl">{club.name}</h2><p className="mt-3 text-sm leading-6 text-[#81938e]">{club.note}. A considered place to slow down, gather, and make a day of it.</p><p className="mt-5 border-t border-[#edf1ed] pt-4 text-xs text-[#9aada8]">{club.address}</p></article>)}</div></section>
    </main>
  )
}
