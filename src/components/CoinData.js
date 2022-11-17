import React from 'react';
import InnerDivHeader from './innerDivHeader';
import { useHomeContext } from '../contexts/homeContext';
import Loading from './loading';
import millify from "millify";

const CoinData = () => {
  const {data} =useHomeContext()
  
    const data1={x1:'Volume', x2:'Trades', x3:'More insights'}
  return (<>
    {!data ? <Loading/>:
    <div style={{width:'35%'}}>
      <InnerDivHeader {...data1}/>
      <table>
      <thead><tr><th></th><th>Coin</th><th>Market cap</th><th>Current Price</th></tr></thead>
      <tbody>
      {data.coins.filter((coin)=>coin.rank<6).map((coin)=>{
const {uuid,rank, symbol, name,marketCap, price}=coin
return<tr key={uuid}> 
<td>{rank}</td>
<td>{name}</td>
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
