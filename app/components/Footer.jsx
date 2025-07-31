import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-spice-gold">Biriyani Therapy</h3>
            <p className="text-white/80 leading-relaxed">
              Where every grain tells a story of authentic flavors, 
              aromatic spices, and culinary excellence that heals the soul.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-spice-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-spice-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-spice-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/menu" className="text-white/80 hover:text-spice-gold transition-colors">Menu</Link></li>
              <li><Link href="/outlets" className="text-white/80 hover:text-spice-gold transition-colors">Outlets</Link></li>
              <li><Link href="/order" className="text-white/80 hover:text-spice-gold transition-colors">Order Online</Link></li>
              <li><Link href="/about" className="text-white/80 hover:text-spice-gold transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-spice-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-spice-gold flex-shrink-0" />
                <span className="text-white/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-spice-gold flex-shrink-0" />
                <span className="text-white/80">hello@biryanitherapy.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-spice-gold flex-shrink-0 mt-1" />
                <span className="text-white/80">MG Road, Bangalore - 560001</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Business Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-spice-gold flex-shrink-0" />
                <div className="text-white/80">
                  <p>Mon - Fri: 11:00 AM - 11:00 PM</p>
                  <p>Sat - Sun: 10:00 AM - 12:00 AM</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 mt-4">
              <p className="text-sm font-semibold text-spice-gold">Free Delivery</p>
              <p className="text-sm text-white/80">Within 5km radius</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 Biriyani Therapy. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/60">
              <Link href="/privacy-policy" className="hover:text-spice-gold transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-spice-gold transition-colors">Terms of Service</Link>
              <Link href="/refund-policy" className="hover:text-spice-gold transition-colors">Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
