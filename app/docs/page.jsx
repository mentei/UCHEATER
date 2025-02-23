"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@components/Navbar";

const docsSections = [
  { title: "Introduction", id: "intro" },
  { title: "Installation", id: "install" },
  { title: "Project Structure", id: "structure" },
  { title: "Routing", id: "routing" },
  { title: "API Routes", id: "api-routes" },
  { title: "Deployment", id: "deployment" },
];

const DocsPage = () => {
  const [activeSection, setActiveSection] = useState("intro");

  return (<>
    <Navbar/>
    <div className=" flex h-screen  mt-20">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-5 fixed h-full">
        <h2 className="text-xl font-bold mb-4">Documentation</h2>
        <ul>
          {docsSections.map((section) => (
            <li key={section.id}>
              <Link href={`#${section.id}`}>
                <motion.p
                  whileHover={{ scale: 1.1 }}
                  className={`cursor-pointer py-2 px-4 rounded-lg transition-all ${
                    activeSection === section.id ? "bg-blue-500" : ""
                  }`}
                  onClick={() => setActiveSection(section.id)}
                >
                  {section.title}
                </motion.p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-10 flex-1">
        <h1 className="text-3xl font-bold mb-6">UCHEATER  📌 Documentation</h1>

        <section id="intro" className="mb-10">
          <h2 className="text-2xl font-semibold">Introduction</h2>
          <p>
            Welcome to the documentation of MY project. This guide will help you
            set up, understand, and deploy your OWN AI detection & AI Generated content application efficiently.
          </p>
        </section>

        <section id="install" className="mb-10">
          <h2 className="text-2xl font-semibold">Installation</h2>
          <p>
            To set up the project locally, follow these steps:
          </p>
          <pre className="bg-gray-800 text-white p-4 rounded">
            {`git clone https://github.com/mentei/UCHEATER.git
cd your-project
npm install`}
          </pre>
        </section>

        <section id="structure" className="mb-10">
          <h2 className="text-2xl font-semibold">Project Structure</h2>
          <p>
            This project follows a modular structure to keep things organized:
          </p>
          <pre className="bg-gray-800 text-white p-4 rounded">
            {`app/
  ├── front-end/  # Contains UI components
  ├── api/       # Handles backend APIs
  ├── document/  # Documentation and static pages
  ├── public/    # Static assets
  ├── styles/    # Global styles`}
          </pre>
        </section>

        <section id="routing" className="mb-10">
          <h2 className="text-2xl font-semibold">Routing</h2>
          <p>
           I have used the Next.js  a file-based routing system. Pages inside the <code>app/</code> directory
            automatically become routes. For example:
          </p>
          <pre className="bg-gray-800 text-white p-4 rounded">
            {`app/
  ├── page.jsx   # Home page
  ├── about/
      ├── page.jsx # About page
  ├── contact/
      ├── page.jsx # Contact page`}
          </pre>
        </section>

        <section id="api-routes" className="mb-10">
          <h2 className="text-2xl font-semibold">API Routes</h2>
          <p>
            Next.js allows you to create API routes inside the <code>app/api/</code> directory.
            These endpoints work like backend APIs.
          </p>
          <pre className="bg-gray-800 text-white p-4 rounded">
            {`app/api/
  ├── auth/
      ├── route.js  # Handles authentication
  ├── users/
      ├── route.js  # User-related API calls`}
          </pre>
        </section>

        <section id="deployment" className="mb-10">
          <h2 className="text-2xl font-semibold">Deployment</h2>
          <p>
            Deploy your Next.js application easily using Vercel:
          </p>
          <pre className="bg-gray-800 text-white p-4 rounded">
            {`vercel login
vercel deploy`}
          </pre>
        </section>
      </div>
    </div>
    </> );
};

export default DocsPage;
