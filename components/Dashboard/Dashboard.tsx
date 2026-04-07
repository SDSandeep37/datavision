import "./dashboard.css";
const Dashboard = () => {
  return (
    <div className="dashboard flex flex-col justify-center items-center">
      <div className="uploadContainer">
        <form className="flex flex-row items-center gap-3">
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
          />
          <button type="submit">
            <div className="buttonWrapper"></div>
            <img className="uploadIcon" src="/csv.png" alt="upload image" />
          </button>
        </form>
      </div>
      <div className="resultsContainer">
        <div className="results"></div>
        <div className="resultInputButton">
          <input
            type="text"
            placeholder="Ask any think related to your data file."
            className="userInput"
          />
          <button className="askButton">Ask &#10148;</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
