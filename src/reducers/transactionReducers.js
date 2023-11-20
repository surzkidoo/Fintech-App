/* eslint-disable no-duplicate-case */

import data from '../data'

let initial = {
    user:data.users[0],
    isLogin: true
}

const TransactionReducer = (state=initial,action) =>{

    switch(action.type){

        case 'GET_ALL_TRANSACTION':
             return {state,user:{...state.user,accounts:[...state.user.accounts,action.payload]}}

        case 'SEARCH_TRANSACTION':
            return {state,user:{...state.user,accounts:[...state.user.accounts,action.payload]}}
        
        case 'FILTER_TRANSACTION':
            return {state,user:{...state.user,accounts:[...state.user.accounts,action.payload]}}
            
        default:
            return {...state};
    }
}

export default TransactionReducer;