import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Services | Photo Gallery Kundapura</title>
        <meta name="description" content="Professional photography services including photo frames, studio portraits, printing, and more at Photo Gallery Kundapura." />
      </Helmet>
      <main className="min-h-screen bg-background">
        <Navbar />
        <Services />
        <Footer />
        <FloatingButtons />
      </main>
    </>
  );
};

export default ServicesPage;
