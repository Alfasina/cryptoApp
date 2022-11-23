import React from 'react';
import InnerDivHeader from './innerDivHeader';
import { useHomeContext } from '../contexts/homeContext';
import Loading from './loading';
import millify from "millify";

const CoinData = (simplified) => {
  const {data} =useHomeContext()
  let coinsDetails
  if(simplified){ coinsDetails=data.coins.filter((coin)=>coin.rank<11)}
  else {coinsDetails=data.coins}
  
    const data1={x1:'Volume', x2:'Trades', x3:'More insights'}
  return (<>
    {!data ? <Loading/>:
    <div style={{width:'35%'}}>
      <InnerDivHeader {...data1}/>
      <table>
      <thead><tr style={{color: '#00008B'}}><th></th><th>COIN</th><th>MARKET CAP</th><th>CURRENT PRICE</th></tr></thead>
      <tbody>
      {coinsDetails.map((coin)=>{
const {uuid,rank, symbol,marketCap, price}=coin
return<tr key={uuid}> 
<td>{rank}</td>
<td>{symbol}</td>
<td>{millify(marketCap)}</td>
<td>{millify(price)}</td>
</tr>
      })}
      </tbody>
    </table>
    </div>
    }
    </>
  );




}

export default CoinData;
