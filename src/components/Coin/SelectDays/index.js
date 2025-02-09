import React, {  useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import "./styes.css";

export default function SelectDays({days,handleDaysChange}) {

  return (
    <div className='select-days'>
      <p>Price Change In</p>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={days} // Ensure correct binding
          label="Days"
          onChange={(event) => handleDaysChange(event)} // Ensure correct event handling
          sx={{
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
          }}
        >
            <MenuItem value={7}>7 Days</MenuItem>
          <MenuItem value={30}>30 Days</MenuItem>
          <MenuItem value={60}>60 Days</MenuItem>
          <MenuItem value={90}>90 Days</MenuItem>
          <MenuItem value={120}>120 Days</MenuItem>
          <MenuItem value={365}>1 Year</MenuItem>
        </Select>
      
    </div>
  );
}
