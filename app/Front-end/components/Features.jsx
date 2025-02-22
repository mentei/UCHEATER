"use client";
import React from "react";
import { motion } from "framer-motion";

const features = [
  { title: "AI Detection", desc: "Analyze text and detect AI-generated content with 98% accuracy." },
  { title: "Plagiarism Check", desc: "Detect copied content and maintain originality in writing." },
  { title: "Real-Time Analysis", desc: "Get instant results with our high-speed AI algorithm." },
];

const Features = () => {
  return (
    <section className="bg-gray-800 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-500 mb-8">Features</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className="bg-gray-700 p-6 rounded-lg shadow-md text-center"
            >
              <h3 className="text-xl font-semibold text-blue-400">{feature.title}</h3>
              <p className="mt-2 text-gray-300">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
