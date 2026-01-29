
import { GoogleGenAI } from "@google/genai";
import { Candidate } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateInterviewQuestions = async (candidate: Candidate) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Suggest 3 unique interview questions for a real estate broker to ask a candidate named ${candidate.name} who specializes in ${candidate.specialty}. Their bio is: "${candidate.bio}". Keep the tone professional and specific to real estate.`,
    });
    return response.text;
  } catch (error) {
    console.error("AI Generation Error:", error);
    return "Could not generate questions at this time.";
  }
};
