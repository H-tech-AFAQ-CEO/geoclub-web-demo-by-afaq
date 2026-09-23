import { createUIMessageStream, createUIMessageStreamResponse } from 'ai'
import { clubKnowledge } from '@/lib/club-knowledge'

function getMessageText(message: unknown) {
  if (!message || typeof message !== 'object') return ''
  const value = message as { parts?: Array<{ type?: string; text?: string }>; content?: string }
  if (typeof value.content === 'string') return value.content
  return value.parts?.filter((part) => part.type === 'text').map((part) => part.text ?? '').join(' ') ?? ''
}

function buildMiloReply(query: string) {
  const text = query.toLowerCase()
  const clubs = clubKnowledge.clubs
  const matches = clubs.filter((club) => `${club.name} ${club.area} ${club.type} ${club.best_for.join(', ')} ${club.concierge_note}`.toLowerCase().includes(text))

  if (text.includes('romantic') || text.includes('date') || text.includes('dinner')) {
    const club = clubs.find((item) => item.name.includes('Bath')) ?? clubs[0]
    return `For a romantic Miami evening, I would start with ${club.name}. ${club.concierge_note} It is at ${club.address}. Ask for an ocean-facing table, then keep the rest of the night unhurried.`
  }
  if (text.includes('private') || text.includes('quiet') || text.includes('exclusive')) {
    const club = clubs.find((item) => item.name.includes('Fisher')) ?? clubs[0]
    return `${club.name} is my pick for privacy and a quieter sense of arrival. ${club.concierge_note} You will find it at ${club.address}.`
  }
  if (text.includes('compare') || text.includes('difference')) {
    return clubs.slice(0, 3).map((club) => `• ${club.name}: ${club.type} — ${club.concierge_note}`).join('\n') + '\n\nTell me whether you value privacy, dining, wellness, or social energy and I will narrow it down.'
  }
  const club = matches[0] ?? clubs[0]
  return `${club.name} is a strong place to begin. ${club.concierge_note} Best for ${club.best_for.join(', ')}. Address: ${club.address}. Want me to compare it with another club or plan a full Miami day?`
}

export async function POST(request: Request) {
  const { messages } = await request.json()
  const latestMessage = Array.isArray(messages) ? messages[messages.length - 1] : undefined
  const reply = buildMiloReply(getMessageText(latestMessage))
  const stream = createUIMessageStream({
    execute: ({ writer }) => {
      const id = 'milo-response'
      writer.write({ type: 'text-start', id })
      writer.write({ type: 'text-delta', id, delta: reply })
      writer.write({ type: 'text-end', id })
    },
  })
  return createUIMessageStreamResponse({ stream })
}
