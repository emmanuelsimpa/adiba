import * as React from "react";
import ContactUs from "./components/ContactUs";
import Features from "./components/Features";
import Footers from "./components/Footers";
import Hero from "./components/Hero";
import LogoClouds from "./components/LogoClouds";
import Testimonials from "./components/Testimonials";

const Landing: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <LogoClouds />
      <ContactUs />
      <Footers />
    </>
  );
};

export default Landing;
