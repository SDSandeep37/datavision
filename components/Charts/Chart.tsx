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
  const result = data.result;
  // const studentData = result.map((student: any) => ({
  //   name: student.Name,
  //   marks: Number(student.Marks),
  //   department: student.Department,
  // }));
  const { chart, explanation } = data.parsedOperations;

  const chartType = chart;
  // Colors for pie chart
  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#8dd1e1"];
  return (
    <div>
      {/* <BarChart
        style={{
          width: "100%",
          maxWidth: "700px",
          maxHeight: "70vh",
          aspectRatio: 1.618,
        }}
        responsive
        data={studentData}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis width="auto" />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="pv"
          fill="#8884d8"
          activeBar={{ fill: "pink", stroke: "blue" }}
          radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey="uv"
          fill="#82ca9d"
          activeBar={{ fill: "gold", stroke: "purple" }}
          radius={[10, 10, 0, 0]}
        />
      </BarChart> */}
      <ResponsiveContainer width="100%" height={500}>
        {chartType === "bar" && (
          <BarChart
            data={result}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" angle={-45} textAnchor="end" interval={0} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="marks" fill="#8884d8" />
          </BarChart>
        )}
        {chartType === "line" && (
          <LineChart data={result}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" angle={-45} textAnchor="end" interval={0} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="marks" stroke="#82ca9d" />
          </LineChart>
        )}

        {chartType === "pie" && (
          <PieChart>
            <Pie
              data={result}
              dataKey="marks"
              nameKey="name"
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
