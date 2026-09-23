'use client'

import { useState } from 'react'
import { MapPin, Search, SlidersHorizontal, Heart, UserRound, Sparkles, ArrowUpRight, Menu, X } from 'lucide-react'
import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const ClubMap = dynamic(() => import('@/components/club-map'), { ssr: false })
const Concierge = dynamic(() => import('@/components/concierge'), { ssr: false })

export const clubs = [
  { id: 'bath', name: 'The Bath Club', address: '5937 Collins Ave, Miami Beach, FL 33140', area: 'Mid-Beach', type: 'Beach club', lat: 25.8429, lng: -80.1208, color: '#e56f51' },
  { id: 'surf', name: 'The Surf Club', address: '9011 Collins Ave, Surfside, FL 33154', area: 'Surfside', type: 'Social club', lat: 25.8789, lng: -80.1212, color: '#2d5a5a' },
  { id: 'fisher', name: 'Fisher Island Club', address: '1 Fisher Island Dr, Miami Beach, FL 33109', area: 'Fisher Island', type: 'Private island', lat: 25.7587, lng: -80.1409, color: '#c89b5c' },
  { id: 'soho', name: 'Soho Beach House', address: '4385 Collins Ave, Miami Beach, FL 33140', area: 'Mid-Beach', type: 'Members club', lat: 25.8154, lng: -80.1227, color: '#385d7a' },
]

