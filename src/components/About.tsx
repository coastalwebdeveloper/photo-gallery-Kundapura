import { Award, Users, Clock, Heart } from "lucide-react";
import shop4 from "@/assets/shop-4.png";

const stats = [
  { icon: Clock, value: "10+", label: "Years Experience" },
  { icon: Users, value: "5000+", label: "Happy Customers" },
  { icon: Award, value: "73", label: "5-Star Reviews" },
  { icon: Heart, value: "100%", label: "Satisfaction" },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="animate-fade-up">
            <div className="frame-wooden rounded-lg overflow-hidden transform -rotate-1 hover:rotate-0 transition-transform duration-500">
              <img
                src={shop4}
                alt="Photo Gallery Kundapura Studio"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 animate-fade-up animation-delay-200">
            <span className="text-primary font-medium tracking-widest text-sm uppercase">About Us</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Your Trusted <span className="text-gradient-gold">Photography Studio</span> in Kundapura
            </h2>
            
            <p className="text-foreground/70 leading-relaxed">
              Photo Gallery is a trusted photography studio in Kundapura known for premium-quality 
              photo frames, creative studio portraits, printing services, and exceptional customer satisfaction.
            </p>
            
            <p className="text-foreground/70 leading-relaxed">
              With years of experience serving the local community, we take pride in preserving your 
              precious memories through our professional photography services and handcrafted photo frames. 
              Our dedicated team ensures every customer leaves with a smile.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 bg-card rounded-xl border border-border"
                >
                  <stat.icon className="w-6 h-6 text-primary mb-2" />
                  <p className="text-2xl font-bold text-gradient-gold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
