import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GalleryCollage from "@/components/GalleryCollage";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Photo Gallery Kundapura | Professional Photo Frames & Photography Studio</title>
        <meta 
          name="description" 
          content="Photo Gallery Kundapura - Your trusted photography studio for premium photo frames, studio portraits, printing services, and professional photography. Visit us at VMK Tower, Kundapura." 
        />
        <meta name="keywords" content="photo gallery kundapura, photo frames kundapura, photography studio karnataka, photo printing, studio portraits, ID photos" />
        <link rel="canonical" href="https://photogallerykundapura.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Photo Gallery Kundapura | Professional Photography Studio" />
        <meta property="og:description" content="Premium photo frames and professional photography services in Kundapura, Karnataka. 4.7★ rated with 73+ reviews." />
        <meta property="og:type" content="business.business" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Photo Gallery Kundapura",
            "image": "",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "VMK TOWER, Kollur Mookambika – Kundapura Rd, above KAMATH TYRES, near Pai International",
              "addressLocality": "Kundapura",
              "addressRegion": "Karnataka",
              "postalCode": "576201",
              "addressCountry": "IN"
            },
            "telephone": "+91-72599-34433",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.7",
              "reviewCount": "73"
            },
            "priceRange": "$$"
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <GalleryCollage />
        <Services />
        <Reviews />
        <About />
        <Contact />
        <Footer />
        <FloatingButtons />
      </main>
    </>
  );
};

export default Index;
