"use client";
import { useState, useEffect } from "react";

const TeacherDashboard = () => {
  const [flaggedStudents, setFlaggedStudents] = useState([]);

  useEffect(() => {
    const fetchFlaggedStudents = async () => {
      const response = await fetch("/api/flag-student");
      const data = await response.json();
      if (data.success) {
        setFlaggedStudents(data.flaggedStudents);
      }
    };

    fetchFlaggedStudents();
    const interval = setInterval(fetchFlaggedStudents, 5000); // हर 5 सेकंड में update
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-2">Teacher Dashboard</h2>
      <ul>
        {flaggedStudents.length > 0 ? (
          flaggedStudents.map((studentId, index) => (
            <li key={index} className="text-red-500 font-bold">
              🚨 {studentId} - AI Detected!
            </li>
          ))
        ) : (
          <p className="text-green-500">✅ No AI-generated assignments detected.</p>
        )}
      </ul>
    </div>
  );
};

export default TeacherDashboard;
