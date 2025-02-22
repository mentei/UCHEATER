import formidable from "formidable";
import fs from "fs";
import path from "path";
import fileType from "file-type";

// Config for disabling default bodyParser
export const config = { api: { bodyParser: false } };

// Offensive words list
const offensiveWords = ["badword1", "badword2", "badword3"]; // यहां अपने हिसाब से offensive words डाल सकते हो

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const form = new formidable.IncomingForm();
    const uploadDir = path.join(process.cwd(), "public/uploads");

    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
    }

    form.uploadDir = uploadDir;
    form.keepExtensions = true;

    form.parse(req, async (err, fields, files) => {
        if (err) return res.status(500).json({ error: "File upload error" });

        const file = files.file;
        const oldPath = file.filepath;
        const newPath = path.join(uploadDir, file.originalFilename);

        // AI-based file type detection
        const fileBuffer = fs.readFileSync(oldPath);
        const detectedType = await fileType.fromBuffer(fileBuffer);

        if (!detectedType) {
            return res.status(400).json({ error: "Unsupported file type" });
        }

        // Offensive word filtering in filename
        const containsOffensive = offensiveWords.some((word) => file.originalFilename.toLowerCase().includes(word));

        if (containsOffensive) {
            return res.status(400).json({ error: "File name contains offensive words" });
        }

        fs.renameSync(oldPath, newPath);

        res.status(200).json({
            message: "File uploaded successfully",
            filePath: `/uploads/${file.originalFilename}`,
            fileType: detectedType.mime,
        });
    });
}
