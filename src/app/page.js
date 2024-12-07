import React from "react";
import { Navbar } from "./components/navbar/Navbar";
import FAQ from "./components/FAQ";
import PriceCheck from "./components/PriceCheck";
import TestimonialsSection from "./components/TestimonialSection";
import Footer from "./components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <PriceCheck />
      <TestimonialsSection />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
