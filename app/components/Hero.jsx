import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-biriyani.jpg"
          alt="Delicious Biriyani"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Biriyani
            <span className="block text-spice-gold">Therapy</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Where every grain tells a story of authentic flavors, 
            aromatic spices, and culinary excellence that heals the soul.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="cta" 
              size="lg"
              className="text-lg px-8 py-6 h-auto"
            >
              Order Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="hero" 
              size="lg"
              className="text-lg px-8 py-6 h-auto"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Our Story
            </Button>
          </div>

          <div className="pt-8 text-white/100">
            <p className="text-lg">
              ⭐ Rated #1 Biriyani in the City | 📍 Multiple Outlets | 🚚 Free Delivery
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};