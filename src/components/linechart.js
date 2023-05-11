import React from "react";
import { Line } from "react-chartjs-2";

function LineChart({ chartData }) {
  return (
    <div className="chart-container " style={{width:"70%"}}>
      <h2 style={{ textAlign: "center" }}>Chart 1</h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
}
export default LineChart;