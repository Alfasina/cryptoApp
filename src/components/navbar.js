import{GrNotification,GrSettingsOption} from 'react-icons/gr'
import { useHomeContext } from '../contexts/homeContext'
import Autocomplete from './Autocomplete'
export const Navbar=()=>{
    const {data}=useHomeContext()
    var z=[]
    
    if(data){   
                data.coins.map((dat,index)=>{
                const {name,symbol}=dat
                return z=[...z,name,symbol]
            })}
   
    return(<nav className="navBar">
        <div>Logo</div>
        <Autocomplete data={z}/>
        <div><button className="btn"><GrNotification className='icon' /></button><button className="btn"><GrSettingsOption className='icon' /></button> </div>  
    </nav>)
}