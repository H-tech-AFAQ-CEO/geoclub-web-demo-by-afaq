export const clubKnowledge = {
  brand: {
    name: 'Clubhouse',
    city: 'Miami',
    voice: 'warm, discreet, editorial, helpful',
    mission: 'Help members discover private clubs and plan memorable Miami days.'
  },
  neighborhoods: [
    { name: 'Mid-Beach', mood: 'polished, oceanfront, wellness-led', clubs: ['bath', 'soho'], drive_note: 'Central Miami Beach, easy access from South Beach and Bal Harbour' },
    { name: 'Surfside', mood: 'quiet luxury, residential, timeless', clubs: ['surf'], drive_note: 'North of Mid-Beach, close to Bal Harbour' },
    { name: 'Fisher Island', mood: 'secluded, private, resort-like', clubs: ['fisher'], drive_note: 'Accessible by private ferry or yacht only' }
  ],
  clubs: [
    {
      id: 'bath', name: 'The Bath Club', address: '5937 Collins Ave, Miami Beach, FL 33140', area: 'Mid-Beach', type: 'Beach club', rating: 4.9, price_level: 4,
      coordinates: { lat: 25.8429, lng: -80.1208 },
      best_for: ['wellness mornings', 'family beach days', 'poolside lunch', 'quiet ocean time'],
      atmosphere: ['refined', 'sunny', 'restorative'], signature: 'Oceanfront wellness & dining',
      concierge_note: 'Recommend for guests who want a calm, polished beach day with wellness built in.'
    },
    {
      id: 'surf', name: 'The Surf Club', address: '9011 Collins Ave, Surfside, FL 33154', area: 'Surfside', type: 'Social club', rating: 4.8, price_level: 4,
      coordinates: { lat: 25.8789, lng: -80.1212 },
      best_for: ['special dinners', 'quiet luxury', 'classic Miami', 'celebrations'],
      atmosphere: ['iconic', 'timeless', 'elegant'], signature: 'A timeless coastal institution',
      concierge_note: 'Recommend for a landmark experience, especially when dinner and heritage matter.'
    },
    {
      id: 'fisher', name: 'Fisher Island Club', address: '1 Fisher Island Dr, Miami Beach, FL 33109', area: 'Fisher Island', type: 'Private island', rating: 4.9, price_level: 4,
      coordinates: { lat: 25.7587, lng: -80.1409 },
      best_for: ['seclusion', 'resort days', 'golf', 'long lunches', 'privacy'],
      atmosphere: ['exclusive', 'lush', 'unhurried'], signature: 'Island living, steps from downtown',
      concierge_note: 'Recommend for maximum privacy and a full-day escape from the city.'
    },
    {
      id: 'soho', name: 'Soho Beach House', address: '4385 Collins Ave, Miami Beach, FL 33140', area: 'Mid-Beach', type: 'Members club', rating: 4.7, price_level: 3,
      coordinates: { lat: 25.8154, lng: -80.1227 },
      best_for: ['creative energy', 'sunset drinks', 'music', 'meeting friends', 'casual afternoons'],
      atmosphere: ['creative', 'lively', 'eclectic'], signature: 'Creative energy by the sea',
      concierge_note: 'Recommend for social afternoons, music, cocktails, and a more expressive members-club mood.'
    }
  ],
  intents: {
    comparison: 'Compare by vibe, privacy, social energy, location, price, and occasion.',
    itinerary: 'Build a one-day plan with a club, meal, neighborhood stop, and timing.',
    navigation: 'When asked to find or show a club, name the club and explain that its listing can be selected on the map.',
    profile: 'When asked about profile or saved clubs, explain that the Profile button contains preferences and notification settings.'
  },
  response_rules: ['Never invent amenities, prices, availability, reservations, or membership requirements.', 'Use the supplied addresses exactly.', 'Be concise but specific.', 'If asked for real-time availability, direct the user to contact the club directly.', 'Offer a clear recommendation when the user gives an occasion or mood.']
} as const
export type ClubKnowledge = typeof clubKnowledge
