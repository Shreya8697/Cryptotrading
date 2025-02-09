import React from "react";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import "./styles.css";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

function Grid({ coin }) {
  return (
    <Link to={`/coin/${coin.id}`}>
    <div
      className={`grid-container ${
        coin.price_change_percentage_24h < 0 ? "grid-container-red" : ""
      }`}
    >
      <div className="info-flex">
        <Tooltip title="coin logo">
          <img src={coin.image} className="coin-logo" />
        </Tooltip>
        <Tooltip title="coin info">
          <div className="name-col">
            <p className="coin-symbol">{coin.symbol}</p>
            <p className="coin-name">{coin.name}</p>
          </div>
        </Tooltip>
      </div>
      <Tooltip title="Price change in 24hrs">
        {coin.price_change_percentage_24h >= 0 ? (
          <div className="chip-flex">
            <div className="price-chip">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="chip-icon">
              <TrendingUpRoundedIcon />
            </div>
          </div>
        ) : (
          <div className="chip-flex">
            <div className="price-chip red">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="chip-icon red">
              <TrendingDownRoundedIcon />
            </div>
          </div>
        )}
      </Tooltip>
      <div className="info-container">
        <Tooltip title="Current price" placement="top-start">
          <h3
            className="coin-price"
            style={{
              color:
                coin.price_change_percentage_24h < 0
                  ? "var(--red)"
                  : "var(--green)",
            }}
          >
            ${coin.current_price.toLocaleString()}
          </h3>
        </Tooltip>
        <p className="total-volume">
          Total volume: ${coin.total_volume.toLocaleString()}
        </p>
        <p className="total-volume">
          Market Cap: ${coin.total_supply.toLocaleString()}
        </p>
      </div>
    </div>
    </Link>
  );
}

export default Grid;
