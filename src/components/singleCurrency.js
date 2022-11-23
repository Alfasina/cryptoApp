import {useEffect} from 'react';
import axios from 'axios';
import { Form, useLoaderData } from "react-router-dom";
import { useParams } from 'react-router-dom';


const SingleCurrency = () => {
    const {cryptoId}=useParams()
    
    useEffect(()=>{
        const options = {
            method: 'GET',
            url: `https://coinranking1.p.rapidapi.com/coin/${cryptoId}`,
            params: {referenceCurrencyUuid: 'yhjMzLPhuIDl', timePeriod: '24h'},
            headers: {
              'X-RapidAPI-Key': '0174fbbd2amsh65e5fe50572e651p136812jsn5f992cf2d3aa',
              'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              console.log(response.data.data);
          }).catch(function (error) {
              console.error(error);
          });
    },[])
   
  return (
    <div>
      
    </div>
  );
}

export default SingleCurrency;
