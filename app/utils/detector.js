const spamKeywords = ["free money", "win cash", "click here", "subscribe now"];
const abusiveKeywords = ["badword1", "badword2", "badword3"];

export function detectContent(text) {
  const lowerText = text.toLowerCase();

  if (spamKeywords.some((word) => lowerText.includes(word))) {
    return { flagged: true, category: "spam" };
  }

  if (abusiveKeywords.some((word) => lowerText.includes(word))) {
    return { flagged: true, category: "abusive" };
  }

  return { flagged: false, category: "normal" };
}
