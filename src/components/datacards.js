 import React from 'react';
 import millify from "millify";

const Datacards = ({keys, data}) => {
  return (
    <div className='card'>
        <p>{keys} </p>
        <h2>{data[keys].length<5 ? data[keys]:millify(data[keys])}</h2>
        <p>2.2223%</p>
      
    </div>
  );
}

export default Datacards;
