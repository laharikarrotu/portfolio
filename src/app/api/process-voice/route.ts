import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const audioFile = formData.get('audio') as Blob;

    if (!audioFile) {
      return NextResponse.json(
        { error: 'No audio file provided' },
        { status: 400 }
      );
    }

    // For now, we'll use a mock transcription
    // In production, you would implement proper STT here
    const transcription = "Tell me about your projects";

    // Initialize the model
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    // Create chat with context
    const chat = model.startChat({
      history: [
        {
          role: 'user',
          parts: [{ text: 'You are a helpful voice assistant for my portfolio website. Help visitors learn about my background as a Data Engineer, my projects, and skills.' }],
        },
        {
          role: 'assistant',
          parts: [{ text: 'I understand. I will help visitors navigate through your portfolio and provide information about your background as a Data Engineer, your projects, and skills.' }],
        },
        {
          role: 'user',
          parts: [{ text: transcription }],
        },
      ],
    });

    const result = await chat.sendMessage([{ text: transcription }]);
    const aiResponse = await result.response;
    const text = aiResponse.text();

    // Determine any actions from the response
    const action = determineAction(text);

    return NextResponse.json({
      transcript: transcription,
      response: text,
      ...action,
    });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

function determineAction(response: string) {
  if (response.toLowerCase().includes('navigate to') || response.toLowerCase().includes('show')) {
    return {
      action: {
        type: 'navigate',
        target: extractTarget(response),
      }
    };
  }
  return null;
}

function extractTarget(response: string) {
  const targets = ['projects', 'skills', 'contact', 'about'];
  return targets.find(target => response.toLowerCase().includes(target)) || '';
} 