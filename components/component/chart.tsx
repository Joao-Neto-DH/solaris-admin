"use client";

import React from "react";
import Chart from "react-google-charts";

function Charts() {
  return (
    <div className="p-6 mx-24 mb-24 rounded shadow-lg bg-slate-100">
      <Chart
        chartType="Bar"
        data={[
          ["Mês", "Viana", "Cazenga", "Talatona"],
          ["Março", 1000, 400, 200],
          ["Abril", 1170, 460, 250],
          ["Maio", 66, 1120, 300],
          ["Junho", 1030, 540, 350],
        ]}
        width="100%"
        height="400px"
        legendToggle
      />
    </div>
  );
}

export default Charts;
