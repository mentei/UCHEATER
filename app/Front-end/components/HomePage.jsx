import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Footer from "./Footer";

import ContentForm from "./detector/ContentForm";
import AssignmentEditor from "@components/Assingment/AssingmentEditor"; 
import Dashboard from "@components/Dashboard";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      
      <ContentForm />
      <AssignmentEditor />
      <Footer />
    </div>
  );
};

export default HomePage;
