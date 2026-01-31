import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/home/Hero';
import { Services } from '@/components/home/Services';
import { CutoutShowcase } from '@/components/home/CutoutShowcase';
import { Gallery } from '@/components/home/Gallery';
import { Testimonials } from '@/components/home/Testimonials';
import { Footer } from '@/components/layout/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <CutoutShowcase />
        <Gallery />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}