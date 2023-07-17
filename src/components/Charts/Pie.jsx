import * as React from "react";

import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { Chart } from "react-google-charts";

var data = [
  ["Calories", "totalcalories"],
  ["Exercise", 200],
  ["Intake", 2500] // CSS-style declaration
];

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [value, setValue] = useState("");
  const [newdata, setdata] = useState(data);

  console.log(newdata);

  const handleKeyDown = (event) => {
    console.log(event.key);

    if (event.key === "Enter") {
      event.preventDefault();

      // 👇️ access input value from state
      console.log(value);
      // 👇️ access input value from event object
      // console.log(event.target.value)
      setdata(
        newdata.map((cal) => {
          if (cal[0] === "Intake") {
            return [cal[0], cal[1] + parseInt(value)];
          } else {
            return cal;
          }
        })
      );
      console.log("User pressed Enter ✅");

      setOpen(false);
    }
  };

  const options = {
    //title: "My Daily Activities",
    pieHole: 0.4,
    is3D: false
  };

  return (
    <div>
      <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={newdata}
        options={options}
      />

      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Calories</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Add Calories"
            type="calories"
            fullWidth
            variant="standard"
            onChange={(event) => setValue(event.target.value)}
            onKeyDown={handleKeyDown}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
