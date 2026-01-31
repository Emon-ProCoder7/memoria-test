import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

const SERVICES = [
  {
    title: "Weddings",
    description: "Cinematic storytelling for your special day.",
    // Use the NEW services image
    image: IMAGES.services.wedding,
    colSpan: "md:col-span-2"
  },
  {
    title: "Proposals",
    description: "Capturing the 'Yes' moment forever.",
    image: IMAGES.services.proposals,
    colSpan: "md:col-span-1"
  },
  {
    title: "Birthdays",
    description: "Joyful celebrations with loved ones.",
    image: IMAGES.services.birthday,
    colSpan: "md:col-span-1"
  },
  {
    title: "Corporate",
    description: "Professional branding and events.",
    image: IMAGES.services.corporate,
    colSpan: "md:col-span-2"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
          >
            Our Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            We specialize in capturing the essence of every occasion. Our team of expert photographers and videographers ensures every frame is a masterpiece.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer",
                service.colSpan
              )}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-between items-end mb-2">
                    <h3 className="text-3xl font-serif font-bold text-white">{service.title}</h3>
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                  <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

