import React from 'react';
import Chart from 'chart.js/auto';
import {Bar} from 'react-chartjs-2'
import Loading from './loading';
import { useHomeContext } from '../contexts/homeContext';

const BarChart = () => {
    const {data}=useHomeContext()
    
if(!data){
    return<Loading/>
}
const filterData=data.coins.filter((data)=>data.rank<11)
    const label= filterData.map((dat)=>{
        return dat.symbol
    })
    const dataset={label:'Market Cap', data:filterData.map((dat)=>{
           return dat.marketCap
        })}
        //const chartData={label:label, dataset:dataset}
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
