'use client';

import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  currentRating: number;
  onRatingChange?: (rating: number) => void;
  totalStars?: number;
  size?: number;
  readOnly?: boolean;
  className?: string;
}

export function StarRating({
  currentRating,
  onRatingChange,
  totalStars = 5,
  size = 24,
  readOnly = false,
  className,
}: StarRatingProps) {
  return (
    <div className={cn("flex space-x-1", readOnly ? 'cursor-default' : 'cursor-pointer', className)}>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <Star
            key={starValue}
            size={size}
            className={cn(
              "transition-colors duration-200",
              starValue <= currentRating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 dark:text-gray-600',
              !readOnly && 'hover:text-yellow-300'
            )}
            onClick={() => !readOnly && onRatingChange?.(starValue)}
            onMouseEnter={() => !readOnly && onRatingChange?.(starValue)} // Optional: for hover effect to preview rating
            role={readOnly ? undefined : "button"}
            aria-label={readOnly ? undefined : `Rate ${starValue} out of ${totalStars} stars`}
            tabIndex={readOnly ? -1 : 0}
            onKeyDown={(e) => {
              if (!readOnly && (e.key === 'Enter' || e.key === ' ')) {
                onRatingChange?.(starValue);
              }
            }}
          />
        );
      })}
    </div>
  );
}
