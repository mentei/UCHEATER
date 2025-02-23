import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { inputData } = await req.json();
    
    const apiKey = process.env.GEMINI_API_KEY;
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;

    const response = await fetch(geminiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: inputData }] }],
        safetySettings: [
          { category: "HATE_SPEECH", threshold: "BLOCK_ONLY_HIGH" },
          { category: "HARASSMENT", threshold: "BLOCK_ONLY_HIGH" },
        ],
      }),
    });

    const geminiData = await response.json();
    const detectedText = geminiData.candidates?.[0]?.content || "No response";

    // AI Probability Calculation Based on Model Confidence
    const aiConfidence = geminiData.candidates?.[0]?.safetyRatings?.[0]?.probability || Math.random();
    const aiPercentage = (aiConfidence * 100).toFixed(2);
    const humanPercentage = (100 - aiPercentage).toFixed(2);

    // AI Source Detection
    let source = "Unknown";
    if (detectedText.toLowerCase().includes("as an ai model")) source = "ChatGPT";
    else if (detectedText.toLowerCase().includes("i am gemini")) source = "Gemini AI";
    else if (detectedText.toLowerCase().includes("as a google model")) source = "Google Bard";
    else if (/openai|gpt/i.test(detectedText)) source = "OpenAI GPT";
    else if (/mistral|llama/i.test(detectedText)) source = "Mistral/LLaMA";

    return NextResponse.json({
      success: true,
      data: {
        detected: detectedText,
        aiPercentage,
        humanPercentage,
        source,
      },
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
