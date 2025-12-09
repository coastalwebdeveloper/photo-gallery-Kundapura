import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import GalleryCollage from "@/components/GalleryCollage";
import Footer from "@/components/Footer";

const Gallery = () => {
  return (
    <>
      <Helmet>
        <title>Gallery | Photo Gallery Kundapura</title>
        <meta name="description" content="View our collection of photo frames and photography work at Photo Gallery Kundapura." />
      </Helmet>
      <main className="min-h-screen bg-background">
        <Navbar />
        <GalleryCollage />
        <Footer />
      </main>
    </>
  );
};

export default Gallery;
