'use server';

/**
 * @fileOverview Sentiment analysis flow for user reviews.
 *
 * - analyzeSentiment - A function that analyzes the sentiment of a given text.
 * - AnalyzeSentimentInput - The input type for the analyzeSentiment function.
 * - AnalyzeSentimentOutput - The return type for the analyzeSentiment function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeSentimentInputSchema = z.object({
  text: z
    .string()
    .describe('The text to analyze for sentiment.'),
});
export type AnalyzeSentimentInput = z.infer<typeof AnalyzeSentimentInputSchema>;

const AnalyzeSentimentOutputSchema = z.object({
  sentimentScore: z
    .number()
    .describe('The sentiment score of the text, ranging from -1 (negative) to 1 (positive).'),
  sentimentLabel: z
    .string()
    .describe('A label describing the sentiment of the text (positive, negative, or neutral).'),
});
export type AnalyzeSentimentOutput = z.infer<typeof AnalyzeSentimentOutputSchema>;

export async function analyzeSentiment(input: AnalyzeSentimentInput): Promise<AnalyzeSentimentOutput> {
  return analyzeSentimentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeSentimentPrompt',
  input: {schema: AnalyzeSentimentInputSchema},
  output: {schema: AnalyzeSentimentOutputSchema},
  prompt: `You are a sentiment analysis expert. Analyze the sentiment of the following text and provide a sentiment score between -1 and 1, where -1 is very negative, 0 is neutral, and 1 is very positive. Also, provide a sentiment label describing the sentiment (positive, negative, or neutral).\n\nText: {{{text}}}`,
});

const analyzeSentimentFlow = ai.defineFlow(
  {
    name: 'analyzeSentimentFlow',
    inputSchema: AnalyzeSentimentInputSchema,
    outputSchema: AnalyzeSentimentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
