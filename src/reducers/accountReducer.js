/* eslint-disable no-duplicate-case */

import data from '../data'

let initial = {
    }

const AccountReducer = (state=initial,action) =>{

    switch(action.type){

        case 'ADD_ACCOUNT':
             return {state,user:{...state.user,accounts:[...state.user.accounts,action.payload]}}

        case 'ACCOUNT_DESPOIT':
                return {state,user:{...state.user,accounts:[...state.user.accounts,action.payload]}}
   
        case 'ACCOUNT_WITHDRAWAL':
            return {state,user:{...state.user,accounts:[...state.user.accounts,action.payload]}}
        
        case 'SWITCH_ACCOUNT':
            return {state,user:{...state.user,accounts:[...state.user.accounts,action.payload]}}
        
        case 'GOAL_ACCOUNT':
                return {state,user:{...state.user,accounts:[...state.user.accounts,action.payload]}}
                
        default:
            return {...state};
    }
}

export default AccountReducer;