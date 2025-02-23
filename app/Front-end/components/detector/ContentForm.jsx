"use client";

import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { FaFolderOpen } from "react-icons/fa"; // Folder icon import

const ContentForm = () => {
  const [inputData, setInputData] = useState("");
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult(null);
    setError(null);

    const formData = new FormData();
    formData.append("inputData", inputData);
    if (file) formData.append("file", file);

    try {
      const response = await fetch("/api/detect", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("API Response:", data);

      if (!data.success) {
        setError("Error in detection!");
        return;
      }

      setResult(data);
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Something went wrong! Try again.");
    }
  };

  return (
    <div className="max-w-xl mx-auto text-center p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-blue-400">AI Detection</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter text or URL"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          className="w-full px-4 py-2 border text-black rounded"
        />

        {/* File Upload Section */}
        <label className="flex items-center justify-center gap-2 cursor-pointer bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600">
          <FaFolderOpen size={20} /> {/* Folder icon */}
          <span>{file ? file.name : "Upload File"}</span>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="hidden"
          />
        </label>

        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded transition">
          Detect
        </button>
      </form>

      {error && (
        <p className="text-red-500 mt-4">{error}</p>
      )}

      {result && result.data && (
        <div className="mt-6 p-4 bg-gray-800 rounded-lg">
          <h3 className="text-lg font-semibold text-green-400">Result:</h3>
          <p className="text-gray-300">
            Detected: {result.data.detected || "Unknown"}
          </p>

          {/* Pie Chart */}
          <div className="mt-6">
            <h4 className="text-md font-semibold text-blue-300">Analysis Breakdown:</h4>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={[
                    { name: "AI Generated", value: parseFloat(result.data.aiPercentage || 0) },
                    { name: "Human Written", value: parseFloat(result.data.humanPercentage || 0) },
                    { name: "Offensive Words", value: result.data.offensiveWords || 0 },
                  ]}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  <Cell key="ai" fill="#ff6384" />
                  <Cell key="human" fill="#36a2eb" />
                  <Cell key="offensive" fill="#ffce56" />
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* AI Source Detection */}
          <div className="mt-4 p-2 bg-gray-700 rounded">
            <h4 className="text-sm font-semibold text-red-400">Source Detected:</h4>
            <p className="text-gray-300">{result.data.source || "Unknown"}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentForm;
