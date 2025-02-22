import { NextResponse } from "next/server";
import Content from "@/models/Content";
import connectToDatabase from "@/lib/mongodb";
import { detectContent } from "@/utils/detector";

export async function POST(req) {
  await connectToDatabase();
  
  const { text, userId } = await req.json();
  const { flagged, category } = detectContent(text);

  const newContent = new Content({
    text,
    flagged,
    category,
    user: userId,
  });

  await newContent.save();

  return NextResponse.json({ success: true, flagged, category });
}
