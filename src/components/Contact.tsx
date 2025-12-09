import { MapPin, Phone, Clock, Navigation } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-primary font-medium tracking-widest text-sm uppercase">Get In Touch</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">
            Visit <span className="text-gradient-gold">Our Studio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Located in the heart of Kundapura, we're easily accessible and ready to serve you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-up">
            <div className="p-6 bg-card rounded-2xl border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-2">Address</h3>
                  <p className="text-foreground/70">
                    Photo Gallery<br />
                    VMK TOWER, Kollur Mookambika – Kundapura Rd,<br />
                    above KAMATH TYRES, near Pai International,<br />
                    Kundapura, Karnataka 576201
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-card rounded-2xl border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-2">Phone</h3>
                  <a 
                    href="tel:07259934433" 
                    className="text-xl font-semibold text-gradient-gold hover:opacity-80 transition-opacity"
                  >
                    072599 34433
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 bg-card rounded-2xl border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-2">Business Hours</h3>
                  <p className="text-foreground/70">
                    Monday - Saturday: 9:00 AM - 8:00 PM<br />
                    Sunday: 10:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="tel:07259934433"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="https://www.google.com/maps/dir//Photo+Gallery+Kundapura"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 border-2 border-primary text-foreground rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Navigation className="w-5 h-5" />
                Get Directions
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="animate-fade-up animation-delay-200">
            <div className="frame-black rounded-2xl overflow-hidden h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3883.4!2d74.68!3d13.62!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDM3JzEyLjAiTiA3NMKwNDAnNDguMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Photo Gallery Kundapura Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
