import { useReducer, useEffect,createContext, useContext } from "react";
import  Homereducer from "../reducer States/homeReducer";
import axios from "axios";
  
const HomeContext = createContext(null);



const HomeProvider = ({children}) => {
    
    const initialData=[]
    const [state, dispatch]=useReducer(Homereducer,initialData)
    const fetchData=()=>{
        const options = {
            method: 'GET',
            url: 'https://coinranking1.p.rapidapi.com/coins',
            params: {
              referenceCurrencyUuid: 'yhjMzLPhuIDl',
              timePeriod: '24h',
              'tiers[0]': '1',
              orderBy: 'marketCap',
              orderDirection: 'desc',
              limit: '50',
              offset: '0'
            },
            headers:{  'X-RapidAPI-Key': '0174fbbd2amsh65e5fe50572e651p136812jsn5f992cf2d3aa',
                        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'}
          }; 
          axios.request(options).then(function (response) {
             loading(response.data)
             console.log(state)

          }).catch(function (error) {
              alert(error);
          });
    }
    function loading(x){
        dispatch({type:"LOAD", payload:x})
    }
    
    
     useEffect(() => {
         fetchData()        
     }, []);

  return (
    <div>
        <HomeContext.Provider value={{...state}}>    
            {children}
        </HomeContext.Provider>
    </div>
  );
}
export const useHomeContext = () => {
    return useContext(HomeContext)
  }
export {HomeProvider,HomeContext} ;


