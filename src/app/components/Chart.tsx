"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,

  plugins: {
    legend: {
      position: "top" as const,
      display: false,
    },
  },
  scales: {
    y: {
      suggestedMin: 0, // Set your desired minimum value
      suggestedMax: 180000, // Set your desired maximum value
      ticks: {
        stepSize: 40000, // Adjust this value to control the spacing between ticks
        font: {
          weight: " 300",
        },
        padding: 10,
      },
      border: {
        dash: [10, 4],
        display: false,
      }, // Sets the horizontal grid lines to be dashed
      grid: {
        drawBorder: false,

        color: "#E0E0E0",
        lineWidth: 1.3,
        zeroLineColor: "transparent",
      },
    },
    x: {
      ticks: {
        font: {
          weight: " 300",
        },
      },
      border: {
        display: false,
      },
      grid: {
        drawBorder: false,
        display: false,
      },
    },
  },
};

const labels = [
  "Mar 1 - 7",
  "Mar 8 - 14",
  "Mar 15 - 21",
  "Mar 22 - 28",
  "Final wk",
];
const dataNumbers = [50000, 125000, 123000, 120000, 170000];

export const data = {
  labels,
  datasets: [
    {
      data: dataNumbers,
      backgroundColor: "#ECCCFF",
      borderRadius: 15,
    },
  ],
};
function Chart() {
  return (
    <div className="border-[1px] border-[#F2F2F2] rounded-[40px] px-6 pb-7 pt-2 w-[85%]">
      <Bar options={options} data={data} className="!h-auto !w-full mt-6" />
    </div>
  );
}

export default Chart;
