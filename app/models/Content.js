import mongoose from "mongoose";

const ContentSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    flagged: { type: Boolean, default: false },
    category: { type: String, enum: ["spam", "abusive", "normal"], default: "normal" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export default mongoose.models.Content || mongoose.model("Content", ContentSchema);
