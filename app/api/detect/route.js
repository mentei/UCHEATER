import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { inputData } = await req.json();
    
    // API Key को .env.local से लोड करना
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
    
    // AI vs Human probability (Random for now)
    const aiPercentage = Math.random() * 100; 
    const humanPercentage = 100 - aiPercentage;

    // Offensive words detection
    const offensiveWords = inputData.match(/badword1|badword2|offensiveword/gi) || [];

    // **AI Source Detection Logic**
    let source = "Unknown";  // Default Source

    if (geminiData.candidates?.[0]?.content) {
      const detectedText = geminiData.candidates[0].content.toLowerCase();

      if (detectedText.includes("as an ai model")) source = "ChatGPT";
      else if (detectedText.includes("i am gemini")) source = "Gemini AI";
      else if (detectedText.includes("as a google model")) source = "Google Bard";
      else if (detectedText.includes("openai") || detectedText.includes("gpt")) source = "OpenAI GPT";
      else if (detectedText.includes("mistral") || detectedText.includes("llama")) source = "Mistral/LLaMA";
    }

    return NextResponse.json({
      success: true,
      data: {
        detected: geminiData.candidates?.[0]?.content || "No response",
        aiPercentage: aiPercentage.toFixed(2),
        humanPercentage: humanPercentage.toFixed(2),
        offensiveWords: offensiveWords.length,
        source: source,
      },
    });

  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
