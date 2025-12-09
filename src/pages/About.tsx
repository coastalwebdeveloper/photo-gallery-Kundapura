import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Photo Gallery Kundapura</title>
        <meta name="description" content="Learn about Photo Gallery Kundapura - Your trusted photography studio in Kundapura, Karnataka." />
      </Helmet>
      <main className="min-h-screen bg-background">
        <Navbar />
        <About />
        <Footer />
      </main>
    </>
  );
};

export default AboutPage;
