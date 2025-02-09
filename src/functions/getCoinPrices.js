import axios from "axios";

export const getCoinPrices=(id,days,PriceType)=>{
    const prices = axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
      )
        .then((response)=>{
          console.log("prices>>",response.data);
          return response.data[PriceType];
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
        return prices;
};