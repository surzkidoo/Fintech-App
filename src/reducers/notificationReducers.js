/* eslint-disable no-duplicate-case */

import data from '../data'

let initial = {
    user:data.users[0],
    isLogin: true
}

const NotificationReducer = (state=initial,action) =>{

    switch(action.type){

        case 'GET_ALL_NOTIFICATION':
             return {state,user:{...state.user,accounts:[...state.user.accounts,action.payload]}}

        case 'CLEAR_NOTIFICATION':
            return {state,user:{...state.user,accounts:[...state.user.accounts,action.payload]}}
        
        case 'ADD_NOTIFICATION':
            return {state,user:{...state.user,accounts:[...state.user.accounts,action.payload]}}
            
        default:
            return {...state};
    }
}

export default NotificationReducer;