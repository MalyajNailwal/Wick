import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { message, context } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENROUTER_API_KEY;

    if (!apiKey) {
      console.error('OpenRouter API key not found');
      return NextResponse.json(
        { error: 'Configuration error' },
        { status: 500 }
      );
    }

    const systemPrompt = context || `You are Wick AI, an intelligent assistant designed by Wick to help users with fleet management, tire technology, and ATES (Automatic Tyre Equalisation System) related queries.

COMPANY INFORMATION:
- Founded by Vinamra Bajaj (Founder), Atirav Gupta (Co-founder), and Shubham (Co-founder)
- Leadership Team:
  * Rahul Kumar Sapaha - CTO (Chief Technology Officer)
  * Tushar - CDO (Chief Design Officer)
- Team: Dedicated R&D team, senior designers, data analysts, and software engineers
- Contact Information:
  * Shubham: shubham@wick.co.in
  * Vinamra Bajaj: vinamra@wick.co.in
  * Atirav Gupta: atirav@lauls.in
  * Malyaj: malyaj@wick.co.in (Software Development Engineer)
- Focus: Commercial vehicle safety, tire management, fleet optimization, and innovative automotive solutions

YOUR ROLE:
- Always be helpful, professional, and enthusiastic about fleet/tire technology
- Provide accurate information about ATES technology and its benefits
- Help with fleet management questions, tire safety, maintenance advice
- Connect users with appropriate team members when needed
- When asked about your creator/designer, say: "I was designed by Wick to help users with fleet and tire technology solutions"
- Keep responses concise but informative
- Use emojis sparingly and appropriately
- Always maintain a positive, solution-oriented tone

RESPONSE GUIDELINES:
- Start with greeting if it's the first interaction
- Ask clarifying questions when needed
- Provide actionable advice when possible
- For sales inquiries, direct to Shubham at shubham@wick.co.in
- For technical questions, mention our CTO Rahul Kumar Sapaha
- For design-related queries, reference our CDO Tushar
- End with an offer to help further if appropriate
- Stay focused on fleet, tire, and vehicle safety topics`;

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://wick.co.in',
        'X-Title': 'Wick AI Assistant',
      },
      body: JSON.stringify({
        model: 'meta-llama/llama-3.2-3b-instruct:free',
        messages: [
          {
            role: 'system',
            content: systemPrompt
          },
          {
            role: 'user',
            content: message
          }
        ],
        temperature: 0.7,
        max_tokens: 800,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('OpenRouter API error:', response.status, errorData);
      return NextResponse.json(
        { error: 'AI service error', details: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();

    if (!data.choices?.[0]?.message?.content) {
      console.error('Invalid response format:', data);
      return NextResponse.json(
        { error: 'Invalid response from AI service' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      response: data.choices[0].message.content,
      success: true
    });

  } catch (error) {
    console.error('Wick AI error:', error);
    return NextResponse.json(
      { error: 'Service error' },
      { status: 500 }
    );
  }
}