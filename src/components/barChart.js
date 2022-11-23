import React from 'react';
import Chart from 'chart.js/auto';
import {Bar} from 'react-chartjs-2'
import Loading from './loading';
import { useHomeContext } from '../contexts/homeContext';

const BarChart = (simplified) => {
    const {data}=useHomeContext()
    
if(!data){
    return<Loading/>
}
let filterData
if(simplified){filterData=data.coins.filter((data)=>data.rank<13)}
else{
    filterData=data.coins
}
    const label= filterData.map((dat)=>{
        return dat.symbol
    })
    const dataset={label:'Market Cap', data:filterData.map((dat)=>{
           return dat.marketCap
        })}
        
    const state = {
        labels: label,
        datasets: [
          { ...dataset}
        ]
      }
  return (<Bar data={state}/>
        
    
  );
}

export default BarChart;
