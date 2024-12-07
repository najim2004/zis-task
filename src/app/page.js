import React from "react";
import { Navbar } from "./components/navbar/Navbar";
import FAQ from "./components/FAQ";
import PriceCheck from "./components/PriceCheck";

const Home = () => {
  return (
    <div>
      <Navbar />
      <PriceCheck />
      <FAQ />
    </div>
  );
};

export default Home;
