import React from "react";
import "../../App.css";
import Cards from "../Cards";
import Features from "../Features";
import Footer from "../Footer";
import Hero from "../Hero";

function Home() {
  return (
    <>
      <Hero />
      <Cards />
      <Features />
      <Footer />
    </>
  );
}

export default Home;
