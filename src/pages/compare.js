import React, { useState } from 'react';
import Header from '../components/common/Header';
import SelectDays from "../components/Coin/SelectDays"
import SelectCoins from '../components/Compare/SelectCoins';

function ComparePage() {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const[days,setDays]=useState(30);
  function handleDaysChange(event) {
    setDays(event.target.value);
  }
  
  return (
    <div>
      < Header/>
      <div className='coins-day-flex'>
      <SelectCoins crypto1={crypto1} setCrypto1={setCrypto1} crypto2={crypto2} setCrypto2={setCrypto2}/>
      <SelectDays days={days} handleDaysChange={handleDaysChange}/>
      </div>
    </div>
  )
}

export default ComparePage
