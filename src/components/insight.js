import React from 'react';
import InnerDivHeader from './innerDivHeader';

const Insight = () => {
  const data={x1:'Volume', x2:'Trades', x3:'More insights'}
  return (
    <div style={{width:'60%',borderRadius:'1rem'}}>
     <InnerDivHeader {...data} />
      <div>
            generate barChart with ChartJs
      </div>
    </div>
  );
}

export default Insight;
