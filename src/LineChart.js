import React from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto";
import { candlestickData } from "./data"; // Make sure the path is correct

function LineChart() {
  return (
    <div>
      <Line
        data={{
          labels: candlestickData.map((candle) => candle.time),
          datasets: [
            {
              label: "prices",
              data: candlestickData.map((candle) => candle.high),
              yAxisID: "right-y-axis", // Assign a unique ID to the right Y-axis
              borderColor: "blue",
              borderWidth: 2,
              fill: false,
            },
          ],
        }}
        options={{
          scales: {
            y: {
              position: "left", // Set 'left' to keep the left Y-axis (default)
            },
            "right-y-axis": {
              // Define options for the right Y-axis
              position: "right", // Set 'right' to move it to the right side
            },
          },
        }}
      />
    </div>
  );
}

export default LineChart;
