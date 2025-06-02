import type { AnalyzeSentimentOutput } from "@/ai/flows/analyze-sentiment";

export interface Review {
  id: string;
  name: string;
  email: string;
  message: string;
  rating: number;
  sentiment?: AnalyzeSentimentOutput;
  timestamp: number;
}
