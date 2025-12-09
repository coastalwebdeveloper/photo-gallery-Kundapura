import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Excellent service! The photo frames are of premium quality and the staff is very helpful. Highly recommended for anyone looking for quality photography services.",
    date: "2 months ago",
  },
  {
    name: "Rajesh Kumar",
    rating: 5,
    text: "Best photo studio in Kundapura. Got my family portrait done and it turned out amazing. The framing options are extensive and reasonably priced.",
    date: "1 month ago",
  },
  {
    name: "Anitha Nair",
    rating: 4,
    text: "Great experience getting passport photos done here. Quick service and good quality. The studio has a very professional setup.",
    date: "3 weeks ago",
  },
  {
    name: "Mohammed Farhan",
    rating: 5,
    text: "Wonderful work on restoring my grandmother's old photograph. The team is skilled and takes great care of their work. Will definitely come back!",
    date: "1 week ago",
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-primary font-medium tracking-widest text-sm uppercase">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">
            Customer <span className="text-gradient-gold">Reviews</span>
          </h2>
          
          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${i < 5 ? "fill-primary text-primary" : "text-muted"}`}
                />
              ))}
            </div>
            <span className="text-3xl font-bold text-gradient-gold">4.7</span>
            <span className="text-muted-foreground">from 73 Google Reviews</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < review.rating ? "fill-primary text-primary" : "text-muted"}`}
                  />
                ))}
              </div>
              
              {/* Review Text */}
              <p className="text-foreground/80 mb-6 leading-relaxed">
                "{review.text}"
              </p>
              
              {/* Reviewer Info */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Link */}
        <div className="text-center mt-10">
          <a
            href="https://www.google.com/search?q=photo+gallery+kundapura+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            View all reviews on Google
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
