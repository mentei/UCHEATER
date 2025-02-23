import { NextResponse } from "next/server";

let flaggedStudents = []; // Flagged students की list

export async function POST(req) {
  try {
    const { studentId, flagged } = await req.json();

    if (flagged) {
      if (!flaggedStudents.includes(studentId)) {
        flaggedStudents.push(studentId);
      }
    } else {
      flaggedStudents = flaggedStudents.filter((id) => id !== studentId);
    }

    return NextResponse.json({ success: true, flaggedStudents });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

export async function GET() {
  return NextResponse.json({ success: true, flaggedStudents });
}
