'use client';

import { useState, useEffect, useRef } from 'react';
import { AppLayout } from '@/components/layout/app-layout';
import { HomeSection } from '@/components/home-section';
import { AboutSection } from '@/components/about-section';
import { ConnectSection } from '@/components/connect-section';
import type { Review } from '@/types/review';
import type { ContactFormData } from '@/components/contact-form';
import { analyzeSentiment } from '@/ai/flows/analyze-sentiment';
import { useToast } from "@/hooks/use-toast";

export default function LandingPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [averageSentimentScore, setAverageSentimentScore] = useState<number | null>(null);
  const [averageSentimentLabel, setAverageSentimentLabel] = useState<string | null>(null);
  const { toast } = useToast();

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const connectRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    // Load reviews from local storage if any
    const storedReviews = localStorage.getItem('abhiConnectReviews');
    if (storedReviews) {
      try {
        const parsedReviews = JSON.parse(storedReviews) as Review[];
        // Ensure all reviews have a timestamp, default to Date.now() if missing for older data
        const reviewsWithTimestamps = parsedReviews.map(r => ({ ...r, timestamp: r.timestamp || Date.now() }));
        setReviews(reviewsWithTimestamps);
      } catch (e) {
        console.error("Failed to parse reviews from local storage", e);
        localStorage.removeItem('abhiConnectReviews'); // Clear corrupted data
      }
    }
  }, []);

  useEffect(() => {
    // Save reviews to local storage whenever they change
    if (reviews.length > 0) {
      localStorage.setItem('abhiConnectReviews', JSON.stringify(reviews));
    }
    // Calculate average sentiment
    if (reviews.length > 0) {
      const validSentiments = reviews.filter(r => r.sentiment).map(r => r.sentiment!.sentimentScore);
      if (validSentiments.length > 0) {
        const sum = validSentiments.reduce((acc, score) => acc + score, 0);
        const avgScore = sum / validSentiments.length;
        setAverageSentimentScore(avgScore);

        if (avgScore > 0.3) setAverageSentimentLabel("Positive");
        else if (avgScore < -0.3) setAverageSentimentLabel("Negative");
        else setAverageSentimentLabel("Neutral");
      } else {
        setAverageSentimentScore(null);
        setAverageSentimentLabel(null);
      }
    } else {
      setAverageSentimentScore(null);
      setAverageSentimentLabel(null);
    }
  }, [reviews]);


  const handleAddReview = async (data: ContactFormData & { rating: number }) => {
    try {
      const sentimentResult = await analyzeSentiment({ text: data.message });
      const newReview: Review = {
        id: new Date().toISOString() + Math.random().toString(36).substring(2,9), // More robust ID
        ...data,
        sentiment: sentimentResult,
        timestamp: Date.now(),
      };
      
      // Add new review and sort by timestamp descending
      setReviews(prevReviews => 
        [newReview, ...prevReviews].sort((a, b) => b.timestamp - a.timestamp)
      );

    } catch (error) {
      console.error("Error analyzing sentiment or adding review:", error);
      toast({
        title: "Error processing review",
        description: "Could not analyze sentiment for this review. It will be added without sentiment data.",
        variant: "destructive",
      });
      // Add review without sentiment if AI fails
      const newReviewWithoutSentiment: Review = {
        id: new Date().toISOString() + Math.random().toString(36).substring(2,9),
        ...data,
        timestamp: Date.now(),
      };
      setReviews(prevReviews => 
        [newReviewWithoutSentiment, ...prevReviews].sort((a, b) => b.timestamp - a.timestamp)
      );
    }
  };

  const navItems = [
    { label: 'Home', onClick: () => scrollToRef(homeRef) },
    { label: 'About', onClick: () => scrollToRef(aboutRef) },
    { label: 'Connect', onClick: () => scrollToRef(connectRef) },
  ];

  return (
    <AppLayout navItems={navItems}>
      <div ref={homeRef} className="pt-5"> {/* Add padding top to account for fixed header */}
        <HomeSection onContactClick={() => scrollToRef(connectRef)} />
      </div>
      <div ref={aboutRef} className="pt-20 -mt-20"> {/* Offset for fixed header */}
        <AboutSection />
      </div>
      <div ref={connectRef} className="pt-20 -mt-20"> {/* Offset for fixed header */}
        <ConnectSection 
          reviews={reviews} 
          onAddReview={handleAddReview} 
          averageSentimentScore={averageSentimentScore}
          averageSentimentLabel={averageSentimentLabel}
        />
      </div>
    </AppLayout>
  );
}
