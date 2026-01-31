import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const TESTIMONIALS = [
  {
    name: "Sarah & James",
    role: "Wedding Clients",
    content: "Memoria captured our wedding day perfectly. The photos look like they belong in a magazine! The team was professional, invisible yet everywhere.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Elena Rodriguez",
    role: "Birthday Event",
    content: "I booked a photographer for my 30th birthday last minute. The process was so simple, and the photos are absolutely stunning. Highly recommend!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "TechStart Inc.",
    role: "Corporate Event",
    content: "Professional, timely, and high-quality work. The video recap of our launch event was exactly what we needed for our social media channels.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-white mb-6">Client Stories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their Memoria experience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {TESTIMONIALS.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-2">
                    <Card className="bg-card border-white/10 h-full">
                      <CardContent className="p-8 flex flex-col gap-6">
                        <Quote className="w-10 h-10 text-primary/20" />
                        <p className="text-white/80 leading-relaxed italic">
                          "{testimonial.content}"
                        </p>
                        
                        <div className="flex items-center gap-4 mt-auto">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                          />
                          <div>
                            <h4 className="font-bold text-white">{testimonial.name}</h4>
                            <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                          </div>
                          <div className="ml-auto flex gap-1">
                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex bg-background border-white/10 hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="hidden md:flex bg-background border-white/10 hover:bg-primary hover:text-primary-foreground" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
