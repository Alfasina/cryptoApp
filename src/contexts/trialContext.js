import {useReducer, createContext, useContext} from "react";


const XXconcept=createContext('null')

function reducer(state,action){
switch(action.type){
    case 'LOAD':
        if (!action.payLoad){
                console.log('not loading')
        }
        else{
                console.log(action.payload)  
        }
        return [action.payload]
    case 'REMOVE':
            console.log('Remove')
            break
    case 'CLEAR':
                console.log('Clear')
            return {}
    default:
        return
}
}



const  XContextProvider=({children})=>{
        const side=[]
    const [state, dispatch]=useReducer(reducer,side)
    const load =(x)=>{const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0174fbbd2amsh65e5fe50572e651p136812jsn5f992cf2d3aa',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'}
};

fetch(`https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd?referenceCurrencyUuid=${x}&timePeriod=24h`, options)
	.then(response => response.json())
	.then(response =>{
                dispatch({type:'LOAD',payLoad:response.data})
                console.log(response.data)
                })
	.catch(err => alert(err));}



 return<XXconcept.Provider  value={{...state,load}}>
            {children}   
        </XXconcept.Provider>}
export const useXXContext = () => {
        return useContext(XXconcept)
      }
export {XXconcept,XContextProvider}