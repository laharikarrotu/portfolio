import { GoogleGenerativeAI, GenerativeModel, ChatSession } from '@google/generative-ai';
import { NextResponse } from 'next/server';

// Initialize Google AI
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || '');

// Initialize the model
const model: GenerativeModel = genAI.getGenerativeModel({ model: "gemini-pro" });

// Create a chat history
let chat: ChatSession | null = null;

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    // If no chat exists, start a new one with initial context
    if (!chat) {
      chat = model.startChat({
        history: [
          {
            role: "user",
            parts: [{ text: "You are an AI assistant for Lahari's portfolio website. You should answer questions about Lahari's experience, skills, and background based on this information: Lahari is a Data Engineer & Cloud Specialist with over 3 years of experience, specializing in AWS cloud architecture, ETL pipeline development, and data optimization." }],
          },
          {
            role: "model",
            parts: [{ text: "I understand that I'm an AI assistant for Lahari's portfolio website. I'll help visitors learn about Lahari's experience as a Data Engineer & Cloud Specialist, focusing on their expertise in AWS cloud architecture, ETL pipeline development, and data optimization." }],
          },
        ],
      });
    }

    // Send message and get response
    const result = await chat.sendMessage([{ text: message }]);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ response: text });
  } catch (error) {
    console.error('Error in chat route:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}