import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Photo Gallery Kundapura</title>
        <meta name="description" content="Get in touch with Photo Gallery Kundapura. Visit us at VMK Tower, Kundapura or call 072599 34433." />
      </Helmet>
      <main className="min-h-screen bg-background">
        <Navbar />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default ContactPage;
