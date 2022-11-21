export const newsReducer=(state,action)=>{
switch(action.type){
    case('LOAD'):
    return{...action.payload}
    case('SEARCH'):

    return {...action.payload}
    default:
        console.log('Nothing Change')
        return{...state}
}
}