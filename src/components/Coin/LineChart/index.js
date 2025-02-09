import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; //Dont get rid of this
import { convertNumbers } from "../../../functions/convertNumbers";

function LineChart({ chartData, multiAxis ,priceType}) {
  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      x: {
        title: {
          text: "Date and Month", // X-axis label
          display: true,
          
        },
      },
      y: {
        title: {
          display: true,
          text: "Value", // Y-axis label
        },
        ticks:{
          callback:function(value,index,ticks){
            if(priceType=="prices")
            return"$"+value.toLocaleString();
          else {
            return "$"+convertNumbers(value);
          }
          },
        },
      },
      crypto1: {
        position: "left",
      },
    },
  };

  return <Line data={chartData} options={options} />;
}

export default LineChart;