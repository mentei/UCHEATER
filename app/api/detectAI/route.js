// Teacher Dashboard - Highlight students using AI-generated content
import { useEffect, useState } from "react";

export default function TeacherDashboard() {
  const [flaggedStudents, setFlaggedStudents] = useState([]);

  useEffect(() => {
    const fetchFlaggedStudents = async () => {
      const response = await fetch("/api/flaggedStudents");
      const data = await response.json();
      setFlaggedStudents(data.students);
    };
    fetchFlaggedStudents();
  }, []);

  return (
    <div>
      <h2 className="text-lg font-bold">Flagged Students (AI Usage Detected)</h2>
      {flaggedStudents.length > 0 ? (
        <ul>
          {flaggedStudents.map((student) => (
            <li key={student.id} className="text-red-500 font-semibold">
              {student.name} (ID: {student.id})
            </li>
          ))}
        </ul>
      ) : (
        <p>No AI-generated content detected yet.</p>
      )}
    </div>
  );
}
