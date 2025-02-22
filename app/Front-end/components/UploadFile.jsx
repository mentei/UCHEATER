import { useState } from "react";

export default function UploadFile() {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            setMessage("Please select a file");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch("/api/file/upload", {
            method: "POST",
            body: formData,
        });

        const data = await res.json();

        if (res.ok) {
            setMessage(`File uploaded: ${data.filePath} (${data.fileType})`);
        } else {
            setMessage(`Upload failed: ${data.error}`);
        }
    };

    return (
        <div className="p-4">
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload} className="bg-blue-500 text-white p-2 mt-2">Upload</button>
            {message && <p>{message}</p>}
        </div>
    );
}
