"use client";
import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
ChartJS.register(CategoryScale, LinearScale, BarElement);
import { useTheme } from "next-themes";

function BarrChart() {
  const { theme, setTheme } = useTheme();
  const [currentColor, setCurrentColor] = useState(
    theme === "dark" ? "white" : "black"
  );

  useEffect(() => {
    if (theme == "dark") {
      setCurrentColor("white");
    } else {
      setCurrentColor("black");
    }
  }, [theme]);
 
  const options = {
    aspectRatio: 2,

    responsive: true,
    plugins: {
      ChartDataLabels,

      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        font: {
          weight: " 300",
        },
        ticks: {
          color: currentColor,
        },

        border: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
      },
    },
  };

  const labels = ["a", "x", "o", "n"];

  const data = {
    labels,
    datasets: [
      {
        data: [1, 5, 3, 10],

        backgroundColor: ["#FFBB4F", "#FFDA93", "#FF7576", "#80E0E5"],
        borderRadius: 8,
      },
    ],
    datalabels: {
      anchor: "end", // Position of the data labels (top of bars)
      align: "top", // Alignment of the data labels
      color: "black", // Text color of the data labels
      font: {
        weight: "bold", // Font weight of the data labels
      },
    },
  };
  return <Bar options={options} data={data} className="" />;
}

export default BarrChart;
