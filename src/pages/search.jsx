import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import papa from "papaparse";
import data from "./nutrients_csvfil.csv";

const columns = [
  { field: "Food", headerName: "Food", width: 130 },
  { field: "Measure", headerName: "Measure", width: 100 },
  { field: "Grams", headerName: "Grams", width: 100 },
  { field: "Calories", headerName: "Calories", width: 100 },
  { field: "Protein", headerName: "Protein", width: 100 },
  { field: "Fat", headerName: "Fat", width: 100 },
  { field: "Sat.Fat", headerName: "Sat.Fat", width: 100 },
  { field: "Fiber", headerName: "Fiber", width: 100 },
  { field: "Carbs", headerName: "Carbs", width: 100 },
  { field: "Category", headerName: "Category", width: 100 }
];

export default function DataTable() {
  const [data1, setData] = useState([]);

  papa.parse(data, {
    dynamicTyping: true,
    header: true,
    download: true,
    skipEmptyLines: true,
    complete: function (result) {
      setData(result.data);
    }
  });

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data1}
        columns={columns}
        getRowId={(data1) => data1.Grams}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 }
          }
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}