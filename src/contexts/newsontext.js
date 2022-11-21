import { useContext,createContext,useEffect,useReducer, Children } from "react";
import { newsReducer } from "../reducer States/NewsReducer";
import axios from "axios";

const newsContext=createContext(null)



export const NewsProvider=({children})=>{
    const initialState=null
    const loading=()=>{
        const options = {
          method: 'GET',
          url: 'https://crypto-news-live3.p.rapidapi.com/news',
          headers: {
            'X-RapidAPI-Key': '0174fbbd2amsh65e5fe50572e651p136812jsn5f992cf2d3aa',
            'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com'
          }
        };
        
        axios.request(options).then(function (response) {
            dispatch({type:'LOAD',payload:response.data});
        }).catch(function (error) {
            console.error(error);
        });
    }
    const [state, dispatch]=useReducer(newsReducer,initialState)
    useEffect(loading,[
    ])

    return<newsContext.Provider value={{state}}>
        {children}
    </newsContext.Provider>
}

export const useNewsContext=()=>{
    
    return useContext(newsContext)}