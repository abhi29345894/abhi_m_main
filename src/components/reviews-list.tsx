import type { Review } from '@/types/review';
import { ReviewCard } from './review-card';
import { AlertCircle, Smile, Frown, Meh } from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

interface ReviewsListProps {
  reviews: Review[];
  averageSentimentScore: number | null;
  averageSentimentLabel: string | null;
}

export function ReviewsList({ reviews, averageSentimentScore, averageSentimentLabel }: ReviewsListProps) {
  if (reviews.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        <AlertCircle className="mx-auto h-12 w-12 mb-4" />
        <p className="font-headline text-xl">No reviews yet.</p>
        <p>Be the first to leave a review!</p>
      </div>
    );
  }

  const getSentimentIcon = () => {
    if (averageSentimentScore === null) return <Meh className="h-8 w-8 text-muted-foreground" />;
    if (averageSentimentScore > 0.3) return <Smile className="h-8 w-8 text-green-500" />;
    if (averageSentimentScore < -0.3) return <Frown className="h-8 w-8 text-red-500" />;
    return <Meh className="h-8 w-8 text-yellow-500" />;
  };
  
  // Normalize score from -1 to 1 to 0 to 100 for progress bar
  const normalizedScore = averageSentimentScore !== null ? (averageSentimentScore + 1) * 50 : 50;


  return (
    <div className="space-y-6">
      {averageSentimentScore !== null && averageSentimentLabel && (
        <Card className="mb-6 bg-background shadow-md">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-accent flex items-center">
              {getSentimentIcon()}
              <span className="ml-3">Overall Sentiment: {averageSentimentLabel}</span>
            </CardTitle>
            <CardDescription>
              Average Score: {averageSentimentScore.toFixed(2)} (out of 1.00)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={normalizedScore} className="w-full h-3" />
             <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>Negative</span>
              <span>Neutral</span>
              <span>Positive</span>
            </div>
          </CardContent>
        </Card>
      )}
      <div className="max-h-[500px] overflow-y-auto space-y-4 pr-2 rounded-md">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}
