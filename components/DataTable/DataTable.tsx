import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { useFileContext } from "@/Contexts/FileContext";
import "./dataTable.css";
type RowData = {
  [key: string]: any;
};
type Insight = {
  title: string | null;
  description: string | null;
  [key: string]: any;
};
const customStyles = {
  headCells: {
    style: {
      backgroundColor: "var(--color-dark1)",
      color: "var(--color-white)",
    },
  },
  rows: {
    style: {
      backgroundColor: "var(--color-dark1)",
      color: "var(--color-white)",
    },
    highlightOnHoverStyle: {
      backgroundColor: "var(--color-dark)",
      cursor: "pointer",
      color: "var(--color-white)",
    },
  },
};

const DataTableFunction = () => {
  const [columns, setColumns] = useState<TableColumn<RowData>[]>([]);
  const [data, setData] = useState<RowData[]>([]);
  const [loading, setLoading] = useState(true);
  const [insights, setInsights] = useState<Insight[]>([]);
  const { fileId } = useFileContext();
  useEffect(() => {
    const fetchData = async () => {
      if (!fileId) return;
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}upload/data/${fileId}`,
        );
        if (response.ok) {
          const result = await response.json();
          const dynamicColumns: TableColumn<RowData>[] = result.columns.map(
            (col: string) => ({
              name: col.toUpperCase(),
              selector: (row: RowData) => row[col],
              sortable: true,
            }),
          );
          setColumns(dynamicColumns);
          setData(result.data);
          setInsights(result.insight);
        }
      } catch (error) {
        console.log("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [fileId]);

  return (
    <div className="dataTableContainer">
      <DataTable
        title="Data Table"
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        pointerOnHover
        customStyles={customStyles}
        progressPending={loading}
      />
      <div className="firstInsights">
        {insights &&
          insights.length > 0 &&
          insights.map((insight, index) => {
            return (
              <div className="firstInsight" key={index}>
                <p className="title font-bold italic text-green-200">
                  {insight.title}
                </p>
                <p className="description">{insight.description}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default DataTableFunction;
