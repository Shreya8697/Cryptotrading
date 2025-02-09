import { convertDate } from "./convertDate";

export const settingCharData=(setChartData,prices)=>{
    setChartData({
        labels: prices.map((price) => convertDate(price[0])),
        datasets: [
          {
            // label: coinData?.name || "Price Chart", // Set coin name dynamically
            data: prices.map((price) => price[1]),
            borderWidth: 1.5,
            fill: true,
            tension: 0.25, //for curve line
            borderColor: "#3a80e9",
            backgroundColor: "rgba(38,129, 233, 0.1)",
            pointRadius: 0,
            yAxisID: "y",
          },
        ],
      });
};