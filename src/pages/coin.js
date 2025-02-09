import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import { useParams } from "react-router-dom";
import Loader from "../components/common/Loader";
// import axios from "axios";
import { coinObject } from "../functions/convertObject";
import List from "../components/Dashboard/List";
import CoinInfo from "../components/Coin/CoinInfo";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import LineChart from "../components/Coin/LineChart";
// import { convertDate } from "../functions/convertDate";
import SelectDays from "../components/Coin/SelectDays";
import { settingCharData } from "../functions/settingChartData";
import TogglePriceType from "../components/Coin/PriceType";

function CoinPage() {
  const { id } = useParams(); // Get the coin ID from the URL
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState(null); // Store the coin data
  const [days, setDays] = useState(30);
  const [chartData, setChartData] = useState([]);
  const [PriceType, setPriceType] = useState("prices");

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  async function getData() {
    const data = await getCoinData(id);
    if (data) {
      coinObject(setCoinData, data);
      const prices = await getCoinPrices(id, days,PriceType);
      if (prices.length > 0) {
        console.log("wowho");
        settingCharData(setChartData, prices);
        setIsLoading(false);
      }
    }
  }

 const handleDaysChange = async (event) => {
    setIsLoading(true);
    const selectedDays = event.target.value; // ✅ Declare first
    setDays(selectedDays); // ✅ Update state correctly

    const prices = await getCoinPrices(id, selectedDays, PriceType); // ✅ Use correct variable
    if (prices.length > 0) {
      settingCharData(setChartData, prices);
    }
    setIsLoading(false);
};


  const handlePriceTypeChange = async (event, newType) => {
      setIsLoading(true);
      setPriceType(newType);
      const prices = await getCoinPrices(id,days, newType); // Get the selected value immediately
    if (prices.length > 0) {
      settingCharData(setChartData, prices);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader /> // Show loader while data is being fetched
      ) : (
        <>
          <div className="grey-wrapper" style={{ padding: "0rem 1rem" }}>
            <List coin={coinData} />
          </div>
          <div className="grey-wrapper">
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
            <TogglePriceType
              PriceType={PriceType}
              handlePriceTypeChange={handlePriceTypeChange}
            />
            <LineChart chartData={chartData}PriceType={PriceType} />
          </div>
          <CoinInfo heading={coinData.name} desc={coinData.desc} />
        </>
      )}
    </div>
  );
}

export default CoinPage;
