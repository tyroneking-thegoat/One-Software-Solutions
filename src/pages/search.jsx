import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
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
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    // Parse data only once during initial render
    papa.parse(data, {
      dynamicTyping: true,
      header: true,
      download: true,
      skipEmptyLines: true,
      complete: function (result) {
        setData(result.data);
      }
    });
  }, []);

  useEffect(() => {
    // Filtering logic based on the searchQuery
    const filtered = data1.filter((row) => {
      // Assuming that you want to search in the "Food" column
      return row.Food.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setFilteredData(filtered);
  }, [data1, searchQuery]);
  
  return (
    <Box
      sx={{
        width: 800,
        maxWidth: '100%',
      }}
      justifyContent="center"
    >
      <TextField
        fullWidth
        label="Search"
        id="search"
        value={searchQuery}
        onChange={handleSearchChange}/>
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={filteredData}
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
    </Box>
  );
}
