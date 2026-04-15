"use client";
import { useFileContext } from "@/Contexts/FileContext";
import "./output.css";
import DataTableFunction from "../DataTable/DataTable";
import { useState } from "react";
import Chart from "../Charts/Chart";
// import { studentData } from "@/data";
const Output = () => {
  const { fileId } = useFileContext();
  const [userQuery, setUserQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState<any>();
  // handle query button click and api call
  const handleQueryButtonClick = async () => {
    if (!userQuery) return;
    try {
      setLoading(true);
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}query`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fileId: fileId,
          query: userQuery,
        }),
      });
      if (response.ok) {
        const result = await response.json();
        setLoading(false);
        console.log(result);
        setResultData(result);
        setUserQuery("");
      }
      setUserQuery("");
    } catch (error) {
      setLoading(false);
      setUserQuery("");
      console.log("Error while executing query:", error);
    } finally {
      setLoading(false);
      setUserQuery("");
    }
  };
  return (
    <div className="resultsContainer">
      <div className="results">
        {fileId ? (
          <>
            <p>data table to be shown here</p>
          </>
        ) : (
          <p style={{ padding: "10px" }}>
            Please upload a <strong> .csv </strong> file to start with.
          </p>
        )}
        <div className="charts">
          {resultData && <Chart data={resultData} />}
        </div>
      </div>
      <div className="resultInputButton">
        <input
          type="text"
          placeholder="Ask any think related to your data file."
          className="userInput"
          onChange={(event) => setUserQuery(event.target.value)}
        />
        <button
          className="askButton cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleQueryButtonClick}
          disabled={loading}
        >
          Ask <span className="text-2xl text-green-500">&#10148;</span>
        </button>
      </div>
    </div>
  );
};

export default Output;
