import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Theme from "./components/Theme";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQs";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";

const App = () => {
  return (
    <div className="overflow-hidden w-full">
      <Navbar />
      <Hero />
      <Testimonials />
      <Theme />
      <Pricing />
      <FAQ />
      <Footer />
      <Copyright />
    </div>
  );
};

export default App;
