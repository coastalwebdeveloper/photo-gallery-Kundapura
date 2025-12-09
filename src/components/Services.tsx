import { Frame, Camera, Printer, Users, CreditCard, Sparkles } from "lucide-react";

const services = [
  {
    icon: Frame,
    title: "Photo Frames",
    description: "Custom sizes & styles in wooden, metallic, and designer frames",
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Professional photography for all occasions and events",
  },
  {
    icon: Printer,
    title: "Printing & Enlargements",
    description: "High-quality photo printing in various sizes and finishes",
  },
  {
    icon: Users,
    title: "Studio Portraits",
    description: "Professional portrait sessions for families/individuals",
  },
  {
    icon: CreditCard,
    title: "ID Photos",
    description: "Passport, visa, and official document photographs",
  },
  {
    icon: Sparkles,
    title: "Photo Restoration",
    description: "Restore and enhance your precious old photographs",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-primary font-medium tracking-widest text-sm uppercase">What We Offer</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">
            Our <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From premium photo frames to professional photography, we offer comprehensive services to preserve your precious memories.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
