import {useState} from 'react';

const InnerDivHeader = ({x1, x2,x3}) => {
    const [isActive, setActive]= useState(false);
  return (
    <div style={{display:'flex', alignItems:'center',justifyContent:'space-between', padding:'3px 2%'}}>
        <ul style={{display:'flex', gap:'1rem', margin:0}}>
            <li className={!isActive ? 'active':'Grey'} onClick={()=>{if(isActive){setActive(!isActive)}}}>{x1} </li>
            <li className={isActive ? 'active':'Grey'} onClick={()=>{if(!isActive){setActive(!isActive)}}}>{x2}</li>
        </ul>
        <button  style={{background:'aliceblue', padding:'.5rem 1rem',color:'blue', border:'none', borderRadius:'.5rem'}}>{x3}</button>
    </div>
  );
}

export default InnerDivHeader;
