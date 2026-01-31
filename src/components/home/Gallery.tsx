import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { IMAGES } from '@/lib/constants';

export function Gallery() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section ref={containerRef} id="portfolio" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white text-center mb-6">Captured Moments</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto">
          A curated selection of our favorite shots. Each image tells a unique story of love, joy, and celebration.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8">
        <motion.div style={{ y: y1 }} className="flex flex-col gap-8">
          {IMAGES.gallery.slice(0, 2).map((src, i) => (
            <GalleryItem key={i} src={src} />
          ))}
        </motion.div>
        
        <motion.div style={{ y: y2 }} className="flex flex-col gap-8 md:mt-20">
          {IMAGES.gallery.slice(2, 4).map((src, i) => (
            <GalleryItem key={i} src={src} />
          ))}
        </motion.div>

        <motion.div style={{ y: y3 }} className="flex flex-col gap-8">
          {IMAGES.gallery.slice(4, 6).map((src, i) => (
            <GalleryItem key={i} src={src} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function GalleryItem({ src }: { src: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="rounded-xl overflow-hidden shadow-2xl"
    >
      <img
        src={src}
        alt="Gallery Item"
        className="w-full h-auto object-cover hover:brightness-110 transition-all duration-500"
      />
    </motion.div>
  );
}
