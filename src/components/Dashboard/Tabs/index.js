import React, { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme, ThemeProvider } from '@mui/material/styles'; // Correct import
import Grid from '../Grid';
import "./styles.css";
import List from '../List';

export default function TabsComponent({coins}) {
  const [value, setValue] = useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--white)",
    width: "50vw",
    fontWeight: "bold", // Corrected fontWeight to a valid value
    textTransform: "capitalize",
  };   

  const theme = createTheme({
    palette: { // Corrected casing from `Palette` to `palette`
      primary: {
        main: "#3a80e9",
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <TabContext value={value}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" variant="fullWidth">
            <Tab label="Grid" value="grid" sx={style} />
            <Tab label="List" value="list" sx={style} />
          </TabList>
          <TabPanel value="grid">
          <div className='grid-flex'>
            {coins.map((coin,i)=>{
            return(
              <Grid coin={coin} key={i}/>
            )
            })}
          </div>  
          </TabPanel> {/* Corrected values to match TabList */}
          <TabPanel value="list">
          <table className='list-table'>
            {coins.map((item,i)=>{
            return(
              <List coin={item} key={i}/>
            )
          })}</table>  
          </TabPanel> {/* Corrected values to match TabList */}
        </TabContext>
      </ThemeProvider>
    </div>
  );
}
