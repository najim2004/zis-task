import React from "react";
import FAQ from "./components/FAQ";
import PriceCheck from "./components/PriceCheck";
import TestimonialsSection from "./components/TestimonialSection";
import WhyChooseUs from "./components/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <PriceCheck />
      <TestimonialsSection />
      <FAQ />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
