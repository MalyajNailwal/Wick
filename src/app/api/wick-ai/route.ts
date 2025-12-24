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
      console.error('OpenRouter API key not found in environment variables');
      return NextResponse.json(
        { error: 'AI service temporarily unavailable - API key not found' },
        { status: 503 }
      );
    }

    const systemPrompt = context || `You are Wick AI, an intelligent assistant designed by Wick Automation LLP to help users with fleet management, tire technology, and ATES (Automatic Tyre Equalisation System) related queries.

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
- When asked about your creator/designer, say: "I was designed by Wick Automation LLP to help users with fleet and tire technology solutions"
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

    // Try multiple free models in order of preference
    const freeModels = [
      'meta-llama/llama-3.2-3b-instruct:free',
      'google/gemini-2.0-flash-exp:free',
      'qwen/qwen-2-7b-instruct:free',
      'microsoft/phi-3-mini-128k-instruct:free'
    ];

    let lastError = null;
    
    for (const model of freeModels) {
      try {
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
            'HTTP-Referer': process.env.NEXT_PUBLIC_SITE_URL || 'https://wick.co.in',
            'X-Title': 'Wick AI Assistant',
          },
          body: JSON.stringify({
            model: model,
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
            max_tokens: 500,
            temperature: 0.7,
            top_p: 0.9,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          
          if (data.choices && data.choices[0] && data.choices[0].message) {
            const aiResponse = data.choices[0].message.content;
            return NextResponse.json({
              response: aiResponse,
              success: true,
              model: model
            });
          }
        }
        
        lastError = await response.text();
      } catch (error) {
        lastError = error;
        continue;
      }
    }

    // If all models fail, return fallback response
    console.error('All OpenRouter models failed:', lastError);
    return NextResponse.json(
      { 
        error: 'AI service temporarily unavailable',
        fallback: true 
      },
      { status: 503 }
    );



  } catch (error) {
    console.error('Wick AI API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}