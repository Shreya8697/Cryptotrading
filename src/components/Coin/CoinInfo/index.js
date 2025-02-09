import React, { useState } from 'react';
import './styles.css';


function CoinInfo({heading, desc}) {
  const shortDesc = 
    desc.slice(0,350)+"<span style='color:var(--gray)'>  Read More...</span>";
  const longDesc =
   desc +"<span style='color:var(--gray)'>  Read Less...</span>";
  const [Flag, setFlag]=useState(false);
  return (
    <div className='grey-wrapper'>
        <h2 className='coin-info-heading'>{heading}</h2>
      {desc.length>350?(
        <p
        onClick={()=>setFlag(!Flag)}
       className='coin-info-desc'
       dangerouslySetInnerHTML={{__html:!Flag?shortDesc:longDesc}}
       />
      ):(<p dangerouslySetInnerHTML={{__html:!Flag?shortDesc:longDesc}}/>
        
      )}
    </div>
  )
}

export default CoinInfo;
