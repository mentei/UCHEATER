"use client";
import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { gsap } from "gsap";
import { Orbitron } from "@next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: "700" });

function AIModel() {
  const { scene } = useGLTF("/ai_brain_model.glb"); // AI Brain Model
  return <primitive object={scene} scale={1.2} position={[0, -0.5, 0]} />;
}

export default function Hero() {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* 3D AI Model */}
      <Canvas className="absolute top-0 left-0 w-full h-full">
        <ambientLight intensity={1} />
        <directionalLight position={[3, 3, 3]} />
        <OrbitControls autoRotate enableZoom={false} />
        <AIModel />
      </Canvas>

      {/* Text Content */}
      <div className="relative z-10 text-center text-white px-6 md:px-10">
        <h1
          ref={titleRef}
          className={`text-4xl md:text-6xl font-bold neon-text ${orbitron.className}`}
        >
          AI-Powered Content Detection
        </h1>
        <p className="mt-2 text-base md:text-lg text-gray-300 max-w-lg mx-auto">
          Our AI system ensures content authenticity with advanced machine learning.
        </p>
        <button className="mt-5 px-5 md:px-6 py-2 md:py-3 bg-blue-600 hover:bg-blue-800 text-white font-bold rounded-lg transition-all shadow-lg">
          Try Now
        </button>
      </div>

      <style>
        {`
          .neon-text {
            text-shadow: 0 0 5px #00e6e6, 0 0 10px #00e6e6, 0 0 20px #00e6e6;
          }
        `}
      </style>
    </div>
  );
}
