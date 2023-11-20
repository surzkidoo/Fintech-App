/* eslint-disable no-duplicate-case */

import data from '../data'

let initial = data

const globalReducer = (state=initial,action) =>{

    switch(action.type){
        // case 'LOGIN':
        //     return {isLogin:true,user:{...action.payload}}

        case 'ADD_USER':
             return {...state,users:[...state.users,action.payload]}

        case '/ADD_QUICKPAYMENT':
            return {...state,user:{...state.user,quickpayment:[...state.user.quickpayment,action.payload]}}
        
        case '/DEBIT_ACCOUNT':
            return {...state,user:{...state.user,accounts:[...state.user.accounts.map(acc=>acc.id==action.payload.id? action.payload : acc)]}}
            
        case '/ADD_TRANSACTION':
             return {...state,user:{...state.user,transaction:[...state.user.transaction,action.payload]}}
                     
        case '/ADD_GOAL':
            return {...state,user:{...state.user,goal:[...state.user.goal,action.payload]}}

        case '/LOGOUT':
            return {...initial}
        default:
            return {...state};
    }
}

export default globalReducer;