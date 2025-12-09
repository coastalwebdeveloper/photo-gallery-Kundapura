import { ArrowRight, Camera } from "lucide-react";
import heroBanner from "@/assets/hero-banner.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      
      {/* Decorative elements */}
      <div className="absolute top-40 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Camera className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Professional Photography Studio</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              <span className="text-gradient-gold">Photo Gallery</span>
              <br />
              <span className="text-foreground">Kundapura</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-light italic">
              "Professional Photo Frames & Photography – Capturing Memories Since Kundapura"
            </p>
            
            <p className="text-foreground/70 max-w-lg mx-auto lg:mx-0">
              Your trusted destination for premium-quality photo frames, creative studio portraits, 
              printing services, and exceptional photography experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href="#gallery"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              >
                Explore Our Gallery
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary/50 text-foreground rounded-full font-semibold text-lg hover:bg-primary/10 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
          
          {/* Hero Image with Frame */}
          <div className="relative animate-fade-up animation-delay-200">
            <div className="frame-golden p-4 rounded-lg transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="bg-card p-2 rounded">
                <img
                  src={heroBanner}
                  alt="Photo Gallery Kundapura - Professional Photography Studio"
                  className="w-full h-auto rounded object-cover"
                />
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-2xl animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gradient-gold">4.7</p>
                  <p className="text-xs text-muted-foreground">73 Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
