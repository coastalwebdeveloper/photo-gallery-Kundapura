import { Camera, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Photo Gallery Logo" className="h-12 w-12 object-contain rounded-lg" />
              <div>
                <h3 className="font-display text-xl font-semibold text-gradient-gold">Photo Gallery</h3>
                <p className="text-sm text-muted-foreground">Kundapura</p>
              </div>
            </div>
            <p className="text-foreground/70 text-sm">
              Your trusted photography studio for premium photo frames and professional photography services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Gallery", "Services", "Reviews", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-foreground">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground/70">
                  VMK TOWER, Kundapura, Karnataka 576201
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:07259934433" className="text-foreground/70 hover:text-primary transition-colors">
                  072599 34433
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Photo Gallery Kundapura. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
