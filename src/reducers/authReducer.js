/* eslint-disable no-duplicate-case */

import data from '../data'

let initial = {
    user:data.users[0],
    isLogin: true
}

const AuthReducer = (state=initial,action) =>{

    switch(action.type){
        case 'LOGIN':
            return {...action.payload}

        case 'ADD_ACCOUNT':
             return {...state,user:{...state.user,accounts:[...state.user.accounts,action.payload]}}

        case 'ADD_QUICKPAYMENT':
            return {...state,user:{...state.user,quickpayment:[...state.user.quickpayment,action.payload]}}
        
        case 'DEBIT_ACCOUNT':
            return {...state,user:{...state.user,accounts:[...state.user.accounts.map(acc=>acc.id==action.payload.id? action.payload : acc)]}}
            
        case 'ADD_TRANSACTION':
             return {...state,user:{...state.user,transaction:[...state.user.transaction,action.payload]}}
        
        case 'CLEAR_NOTIFICATION':
        
            return {...state,user:{...state.user,notification:{read:[...state.user.notification.read,...state.user.notification.unread],unread:[]}}}
                     
        case 'ADD_GOAL':
            return {...state,user:{...state.user,goal:[...state.user.goal,action.payload]}}

        case 'AUTH_UPDATE_USER_BIO':
            return {...state,user:{...state.user,bio:{...state.user.bio,...action.payload}}}

        case 'AUTH_UPDATE_USER_BANK':
            return {...state,user:{...state.user,bank:{...state.user.bank,...action.payload}}}

        case 'ADD_IMAGE':
            return {...state,user:{...state.user,bio:{...state.user.bio,...action.payload}}}
        
        case 'CHANGE_SETTINGS':
            return {...state,user:{...state.user,settings:{...action.payload}}}

            default:
            return {...state};
    }
}

export default AuthReducer;