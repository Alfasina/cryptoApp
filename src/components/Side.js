import { GrHome, GrUpdate, GrCurrency  } from 'react-icons/gr';
import {GiTrade} from 'react-icons/gi'
import { Link } from 'react-router-dom';


const Side = () => {
    const Pages=[{name:'Home', icon:<GrHome/>, link:''}, 
                  {name:'News & Updates', icon:<GrUpdate/>, link:'news'},
                  {name:'Tokens', icon:<GrCurrency/>, link:''},
                  {name:'Trades', icon:<GiTrade/>,link:'marketcaps'}]
  return (
    <aside width='30%'>{Pages.map(((tas, index)=>{
    const {name, icon, link}=tas
    
    return<p key={index}><Link  className='pages' to={link}>{icon}{name}</Link> </p>}))}</aside>
  );
}

export default Side;
