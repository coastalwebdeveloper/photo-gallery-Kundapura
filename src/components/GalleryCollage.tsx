import shop1 from "@/assets/shop-1.png";
import shop2 from "@/assets/shop-2.png";
import shop3 from "@/assets/shop-3.png";
import shop4 from "@/assets/shop-4.png";

const galleryItems = [
  { src: shop1, alt: "Photo Gallery Studio Interior", frame: "frame-wooden", size: "large" },
  { src: shop2, alt: "Photo Gallery Reception Counter", frame: "frame-golden", size: "medium" },
  { src: shop3, alt: "Photo Frame Products Display", frame: "frame-black", size: "medium" },
  { src: shop4, alt: "Studio Work Area", frame: "frame-thin", size: "large" },
];

const GalleryCollage = () => {
  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-primary font-medium tracking-widest text-sm uppercase">Our Work</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">
            <span className="text-gradient-gold">Studio</span> Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take a peek inside our professionally designed studio space, showcasing our craftsmanship in photo framing and photography.
          </p>
        </div>

        {/* Creative Asymmetric Gallery Layout */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 max-w-6xl mx-auto">
          {/* Large Image - Top Left */}
          <div className="col-span-12 md:col-span-7 animate-fade-up">
            <div className={`${galleryItems[0].frame} gallery-item rounded-lg overflow-hidden`}>
              <img
                src={galleryItems[0].src}
                alt={galleryItems[0].alt}
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
          </div>

          {/* Medium Image - Top Right */}
          <div className="col-span-12 md:col-span-5 animate-fade-up animation-delay-200">
            <div className={`${galleryItems[1].frame} gallery-item rounded-lg overflow-hidden h-full`}>
              <img
                src={galleryItems[1].src}
                alt={galleryItems[1].alt}
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
          </div>

          {/* Medium Image - Bottom Left */}
          <div className="col-span-12 md:col-span-5 animate-fade-up animation-delay-400">
            <div className={`${galleryItems[2].frame} gallery-item rounded-lg overflow-hidden`}>
              <img
                src={galleryItems[2].src}
                alt={galleryItems[2].alt}
                className="w-full h-64 md:h-72 object-cover"
              />
            </div>
          </div>

          {/* Large Image - Bottom Right */}
          <div className="col-span-12 md:col-span-7 animate-fade-up animation-delay-600">
            <div className={`${galleryItems[3].frame} gallery-item rounded-lg overflow-hidden`}>
              <img
                src={galleryItems[3].src}
                alt={galleryItems[3].alt}
                className="w-full h-64 md:h-72 object-cover"
              />
            </div>
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-foreground rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Visit Our Studio
          </a>
        </div>
      </div>
    </section>
  );
};

export default GalleryCollage;
