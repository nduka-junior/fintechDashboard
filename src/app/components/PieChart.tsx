"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      label: "# Success rate",
      data: [100, 80],
      backgroundColor: ["#A6D997", "#DFEEDB"],
      borderColor: ["transparent", "transparent"],
      cutout: "65%",

      borderWidth: 5,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false, // Hide the legend
    },
  },
  cutout: 30, // Set the inner radius
  aspectRatio: 1.4,
};

function PieChart() {
  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default PieChart;
