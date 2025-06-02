'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { StarRating } from './star-rating';
import { useToast } from "@/hooks/use-toast";
import { Send } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

interface ContactFormProps {
  onSubmit: (data: ContactFormData & { rating: number }) => Promise<void>;
}

export function ContactForm({ onSubmit }: ContactFormProps) {
  const [rating, setRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const handleFormSubmit: SubmitHandler<ContactFormData> = async (data) => {
    if (rating === 0) {
      toast({
        title: "Rating Required",
        description: "Please select a star rating before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      // Send to FormSubmit.co
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("message", data.message);
      formData.append("rating", rating.toString());
      formData.append("_subject", `New Contact & Review from ${data.name} via Abhi Connect`);
      // Add FormSubmit hidden fields for redirect or other options if needed
      // formData.append("_next", "your_thank_you_page_url");


      const response = await fetch("https://formsubmit.co/ajax/sitequickpersonal@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send message via FormSubmit.");
      }

      // Call the parent onSubmit for local state update (AI sentiment, etc.)
      await onSubmit({ ...data, rating });
      
      toast({
        title: "Message & Review Submitted!",
        description: "Thank you for your feedback. I'll get back to you soon if needed.",
      });
      form.reset();
      setRating(0);
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Submission Failed",
        description: (error as Error).message || "An error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground/80">Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Your Name" {...field} className="bg-background/70 focus:bg-background" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground/80">Email Address</FormLabel>
              <FormControl>
                <Input type="email" placeholder="your.email@example.com" {...field} className="bg-background/70 focus:bg-background" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground/80">Message / Review</FormLabel>
              <FormControl>
                <Textarea placeholder="Your message or review..." {...field} rows={5} className="bg-background/70 focus:bg-background" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormItem>
          <FormLabel className="text-foreground/80">Your Rating (1-5 Stars)</FormLabel>
          <StarRating currentRating={rating} onRatingChange={setRating} />
          {rating === 0 && form.formState.isSubmitted && (
             <p className="text-sm font-medium text-destructive">Please select a star rating.</p>
          )}
        </FormItem>
        <Button type="submit" className="w-full font-headline text-lg shadow-md hover:shadow-lg transition-shadow" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : <>Submit Message & Review <Send className="ml-2 h-5 w-5" /></>}
        </Button>
      </form>
    </Form>
  );
}
