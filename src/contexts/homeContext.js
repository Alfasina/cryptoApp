import { useReducer, useEffect,createContext, useContext } from "react";
import axios from "axios";
import { Homereducer } from "../reducer States/homeReducer";
  

export const HomesContext = createContext(null);



const HomeProvider = (Children) => {
    const initialData={data:[]}
    const {state, dispatch}=useReducer(Homereducer,initialData)
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '0174fbbd2amsh65e5fe50572e651p136812jsn5f992cf2d3aa',
                'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
            }
        };
        
        fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
        console.log('start')
    }, []);


  return (
    <div>
        <HomesContext.Provider value={{state, dispatch}}>
            
            {Children}
        </HomesContext.Provider>
      
    </div>
  );
}
export const useHomeContext = () => {
    return useContext(HomeProvider)
  }
export default HomeProvider;


