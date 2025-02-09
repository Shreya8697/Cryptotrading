import React from 'react';
import "./style.css";
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Tooltip } from '@mui/material';
import { convertNumbers } from '../../../functions/convertNumbers';
import { Link } from "react-router-dom";

function List({ coin }) {
  return (
    <Link to={`/coin/${coin.id}`}>
    <tr className='list-row'>
      <Tooltip title="coin logo">
        <td className='td-image'>
          <img src={coin.image} className="coin-logo" alt={`${coin.name} logo`} />
        </td>
      </Tooltip>
      <Tooltip title="coin info">
        <td>
          <div className='name-col'>
            <p className='coin-symbol'>{coin.symbol}</p>
            <p className='coin-name'>{coin.name}</p>
          </div>
        </td>
      </Tooltip>
      <Tooltip title="Price change in 24 hrs">
        {coin.price_change_percentage_24h !== undefined ? (
          coin.price_change_percentage_24h >= 0 ? (
            <td className="chip-flex">
              <div className="price-chip">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className="chip-icon td-icon">
                <TrendingUpRoundedIcon />
              </div>
            </td>
          ) : (
            <td className="chip-flex">
              <div className="price-chip red">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className="chip-icon red td-icon">
                <TrendingDownRoundedIcon />
              </div>
            </td>
          )
        ) : (
          <td className="chip-flex">N/A</td>
        )}
      </Tooltip>
      <Tooltip title="Current price" placement='top-start'>
        <td>
          <h3
            className='coin-price td-center-align'
            style={{
              color:
                coin.price_change_percentage_24h < 0
                  ? "var(--red)"
                  : "var(--green)",
            }}
          >
            {coin.current_price !== undefined
              ? `$${coin.current_price.toLocaleString()}`
              : "N/A"}
          </h3>
        </td>
      </Tooltip>
      <Tooltip title="Total Volume">
        <td>
          <p className='total-volume td-center-align td-total-volume'>
            {coin.total_volume !== undefined
              ? `$${coin.total_volume.toLocaleString()}`
              : "N/A"}
          </p>
        </td>
      </Tooltip>
      <Tooltip title="Market Cap">
        <td className='desktop-td-mkt'>
          <p className='total-volume td-right-align'>
            {coin.total_supply !== undefined
              ? `$${coin.total_supply.toLocaleString()}`
              : "N/A"}
          </p>
        </td>
      </Tooltip>
      <Tooltip title="Market Cap">
        <td className='mobile-td-mkt'>
          <p className='total-volume td-right-align'>
            {coin.total_supply !== undefined
              ? `$${convertNumbers(coin.total_supply)}`
              : "N/A"}
          </p>
        </td>
      </Tooltip>
    </tr>
    </Link>
  );
}

export default List;
