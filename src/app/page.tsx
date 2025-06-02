'use client';

import { useState, useEffect, useRef } from 'react';
import type { Review } from '@/types/review';
import { analyzeSentiment, type AnalyzeSentimentOutput } from '@/ai/flows/analyze-sentiment';
import { AppLayout } from '@/components/layout/app-layout';
import { HomeSection } from '@/components/home-section';
import { AboutSection } from '@/components/about-section';
import { PackagesSection } from '@/components/packages-section';
import { ConnectSection } from '@/components/connect-section';
import { FeedbackSection } from '@/components/feedback-section';
import type { ContactFormData } from '@/components/contact-form';
import { useToast } from "@/hooks/use-toast";


export default function LandingPage() {
  const { toast } = useToast();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [averageSentimentScore, setAverageSentimentScore] = useState<number | null>(null);
  const [averageSentimentLabel, setAverageSentimentLabel] = useState<string | null>(null);


  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const packagesRef = useRef<HTMLDivElement>(null);
  const connectRef = useRef<HTMLDivElement>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    // Load reviews from localStorage or an API in a real app
    const storedReviews = localStorage.getItem('abhi-connect-reviews');
    if (storedReviews) {
      const parsedReviews: Review[] = JSON.parse(storedReviews);
      setReviews(parsedReviews);
      calculateAverageSentiment(parsedReviews);
    }
  }, []);

  const calculateAverageSentiment = (currentReviews: Review[]) => {
    if (currentReviews.length === 0) {
      setAverageSentimentScore(null);
      setAverageSentimentLabel(null);
      return;
    }

    const validSentiments = currentReviews.filter(r => r.sentiment).map(r => r.sentiment!.sentimentScore);
    if (validSentiments.length === 0) {
      setAverageSentimentScore(null);
      setAverageSentimentLabel(null);
      return;
    }

    const totalScore = validSentiments.reduce((sum, score) => sum + score, 0);
    const avgScore = totalScore / validSentiments.length;
    setAverageSentimentScore(avgScore);

    if (avgScore > 0.3) setAverageSentimentLabel("Positive");
    else if (avgScore < -0.3) setAverageSentimentLabel("Negative");
    else setAverageSentimentLabel("Neutral");
  };

  const handleAddReview = async (data: ContactFormData & { rating: number }) => {
    // Sentiment analysis will be done by ContactForm's FormSubmit integration if needed
    // Or, if we want to do it client-side with Genkit before sending to FormSubmit:
    let sentimentOutput: AnalyzeSentimentOutput | undefined = undefined;
    try {
      sentimentOutput = await analyzeSentiment({ text: data.message });
    } catch (aiError) {
      console.error("AI Sentiment Analysis Error:", aiError);
      // Optionally notify user that AI analysis failed but review was still submitted
      toast({
        title: "AI Analysis Skipped",
        description: "Could not analyze sentiment, but your review is submitted.",
        variant: "default",
      });
    }

    const newReview: Review = {
      id: Date.now().toString(), // Simple ID generation
      name: data.name,
      email: data.email,
      message: data.message,
      rating: data.rating,
      sentiment: sentimentOutput,
      timestamp: Date.now(),
    };

    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem('abhi-connect-reviews', JSON.stringify(updatedReviews)); // Persist
    calculateAverageSentiment(updatedReviews);
  };


  const navItems = [
    { label: 'Home', onClick: () => scrollToRef(homeRef) },
    { label: 'About', onClick: () => scrollToRef(aboutRef) },
    { label: 'Packages', onClick: () => scrollToRef(packagesRef) },
    { label: 'Connect', onClick: () => scrollToRef(connectRef) },
    { label: 'Feedback', onClick: () => scrollToRef(feedbackRef) },
  ];

  return (
    <AppLayout navItems={navItems}>
      <div ref={homeRef} className="pt-5"> {/* Add padding top to account for fixed header */}
        <HomeSection onContactClick={() => scrollToRef(connectRef)} />
      </div>
      <div ref={aboutRef} className="pt-20 -mt-20"> {/* Offset for fixed header */}
        <AboutSection />
      </div>
      <div ref={packagesRef} className="pt-20 -mt-20"> {/* Offset for fixed header */}
        <PackagesSection />
      </div>
      <div ref={connectRef} className="pt-20 -mt-20"> {/* Offset for fixed header */}
        <ConnectSection />
      </div>
      <div ref={feedbackRef} className="pt-20 -mt-20"> {/* Offset for fixed header */}
        <FeedbackSection 
          reviews={reviews}
          averageSentimentScore={averageSentimentScore}
          averageSentimentLabel={averageSentimentLabel}
          onAddReview={handleAddReview}
        />
      </div>
    </AppLayout>
  );
}
