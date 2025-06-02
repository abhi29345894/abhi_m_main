import type React from 'react';
import { ContactForm, type ContactFormData } from './contact-form';
import { ReviewsList } from './reviews-list';
import type { Review } from '@/types/review';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface ConnectSectionProps {
  reviews: Review[];
  onAddReview: (data: ContactFormData & { rating: number }) => Promise<void>;
  averageSentimentScore: number | null;
  averageSentimentLabel: string | null;
}

export function ConnectSection({ reviews, onAddReview, averageSentimentScore, averageSentimentLabel }: ConnectSectionProps) {
  const whatsappNumber = "8320446826";

  return (
    <section id="connect" className="py-16 md:py-24 animate-fadeIn section-mb">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="bg-primary/10">
              <CardTitle className="font-headline text-3xl text-primary">Send a Message & Review</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ContactForm onSubmit={onAddReview} />
              <div className="mt-8 text-center">
                <Button asChild size="lg" className="font-headline text-lg bg-green-500 hover:bg-green-600 text-white shadow-md hover:shadow-lg transition-all transform hover:scale-105">
                  <Link href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 h-5 w-5" /> Connect on WhatsApp
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground mt-2">Directly message me on WhatsApp for a quick response!</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300">
             <CardHeader className="bg-accent/10">
               <CardTitle className="font-headline text-3xl text-accent">User Reviews & Sentiment</CardTitle>
             </CardHeader>
            <CardContent className="p-6">
              <ReviewsList reviews={reviews} averageSentimentScore={averageSentimentScore} averageSentimentLabel={averageSentimentLabel} />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
