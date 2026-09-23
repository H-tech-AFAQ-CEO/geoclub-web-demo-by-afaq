'use client'

import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

type Club = { id: string; name: string; address: string; lat: number; lng: number; color: string }

function Focus({ club }: { club: Club }) {
  const map = useMap()
  useEffect(() => { map.flyTo([club.lat, club.lng], 13, { duration: 0.8 }) }, [club, map])
  return null
}

function pin(color: string, active: boolean) {
  return L.divIcon({ className: '', html: `<div style="width:${active ? 34 : 28}px;height:${active ? 34 : 28}px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);background:${color};border:3px solid white;box-shadow:0 4px 12px rgba(22,52,59,.25);display:grid;place-items:center"><span style="display:block;width:7px;height:7px;border-radius:50%;background:white"></span></div>`, iconSize: [34, 34], iconAnchor: [17, 34] })
}

export default function ClubMap({ clubs, activeId, onSelect }: { clubs: Club[]; activeId: string; onSelect: (id: string) => void }) {
  const active = clubs.find((club) => club.id === activeId) ?? clubs[0]
  return <MapContainer center={[25.82, -80.13]} zoom={12} scrollWheelZoom className="z-0 h-full min-h-[430px] w-full lg:min-h-[650px]"><TileLayer attribution='&copy; OpenStreetMap contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" /><Focus club={active} />{clubs.map((club) => <Marker key={club.id} position={[club.lat, club.lng]} icon={pin(club.color, club.id === activeId)} eventHandlers={{ click: () => onSelect(club.id) }}><Popup><strong>{club.name}</strong><br />{club.address}</Popup></Marker>)}</MapContainer>
}
