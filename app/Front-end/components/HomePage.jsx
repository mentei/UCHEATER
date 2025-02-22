import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Footer from "./Footer";


import ContentForm from "@/app/Front-end/components/detector/ContentForm";
// import Dashboard from "@/app/Front-end/components/detector/Dashboard";




const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
     {/* <Dashboard/> */}
      <ContentForm/>
      <Footer />
    

    </div>
  );
};

export default HomePage;
