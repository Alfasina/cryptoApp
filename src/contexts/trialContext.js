import {useReducer, createContext, useContext } from "react";


const XXconcept=createContext('null')

function reducer(state,action){
switch(action.type){
    case 'ADD':
        console.log('Add')
        break
    case 'REMOVE':
            console.log('Remove')
            break
    case 'CLEAR':
                console.log('Clear')
            return {}
    default:
        console.log('error');
        return
}
}



const  XConceptProvider=({children})=>{
        const side=['Home', 'News & Updates' ,'Tokens', 'Trades']
    const [state, dispatch]=useReducer(reducer,side)
    const Add =(x)=>{
        dispatch({
                type:'ADD'
        })}
    const Remove =(x)=>{
            dispatch({
                    type:'REMOVE'
            })}

    const Clear =(x)=>{
        dispatch({
                type:'CLEAR'
        })
    } 
return<XXconcept.Provider  value={{state}}>
            {children}   
        </XXconcept.Provider>}


export {XXconcept,XConceptProvider}