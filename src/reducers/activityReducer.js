/* eslint-disable no-duplicate-case */

import data from '../data'

let initial = {
    user:data.users[0],
    isLogin: true
}

const ActivityReducer = (state=initial,action) =>{

    switch(action.type){

        case 'GET_ALL':
             return {state,user:{...state.user,accounts:[...state.user.accounts,action.payload]}}

        case 'ADD_ACTIVITY':
            return {state,user:{...state.user,accounts:[...state.user.accounts,action.payload]}}
        
        case 'DELETE_ACTIVITY':
            return {state,user:{...state.user,accounts:[...state.user.accounts,action.payload]}}
            
        default:
            return {...state};
    }
}

export default ActivityReducer;