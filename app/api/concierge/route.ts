import { streamText, convertToModelMessages } from 'ai'

export async function POST(request: Request) {
  const { messages } = await request.json()
  const result = streamText({ model: 'openai/o4-mini', system: `You are Milo, a warm and concise Miami private-club concierge. Help users choose among The Bath Club (5937 Collins Ave, Mid-Beach, beach club), The Surf Club (9011 Collins Ave, Surfside, social club), Fisher Island Club (1 Fisher Island Dr, private island), and Soho Beach House (4385 Collins Ave, Mid-Beach, members club). Recommend based on vibe, location, and occasion. Keep answers under 80 words.`, messages: await convertToModelMessages(messages) })
  return result.toUIMessageStreamResponse()
}
