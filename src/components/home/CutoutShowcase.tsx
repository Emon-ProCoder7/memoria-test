import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '@/lib/constants';

export function CutoutShowcase() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-medium tracking-widest uppercase mb-4 block">The Memoria Difference</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
              Moments That <br />
              <span className="italic text-white/50">Stand Out.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We don't just take photos; we create art. Our signature style involves isolating your most precious moments, creating stunning, clean visuals that focus entirely on the emotion and connection.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-3xl font-serif font-bold text-primary mb-2">500+</h4>
                <p className="text-sm text-muted-foreground">Weddings Captured</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif font-bold text-primary mb-2">98%</h4>
                <p className="text-sm text-muted-foreground">5-Star Reviews</p>
              </div>
            </div>
          </motion.div>

          {/* Visual Showcase - "Cutout" Style */}
          <div className="relative h-[600px] flex items-center justify-center">
            {/* Background Shape */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-full blur-3xl opacity-30 animate-pulse" />
            
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 w-full max-w-md"
            >
              <div className="relative">
                <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-primary/20 bg-card">
                  <img
                    // CHANGED THIS LINE
                    src={IMAGES.cutouts.bride}
                    alt="Wedding Couple"
                    className="w-full h-auto object-cover"
                  />
                  {/* Overlay Gradient at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-10 -right-10 w-40 h-40 rounded-2xl overflow-hidden border-4 border-background shadow-xl rotate-12"
                >
                   <img
                    src={IMAGES.gallery[0]}
                    alt="Detail Shot"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-10 -left-10 w-32 h-32 rounded-2xl overflow-hidden border-4 border-background shadow-xl -rotate-6"
                >
                   <img
                    src={IMAGES.gallery[2]}
                    alt="Detail Shot"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
