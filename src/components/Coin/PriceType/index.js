import { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import "./style.css";

export default function TogglePriceType({PriceType, handlePriceTypeChange}) {


  return (
    <div className="toggle-prices">
    <ToggleButtonGroup
      value={PriceType}
      exclusive
      onChange={handlePriceTypeChange}
      sx={{
        borderColor: "var(--blue)",
        "& .MuiToggleButtonGroup-grouped": {
          border: "1px solid var(--blue) !important",
          color: "var(--blue)",
        },
        "& .MuiToggleButton-root": {  // Target ToggleButton correctly
          color: "var(--blue)",
          borderColor: "var(--blue) !important",
        },
        "& .MuiToggleButton-root.Mui-selected": {  // Correctly apply styles when selected
          color: "var(--blue) !important",
          backgroundColor: "rgba(58, 128, 233, 0.1) !important",
        },
        "& .MuiToggleButton-root:hover": {
          backgroundColor: "rgba(58, 128, 233, 0.2) !important",
        },
      }}
    >
      <ToggleButton value="prices" className='toggle-btn' >Price</ToggleButton>
      <ToggleButton value="market_caps" className='toggle-btn'>Market Cap</ToggleButton>
      <ToggleButton value="total_volumes" className='toggle-btn'>Total Volume</ToggleButton>
    </ToggleButtonGroup>
    </div>
  );
  
}
