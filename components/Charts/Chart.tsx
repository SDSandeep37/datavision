// import { studentData } from "@/data";
import "./charts.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
} from "recharts";

interface ChartProp {
  data: any;
}
const Chart = ({ data }: ChartProp) => {
  if (!data || !data.result) {
    return <p>Loading chart...</p>;
  }
  const result = data.result;
  if (!result || result.length === 0) {
    return <p>No chart data available</p>;
  }
  console.log(result);
  if (!data?.result || !data?.parsedOperations) {
    return <p>Loading chart...</p>;
  }
  const { chart, explanation, column, metric } = data.parsedOperations;

  const chartType = chart;
  // Colors for pie chart
  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#8dd1e1"];
  return (
    <div>
      <ResponsiveContainer width="100%" height={500}>
        {chartType === "bar" && (
          <BarChart
            data={result}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={metric} angle={-45} textAnchor="end" interval={0} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey={column} fill="#8884d8" />
          </BarChart>
        )}
        {chartType === "line" && (
          <LineChart data={result}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={metric} angle={-45} textAnchor="end" interval={0} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey={column} stroke="#82ca9d" />
          </LineChart>
        )}

        {chartType === "pie" && (
          <PieChart>
            <Pie
              data={result}
              dataKey={column}
              nameKey={metric}
              cx="50%"
              cy="50%"
              outerRadius={120}
              label
            />
          </PieChart>
        )}
      </ResponsiveContainer>
      <div className="explaination">
        <p>{explanation}</p>
      </div>
    </div>
  );
};

export default Chart;
