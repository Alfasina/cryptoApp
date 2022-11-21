import React from 'react';
import { useNewsContext } from '../contexts/newsontext';
import Loading from './loading';



const News = () => {
    const {state}=useNewsContext()

   
  return (
    <div className='newsDiv'>
        <h3>News & Updates</h3>
        <div className='newsInnerDiv'>
        {!state ? <Loading/>:Object.keys(state).map((key)=>{ 
          if(key<10){
 const{title, url, source}=state[key]
            return<div className='cardLink' key={key}><a href={url} className='newsLink'>
              <h4>{title} <pre>({source})</pre></h4> 
              </a></div>}
        })}   
        </div>   
    </div>
  );
}

export default News;
