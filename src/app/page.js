import React from "react";
import { Navbar } from "./components/navbar/Navbar";
import FAQ from "./components/FAQ";
import PriceCheck from "./components/PriceCheck";
import TestimonialsSection from "./components/TestimonialSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <PriceCheck />
      <TestimonialsSection />
      <FAQ />
    </div>
  );
};

export default Home;
