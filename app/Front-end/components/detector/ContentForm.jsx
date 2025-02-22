"use client";
import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

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
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
    });

    const result = await response.json();
    console.log(result);
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
        <input className="bg-black text-white border-2 border-green-400 p-2 text-lg rounded-lg shadow-neon focus:outline-none focus:ring-2 focus:ring-green-400 hover:shadow-neon-hover" type="file" onChange={handleFileUpload} />
      

        <button type="submit" className="bg-blue-500 m-4 hover:bg-blue-700 text-white px-6 py-2 rounded transition">
          Detect
        </button>
      </form>

      {result && (
        <div className="mt-6 p-4 bg-gray-800 rounded-lg">
          <h3 className="text-lg font-semibold text-green-400">Result:</h3>
          <p className="text-gray-300">{result.success ? `Detected: ${result.data.detected}` : "Error in detection!"}</p>

          {/* Pie Chart */}
          <div className="mt-6">
            <h4 className="text-md font-semibold text-blue-300">Analysis Breakdown:</h4>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={[
                    { name: "AI Generated", value: parseFloat(result.data.aiPercentage) },
                    { name: "Human Written", value: parseFloat(result.data.humanPercentage) },
                    { name: "Offensive Words", value: result.data.offensiveWords },
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

          {result && (
  <div className="mt-6 p-4 bg-gray-800 rounded-lg">
    <h3 className="text-lg font-semibold text-green-400">Result:</h3>
    <p className="text-gray-300">{result.success ? `Detected: ${result.data.detected}` : "Error in detection!"}</p>

    {/* AI Source Detection */}
    <div className="mt-4 p-2 bg-gray-700 rounded">
      <h4 className="text-sm font-semibold text-red-400">Source Detected:</h4>
      <p className="text-gray-300">
        {result.data.source !== "Unknown" ? result.data.source : "AI source could not be identified."}
      </p>
    </div>
  </div>
)}

        </div>
      )}
    </div>
  );
};

export default ContentForm;
