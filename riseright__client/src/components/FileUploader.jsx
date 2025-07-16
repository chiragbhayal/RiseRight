// client/src/components/FileUploader.jsx

import { useState } from "react";
import { UploadCloud, X } from "lucide-react";

const FileUploader = ({ onUploadSuccess }) => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
    setError("");
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setUploading(true);
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Upload failed.");
      }

      onUploadSuccess(result);
      setFile(null);
      setError("");
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError("");
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 mt-6">
      <h2 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white flex items-center gap-2">
        <UploadCloud className="w-6 h-6 text-indigo-500" />
        Upload Supporting Documents
      </h2>

      <div
        className="border-2 border-dashed border-indigo-300 dark:border-indigo-500 rounded-md p-6 text-center cursor-pointer hover:bg-indigo-50 dark:hover:bg-indigo-900 transition"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <p className="text-sm text-gray-600 dark:text-gray-300">Drag & drop a file here</p>
        <p className="text-xs text-gray-400 dark:text-gray-500">or click to select from your computer</p>
        <input
          type="file"
          onChange={handleFileChange}
          className="hidden"
          id="fileInput"
        />
        <label htmlFor="fileInput" className="block mt-3 text-indigo-600 dark:text-indigo-400 font-medium cursor-pointer">
          Choose File
        </label>
      </div>

      {file && (
        <div className="mt-4 flex justify-between items-center bg-gray-50 dark:bg-gray-800 p-2 rounded-md">
          <span className="text-sm text-gray-700 dark:text-gray-200">{file.name}</span>
          <button
            onClick={() => setFile(null)}
            className="text-red-500 hover:text-red-700 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {error && <p className="text-sm text-red-500 mt-2">{error}</p>}

      <button
        onClick={handleUpload}
        disabled={uploading || !file}
        className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 disabled:opacity-50 transition"
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
};

export default FileUploader;
