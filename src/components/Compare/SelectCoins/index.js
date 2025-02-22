import React, { useEffect, useState } from "react";
import "./style.css";
import { get100Coins } from "../../../functions/get100Coins";
import { MenuItem, Select } from "@mui/material";

function SelectCoins({crypto1,crypto2,setCrypto1,setCrypto2}) {


  const [allCoins, setAllCoins] = useState([]);

  const styles = {
    width: "100px",
    height: "2.5rem",
    color: "var(--white)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--white)", // Fixed selector
    },
    "& .MuiSvgIcon-root": {
      color: "var(--white)", // Fixed selector
    },
    "&:hover fieldset": {
      borderColor: "#3a80e9", // Correct hover effect
    },
  };

  const handleCoinChange = (event, isCoin2) => {
    if (isCoin2) {
      setCrypto2(event.target.value);
      console.log("my crypto2", event.target.value);
    } else {
      setCrypto1(event.target.value);
      console.log("my crypto1", event.target.value);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const myCoins = await get100Coins();
    setAllCoins(myCoins);
  }

  return (
    <div className="coins-flex">
      <p>Crypto1</p>
      <Select
        sx={styles}
        value={crypto1} // Ensure correct binding
        label="Crypto1"
        onChange={(event) => handleCoinChange(event)} // Ensure correct event handling
      >
        {allCoins.map((coin) => (
          <MenuItem value={coin.id}>{coin.name}</MenuItem>
        ))}
      </Select>
      <p>Crypto2</p>
      <Select
        sx={styles}
        value={crypto2} // Ensure correct binding
        label="Crypto2"
        onChange={(event) => handleCoinChange(event, true)} // Ensure correct event handling
      >
        {allCoins.map((coin) => (
          <MenuItem value={coin.id}>{coin.name}</MenuItem>
        ))}
      </Select>
    </div>
  );
}
//nothing just editing
//start it now
//lots od things is remain

export default SelectCoins;
