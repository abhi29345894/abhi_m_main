import type { Review } from '@/types/review';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { StarRating } from './star-rating';
import { User, MessageSquare, BarChart2 } from 'lucide-react';
import { Badge } from './ui/badge';

interface ReviewCardProps {
  review: Review;
}

function getSentimentBadgeVariant(sentimentLabel?: string): "default" | "destructive" | "secondary" {
  if (!sentimentLabel) return "secondary";
  switch (sentimentLabel.toLowerCase()) {
    case 'positive':
      return 'default'; // Greenish or positive color from theme
    case 'negative':
      return 'destructive';
    default:
      return 'secondary'; // Neutral
  }
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Card className="mb-4 shadow-lg bg-card/80 backdrop-blur-sm transition-all duration-300 ease-in-out hover:shadow-xl">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="font-headline text-xl text-primary flex items-center">
              <User className="mr-2 h-5 w-5" /> {review.name}
            </CardTitle>
            <CardDescription className="text-xs text-muted-foreground">{review.email}</CardDescription>
          </div>
          <StarRating currentRating={review.rating} readOnly size={20} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-start space-x-3 mb-3">
          <MessageSquare className="mt-1 h-5 w-5 text-accent shrink-0" />
          <p className="text-foreground/90 italic">&quot;{review.message}&quot;</p>
        </div>
        {review.sentiment && (
          <div className="mt-3 pt-3 border-t border-border/50 flex items-center space-x-3">
            <BarChart2 className="h-5 w-5 text-muted-foreground" />
            <Badge variant={getSentimentBadgeVariant(review.sentiment.sentimentLabel)}>
              {review.sentiment.sentimentLabel}
            </Badge>
            <span className="text-sm text-muted-foreground">
              Score: {review.sentiment.sentimentScore.toFixed(2)}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
