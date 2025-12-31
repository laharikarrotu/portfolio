import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

// Rate limiting variables
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 60; // Adjust based on your API quota
const requestLog: number[] = [];

interface GoogleAIError {
  status?: number;
  message?: string;
}

export async function POST(req: Request) {
  // Validate API key exists
  const apiKey = process.env.GOOGLE_API_KEY;
  
  if (!apiKey) {
    console.error('GOOGLE_API_KEY is not configured in environment variables');
    return NextResponse.json(
      { error: 'API configuration error' },
      { status: 500 }
    );
  }

  try {
    // Check rate limit
    const now = Date.now();
    const windowStart = now - RATE_LIMIT_WINDOW;
    
    // Clean old requests
    while (requestLog.length && requestLog[0] < windowStart) {
      requestLog.shift();
    }
    
    // Check if rate limit exceeded
    if (requestLog.length >= MAX_REQUESTS_PER_WINDOW) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { status: 429 }
      );
    }
    
    // Add current request timestamp
    requestLog.push(now);

    const body = await req.json();
    const { message } = body;

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    try {
      const result = await model.generateContent(message);
      const response = await result.response;
      const text = response.text();

      return NextResponse.json({ response: text });
    } catch (error: unknown) {
      const apiError = error as GoogleAIError;
      
      // Handle API key errors specifically
      if (apiError.message?.includes('API key not valid')) {
        console.error('Invalid API key configuration');
        return NextResponse.json(
          { error: 'API configuration error' },
          { status: 500 }
        );
      }

      if (apiError.status === 429) {
        return NextResponse.json(
          { 
            error: 'API quota exceeded. Please try again later.',
            retryAfter: 60
          },
          { status: 429 }
        );
      }

      console.error('API Error:', apiError);
      return NextResponse.json(
        { error: 'Failed to process request' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}