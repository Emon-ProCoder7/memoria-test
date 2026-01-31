import React from 'react';
import { Camera, Mail, MapPin, Phone } from 'lucide-react';
import { SOCIALS } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-card border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center">
              <img src="/my-logo.png" alt="Memoria" className="h-17" />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Capturing life's most precious moments with cinematic elegance and timeless style. On-demand photography and videography services.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-serif font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Wedding Photography</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Engagement Shoots</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Event Videography</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Corporate Branding</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-semibold text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span>1209 MOUNTAIN ROAD   PL NE STE R,   ALBUQUERQUE, NM 87110</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>+1 (323) 990-2599</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span>info.memoriaproduction@gmail.com</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-8">
              {SOCIALS.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 Memoria. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}








