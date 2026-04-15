import { FileProvider } from "@/Contexts/FileContext";
import Output from "../Output/Output";
import UploadForm from "../UploadForm/UploadForm";
import "./dashboard.css";
const Dashboard = () => {
  return (
    <FileProvider>
      <div className="dashboard flex flex-col justify-center items-center">
        <UploadForm />
        <Output />
      </div>
    </FileProvider>
  );
};

export default Dashboard;
