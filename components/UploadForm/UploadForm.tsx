"use client";
import { ChangeEvent, SubmitEvent, useState } from "react";
import "./uploadform.css";
import UserMessages from "../UserMessages/UserMessages";
import { useFileContext } from "@/Contexts/FileContext";
const UploadForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(false);

  const { setFileId } = useFileContext();

  // Handle file change in input type file
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) {
      alert("Please select a file");
      return;
    }
    if (selectedFile.type !== "text/csv") {
      alert("Only .csv files are allowed");
      return;
    }
    setFile(selectedFile);
  };

  // Handling form submit
  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!file) {
      alert("No file selected ! Please one");
      return;
    }
    try {
      setLoading(true);
      setType("success");
      setMessage("Please wait while uploading is in process.");

      const formData = new FormData();
      formData.append("file", file);
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}upload`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        setType("success");
        setMessage("File upload sucessfully.");
        setFileId(result.fileId);
      } else {
        setType("error");
        setMessage("File upload unsuccessfull.");
        console.log(response);
      }
    } catch (error) {
      setMessage("Not able to upload your file. Try again");
      setType("error");
      console.log("Uploading failed: ", error);
    } finally {
      setTimeout(() => {
        setLoading(false);
        setMessage("");
      }, 1500);
    }
  };
  return (
    <>
      <div className="uploadContainer">
        {file && (
          <p className="selectedFile">
            Selected file: <strong>{file.name}</strong>
          </p>
        )}
        <form
          className="flex flex-row items-center gap-3"
          onSubmit={handleSubmit}
        >
          <label
            htmlFor="uploadCsv"
            className="flex flex-row items-center cursor-pointer"
          >
            <strong>
              Upload a <span className="text-cyan-500">.csv</span> file
            </strong>
          </label>
          <input
            type="file"
            id="uploadCsv"
            className="uploadInput cursor-pointer"
            name="file"
            accept=".csv"
            onChange={handleFileChange}
          />
          <button type="submit">
            <div className="buttonWrapper"></div>
            <img className="uploadIcon" src="/csv.png" alt="upload image" />
          </button>
        </form>
      </div>
      {message && (
        <UserMessages message={message} loading={loading} type={type} />
      )}
    </>
  );
};

export default UploadForm;
