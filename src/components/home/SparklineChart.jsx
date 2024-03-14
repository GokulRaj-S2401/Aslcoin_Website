import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const SparklineChart = ({ data, width, height }) => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current && data.length > 0) {
      if (chartRef.current) {
        chartRef.current.destroy();
      }

      const ctx = canvasRef.current.getContext("2d");

      chartRef.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: data.map((_, index) => index.toString()),
          datasets: [
            {
              data: data.map((value) => parseFloat(value)),
              borderColor: "rgba(75, 192, 192, 1)",
              tension: 0.4,
              borderWidth: 1,
              fill: false,
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              display: false,
            },
            y: {
              display: false,
            },
          },
        },
      });
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [canvasRef, data]);

  return <canvas ref={canvasRef} style={{ width: width, height: height }} />;
};

export default SparklineChart;
