"use client";
import { useState } from "react";

const ContentForm = () => {
  const [inputData, setInputData] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult(null);

    const response = await fetch("/api/detect", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ inputData }),
    });

    const data = await response.json();
    setResult(data);
  };

  return (
    <div className="max-w-xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">AI Detection</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter text or URL"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          className="w-full px-4 py-2 border text-black rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded">
          Detect
        </button>
      </form>

      {result && (
        <div className="mt-4 p-4 bg-gray-200 rounded">
          <h3 className="text-lg font-semibold">Result:</h3>
          <p>{result.success ? `Detected: ${result.data.detected}` : "Error in detection!"}</p>
        </div>
      )}
    </div>
  );
};

export default ContentForm;
