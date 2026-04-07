import Card from "../Card/Card";
import "./steps.css";

const Steps = () => {
  return (
    <div className="steps flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold">Process</h1>
      <p className="text-[14px] text-gray-400">
        Following simple process and get instant analysis
      </p>
      <div className="cardsWrapper flex flex-row gap-5 flex-wrap justify-center items-center">
        <Card
          title="Upload Your Data"
          desc="Easily upload your csv files and get instant analysis"
          img="/csv.png"
          alternativeText="csv image"
        />
        <Card
          title="Ask question, Get answers"
          desc="Interact with out AI and get insights of your data"
          img="/ask.png"
          alternativeText="ask image"
        />
        <Card
          title="Visualise Results"
          desc="See your data in clear, intractive charts"
          img="/visual.png"
          alternativeText="visual image"
        />
      </div>
    </div>
  );
};

export default Steps;
