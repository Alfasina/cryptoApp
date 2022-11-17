import { useHomeContext } from "../contexts/homeContext"
import Datacards from "./datacards"
import Loading from "./loading"


export const CardContainer=()=>{
    const {data}=useHomeContext()
    return<section className='cardContainer' >
        {!data ? <Loading/>:<>{Object.keys(data.stats).map((keys,index) => <Datacards key={index}  keys={keys} data={data.stats} />
            )}</> }
  </section>
}