export default function Page() {
  const [active, setActive] = useState('bath')
  const [profileOpen, setProfileOpen] = useState(false)
  const activeClub = clubs.find((club) => club.id === active) ?? clubs[0]

  return (
    <main className="min-h-screen bg-[#f7f5f0] text-[#17343b]">
      <header className="flex h-[76px] items-center justify-between border-b border-[#dfe3dc] bg-[#faf9f5]/95 px-5 md:px-9">
        <div className="flex items-center gap-3"><div className="grid size-9 place-items-center rounded-full bg-[#e56f51] text-sm font-bold text-white">C</div><span className="font-serif text-xl tracking-tight">Clubhouse</span></div>
        <nav className="hidden items-center gap-8 text-sm text-[#668080] md:flex"><a className="font-medium text-[#17343b]" href="#explore">Explore</a><a href="#collections">Collections</a><a href="#about">About</a></nav>
        <div className="flex items-center gap-2"><Button variant="ghost" size="icon" className="hidden md:inline-flex"><Heart /></Button><Button variant="outline" className="hidden rounded-full border-[#cad5d0] md:inline-flex" onClick={() => setProfileOpen(true)}><UserRound data-icon="inline-start" />Profile</Button><Button variant="ghost" size="icon" className="md:hidden" onClick={() => setProfileOpen(true)}><Menu /></Button></div>
      </header>

      <section id="explore" className="mx-auto max-w-[1500px] px-4 py-5 md:px-8 md:py-8">
        <div className="mb-5 flex flex-col justify-between gap-4 md:mb-7 md:flex-row md:items-end"><div><p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#e56f51]">The Miami edit</p><h1 className="font-serif text-4xl leading-none tracking-tight md:text-6xl">Find your next <em className="font-normal">club.</em></h1><p className="mt-3 max-w-md text-sm leading-6 text-[#718481]">A considered guide to Miami’s most magnetic private spaces, from the sand to the bay.</p></div><div className="flex items-center gap-2"><div className="relative w-full md:w-64"><Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8ca09b]" size={16} /><Input placeholder="Search by neighborhood" className="rounded-full border-[#d7dfd9] bg-white pl-9" /></div><Button variant="outline" size="icon" className="rounded-full border-[#d7dfd9] bg-white"><SlidersHorizontal /></Button></div></div>
        <div className="grid min-h-[650px] overflow-hidden rounded-[28px] border border-[#dde4dd] bg-white shadow-[0_16px_50px_rgba(35,61,56,0.08)] lg:grid-cols-[1.18fr_0.82fr]">
          <div className="relative min-h-[430px] bg-[#cbd8d3] lg:min-h-0"><ClubMap clubs={clubs} activeId={active} onSelect={setActive} /><div className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold shadow-sm backdrop-blur">Miami Beach · 4 clubs</div><div className="absolute bottom-5 left-5 rounded-2xl bg-[#17343b]/95 px-4 py-3 text-xs text-white shadow-lg"><span className="mr-2 inline-block size-2 rounded-full bg-[#e56f51]" />Drag to explore the coastline</div></div>
          <aside className="flex flex-col bg-[#fcfbf8] p-5 md:p-7"><div className="mb-4 flex items-center justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8ba09a]">Curated for you</p><h2 className="mt-1 font-serif text-2xl">Featured clubs</h2></div><Badge variant="secondary" className="rounded-full bg-[#edf2ed] font-normal text-[#668080]">01—04</Badge></div><div className="flex flex-1 flex-col gap-2">{clubs.map((club, index) => <button key={club.id} onMouseEnter={() => setActive(club.id)} onFocus={() => setActive(club.id)} onClick={() => setActive(club.id)} className={cn('group flex w-full items-start gap-3 rounded-2xl border p-3 text-left transition-all', active === club.id ? 'border-[#e8a28e] bg-[#fff5f1] shadow-sm' : 'border-transparent hover:border-[#dce5df] hover:bg-white')}><span className="grid size-8 shrink-0 place-items-center rounded-full text-xs font-semibold text-white" style={{ backgroundColor: club.color }}>{String(index + 1).padStart(2, '0')}</span><span className="min-w-0 flex-1"><span className="flex items-center justify-between gap-2"><span className="font-serif text-lg">{club.name}</span><ArrowUpRight size={16} className="shrink-0 text-[#9aada8] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span><span className="mt-1 block truncate text-xs text-[#81938e]">{club.address}</span><span className="mt-2 block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#e56f51]">{club.type}</span></span></button>)}</div><div className="mt-5 rounded-2xl bg-[#edf2ed] p-4"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#668080]">Currently viewing</p><p className="mt-1 font-serif text-lg">{activeClub.name}</p><p className="mt-1 text-xs text-[#81938e]">{activeClub.area} · {activeClub.type}</p></div></aside>
        </div>
      </section>
      <Concierge clubs={clubs} onSelect={setActive} />
      {profileOpen && <div className="fixed inset-0 z-[1000] flex justify-end bg-[#17343b]/30 backdrop-blur-sm" onClick={() => setProfileOpen(false)}><section className="h-full w-full max-w-md overflow-y-auto bg-[#faf9f5] p-6 shadow-2xl md:p-9" onClick={(e) => e.stopPropagation()}><div className="flex items-center justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e56f51]">Your clubhouse</p><h2 className="mt-1 font-serif text-3xl">Profile & settings</h2></div><Button variant="ghost" size="icon" onClick={() => setProfileOpen(false)}><X /></Button></div><div className="mt-9 flex items-center gap-4"><div className="grid size-16 place-items-center rounded-full bg-[#dce6df] font-serif text-2xl">AR</div><div><p className="font-serif text-xl">Alex Rivera</p><p className="text-sm text-[#81938e]">alex@example.com</p></div></div><div className="mt-10 flex flex-col gap-6"><div className="rounded-2xl border border-[#dce5df] bg-white p-5"><p className="text-sm font-semibold">Account</p><div className="mt-4 flex flex-col gap-4 text-sm"><label className="flex items-center justify-between">Email notifications <input type="checkbox" defaultChecked className="accent-[#e56f51]" /></label><label className="flex items-center justify-between">Personalized club picks <input type="checkbox" defaultChecked className="accent-[#e56f51]" /></label></div></div><div className="rounded-2xl border border-[#dce5df] bg-white p-5"><p className="text-sm font-semibold">Saved areas</p><p className="mt-2 text-sm text-[#81938e]">Mid-Beach, Surfside, Fisher Island</p><Button variant="outline" className="mt-4 rounded-full">Edit preferences</Button></div><Button className="rounded-full bg-[#17343b] hover:bg-[#28545b]">Sign out</Button></div></section></div>}
    </main>
  )
}
