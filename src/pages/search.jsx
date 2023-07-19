import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import papa from "papaparse";
import data from "./food1.csv";

const columns = [
  { field: "ID", headerName: "ID", width: 250 },
  { field: "Food", headerName: "Food", width: 250 },
  { field: "Measure", headerName: "Measure", width: 250 },
  { field: "Calories", headerName: "Calories", width: 250 },
  { field: "Protien", headerName: "Protein", width: 250 },
  { field: "Fat", headerName: "Fat", width: 250 },
  { field: "Carbs", headerName: "Carbs", width: 250 }
];

export default function DataTable() {
  const [data1, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [select, setselect] = useState([]);
  const [cal, setcal] = useState();

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

  const handleRowClick = (params) => {
    setselect(params.row.Calories);
    setcal(params.row.Calories);
  };

  function handlebuttonclick(select) {
    setcal(select);
    console.log(cal);
  }

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "250%"
      }}
      justifyContent="center"
    >
      <TextField
        fullWidth
        label="Search"
        id="search"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <div style={{ height: "auto", width: "100%" }}>
        <DataGrid
          rows={filteredData}
          columns={columns}
          getRowId={(data1) => data1.ID}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 }
            }
          }}
          pageSizeOptions={[5, 10, 25, 50, 100]}
          checkboxSelection
          onRowClick={handleRowClick}
        />
        <Button
          variant="contained"
          size="large"
          onClick={() => handlebuttonclick(select)}
        >
          Submit
        </Button>
      </div>
    </Box>
  );
}
