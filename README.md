# Clubhouse.

## Miami private-club discovery experience

Clubhouse is a polished responsive web demo for discovering Miami’s most magnetic private spaces. It combines an interactive map, featured club listings, curated collections, a personal profile/settings route, and Milo — an AI concierge designed to help visitors plan their next outing.

**Developed by Afaq Ahmad.**

## Included experience

- Interactive Miami club map with hover/focus synchronization between listings and map pins.
- Featured real-world venues: The Bath Club, The Surf Club, Fisher Island Club, and Soho Beach House.
- Responsive layouts for desktop, tablet, and mobile.
- Curated collections route at `/collections`.
- Editorial point-of-view route at `/about`.
- Profile and settings route at `/profile`.
- AI concierge launcher with venue-aware knowledge and action-oriented responses.
- Accessible keyboard focus states, semantic navigation, responsive controls, reduced-motion support, and branded metadata.

## Technical overview

- Next.js App Router with TypeScript.
- Tailwind CSS and shadcn-inspired UI primitives.
- Lucide icons.
- AI concierge route at `app/api/concierge/route.ts`.
- Venue knowledge base at `lib/club-knowledge.ts`.
- Map experience in `components/club-map.tsx`.

## Content and customization

Update the primary venue data in `app/page.tsx` and the supporting concierge knowledge in `lib/club-knowledge.ts`. Brand colors, typography, motion, and reduced-motion behavior are centralized in `app/globals.css`. Replace the profile demo values in `app/profile/page.tsx` when user authentication and persistence are connected.

## Client handoff notes

This version is a presentation-ready frontend demo. The next production steps are to connect authentication, persist saved clubs and preferences, replace the illustrative map layer with a licensed map provider, and connect the concierge to a production AI model with authenticated server-side credentials.

## Credits

Product concept, interface direction, and development: **Afaq Ahmad**.
