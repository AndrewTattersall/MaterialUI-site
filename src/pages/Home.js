import React from "react";
import AboutSection from "../components/AboutSection";
import OurWorkSection from "../components/OurWorkSection";
import FaqSection from "../components/FaqSection";
import Section from "../components/Section";
import ContactUs from "../components/ContactUs";

const Home = () => {
  return (
    <div>
      <AboutSection />
      <OurWorkSection />
      <FaqSection />
      <Section />
      <ContactUs />
    </div>
  );
};

export default Home;
