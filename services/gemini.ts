
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export async function generatePersonalizedAnalysis(directorName: string, choices: string[]) {
  try {
    const prompt = `
      User just completed a quiz "What director are you?". 
      The result is: ${directorName}.
      The user chose these stylistic preferences (translated summary):
      ${choices.join(', ')}

      Based on this, write a short, poetic, and inspiring 2-sentence 'Director's Vision' for them in Russian. 
      The tone should be professional and cinematic.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 }
      }
    });

    return response.text?.trim() || "Ваш киноязык уникален, как и ваш взгляд на мир.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Кино — это жизнь, из которой вырезано всё скучное. Ваш путь только начинается.";
  }
}
