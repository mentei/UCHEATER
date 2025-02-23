"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const AssignmentEditor = ({ studentId }) => {
  const [inputData, setInputData] = useState("");
  const [warning, setWarning] = useState(false);
  const [loading, setLoading] = useState(false);
  const warningRef = useRef(null);
  const textAreaRef = useRef(null);

  useEffect(() => {
    if (inputData.trim().length < 10) return; // कम टेक्स्ट पर API कॉल न करें

    const checkAIContent = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/detect", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ inputData }),
        });

        const data = await response.json();
        console.log("AI Detection Response:", data); // Debugging के लिए लॉग

        setLoading(false);

        if (data.success && data.data?.aiPercentage > 50) {
          setWarning(true);
          if (warningRef.current) {
            gsap.fromTo(
              warningRef.current,
              { scale: 0.8, opacity: 0 },
              { scale: 1, opacity: 1, duration: 0.5, ease: "elastic.out(1, 0.5)" }
            );
          }

          if (textAreaRef.current) {
            gsap.to(textAreaRef.current, {
              x: -5,
              duration: 0.1,
              repeat: 5,
              yoyo: true,
              ease: "power1.inOut",
            });
          }

          // **Teacher Dashboard Update**
          await fetch("/api/flag-student", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ studentId, flagged: true }),
          });
        } else {
          setWarning(false);
        }
      } catch (error) {
        console.error("AI Detection Error:", error);
      }
    };

    const timer = setTimeout(checkAIContent, 2000);
    return () => clearTimeout(timer);
  }, [inputData, studentId]);

  return (
    <div className="max-w-2xl mx-auto bg-gray-900 text-white p-6 rounded-lg shadow-lg mt-10">
      <h2 className="text-3xl font-bold text-blue-400 text-center mb-4">Assignment Editor</h2>

      <textarea
        ref={textAreaRef}
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        className="w-full h-40 p-4 bg-gray-800 border border-gray-600 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-500"
        placeholder="Write your assignment here..."
      />

      {loading && <p className="text-blue-400 text-center mt-2 animate-pulse">🔍 Checking for AI content...</p>}

      {warning && (
        <p
          ref={warningRef}
          className="text-red-500 font-semibold text-center mt-4 text-lg bg-red-800 bg-opacity-20 p-2 rounded-lg"
        >
          ⚠ Warning: AI-generated content detected!
        </p>
      )}
    </div>
  );
};

export default AssignmentEditor;
