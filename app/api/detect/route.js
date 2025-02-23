import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const inputData = formData.get("inputData");
    const file = formData.get("file");

    // Dummy AI detection logic (इसको अपनी असली AI API से जोड़ सकते हो)
    const aiPercentage = Math.random() * 100;
    const humanPercentage = 100 - aiPercentage;
    const offensiveWords = Math.floor(Math.random() * 10);
    const source = aiPercentage > 50 ? "AI Generated" : "Human Written";

    return NextResponse.json({
      success: true,
      data: {
        detected: source,
        aiPercentage: aiPercentage.toFixed(2),
        humanPercentage: humanPercentage.toFixed(2),
        offensiveWords,
        source,
      },
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: "API Error!" }, { status: 500 });
  }
}
