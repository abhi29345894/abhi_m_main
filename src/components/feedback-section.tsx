'use client';

import type React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactForm, type ContactFormData } from '@/components/contact-form';
import { ReviewsList } from '@/components/reviews-list';
import type { Review } from '@/types/review';
import { MessageCircle, Star } from 'lucide-react';

interface FeedbackSectionProps {
  reviews: Review[];
  averageSentimentScore: number | null;
  averageSentimentLabel: string | null;
  onAddReview: (data: ContactFormData & { rating: number }) => Promise<void>;
}

export function FeedbackSection({
  reviews,
  averageSentimentScore,
  averageSentimentLabel,
  onAddReview,
}: FeedbackSectionProps) {
  return (
    <section id="feedback" className="py-20 md:py-28 animate-fadeIn section-mb">
      <div className="container mx-auto px-4">
        <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-[1.01]">
          <CardHeader className="bg-primary/10 p-6 md:p-8">
            <div className="flex items-center justify-center space-x-3 animate-slideInUp">
              <MessageCircle className="h-8 w-8 md:h-10 md:w-10 text-primary" />
              <CardTitle className="font-headline text-3xl md:text-4xl text-primary text-center">
                Send a Message & Review
              </CardTitle>
            </div>
             <p className="text-center text-md text-foreground/70 mt-2 animate-slideInUp" style={{animationDelay: '0.1s'}}>
              Your feedback helps me improve. Share your thoughts or ask any questions!
            </p>
          </CardHeader>
          <CardContent className="p-6 md:p-8 grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="animate-slideInLeft" style={{animationDelay: '0.2s'}}>
              <h3 className="font-headline text-2xl text-accent mb-6">Submit Your Feedback</h3>
              <ContactForm onSubmit={onAddReview} />
            </div>
            <div className="animate-slideInRight" style={{animationDelay: '0.4s'}}>
              <h3 className="font-headline text-2xl text-accent mb-6 flex items-center">
                <Star className="h-6 w-6 mr-2 text-yellow-400" /> User Reviews & Sentiment
              </h3>
              <ReviewsList 
                reviews={reviews} 
                averageSentimentScore={averageSentimentScore}
                averageSentimentLabel={averageSentimentLabel}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
