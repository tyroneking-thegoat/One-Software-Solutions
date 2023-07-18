import * as React from "react";

import { useState } from "react";

import { Chart } from "react-google-charts";



/*
var data = [
  ["Calories", "totalcalories"],
  ["Calories Burned", 100],
  ["Calories Consumed", 100],
  ["Exercise Goal", 100],
  ["Intake Goal", 100],
];
*/

export default function FormDialog({ data }) {
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


  const options = {
    //title: "My Daily Activities",
    pieHole: 0.4,
    is3D: false,
    /*
    slices: {
      // Use formatter to control the number of decimal places
      0: {
        offset: 0.2,
        textStyle: {
          formatter: new window.google.visualization.NumberFormat({
            fractionDigits: 0,
          }),
        },
      },
      1: {
        offset: 0.1,
        textStyle: {
          formatter: new window.google.visualization.NumberFormat({
            fractionDigits: 0,
          }),
        },
      },
      // ...
    },
    */
    
  };

  return (
    <div>
      <Chart
        chartType="PieChart"
        width="100%"
        height="200px"
        data={newdata}
        options={options}
      />
    </div>
  );
}