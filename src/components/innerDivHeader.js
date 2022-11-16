import {useState} from 'react';

const InnerDivHeader = (x1, x2,x3) => {
    const [isActive, setActive]= useState(false);
  return (
    <div><ul><li style={!isActive ? 'active':'Grey'} onClick={()=>{if(isActive){setActive(!isActive)}}}>{x1} </li><li style={isActive ? 'active':'Grey'} onClick={()=>{if(!isActive){setActive(!isActive)}}}>{x2}</li></ul> <button>{x3}</button></div>
  );
}

export default InnerDivHeader;
