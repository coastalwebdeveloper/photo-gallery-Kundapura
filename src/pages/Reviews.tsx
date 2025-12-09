import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

const ReviewsPage = () => {
  return (
    <>
      <Helmet>
        <title>Reviews | Photo Gallery Kundapura</title>
        <meta name="description" content="Read customer reviews and testimonials for Photo Gallery Kundapura. 4.7★ rated with 73+ Google reviews." />
      </Helmet>
      <main className="min-h-screen bg-background">
        <Navbar />
        <Reviews />
        <Footer />
      </main>
    </>
  );
};

export default ReviewsPage;
