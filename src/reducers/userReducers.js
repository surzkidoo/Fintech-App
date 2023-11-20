/* eslint-disable no-duplicate-case */

import data from '../data'

let initial = {
    user:data.users[0],
    isLogin: true
}

const UserReducer = (state=initial,action) =>{

    switch(action.type){

        case '/GET_ALL_USERS':
            return {state,user:{...state.user,accounts:[...state.user.accounts,action.payload]}}

        case '/ADD_USER':
            return {state,user:{...state.user,accounts:[...state.user.accounts,action.payload]}}

            
        default:
            return {...state};
    }
}

export default UserReducer;