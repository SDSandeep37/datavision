import Card from "../Card/Card";
import "./results.css";

const Results = () => {
  return (
    <div className="results flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold">Sample Insights</h1>
      <p className="text-[14px] text-gray-400">
        Discover trends and key metrics from your data
      </p>
      <div className="cardsWrapper flex flex-row gap-5 flex-wrap justify-center items-center">
        <Card
          title="Sales Overview"
          desc="Upto 20% this month"
          img="/sales_overview.png"
          alternativeText="sales overview image"
        />
        <Card
          title="Customer Demographics"
          desc="Top region Nagri with 40%"
          img="/pie_chart.png"
          alternativeText="pie chart image"
        />
        <Card
          title="Revenue Growth"
          desc="Revenue increase by 24% last quater"
          img="/revenue.png"
          alternativeText="revenue image"
        />
      </div>
    </div>
  );
};

export default Results;
