export const login = (payload) =>{
    return {
        type:'LOGIN',
        payload
    }
}



export const addImage = (payload) =>{
    return {
        type:'ADD_IMAGE',
        payload
    }
}

export const addAccount = (payload) =>{
    return {
        type:'ADD_ACCOUNT',
        payload
    }
}

export const addUser= (payload) =>{
    return {
        type:'ADD_USER',
        payload
    }
}

export const clearNotification= () =>{
    return {
        type:'CLEAR_NOTIFICATION'
    }
}


export const changeSettings= (payload) =>{
    return {
        type:'CHANGE_SETTINGS',
        payload
    }
}

export const addGoal = (payload) =>{
    return {
        type:'ADD_GOAL',
        payload
    }
}

export const debitAccount = (payload) =>{
    return {
        type:'DEBIT_ACCOUNT',
        payload
    }
}

export const addTransaction = (payload) =>{
    return {
        type:'ADD_TRANSACTION',
        payload
    }
}

export const addQuickPayment = (payload) =>{
    return {
        type:'ADD_QUICKPAYMENT',
        payload
    }
}


export const authUpdateUserBio = (payload) =>{
    return {
        type:'AUTH_UPDATE_USER_BIO',
        payload
    }
}

export const authUpdateUserBank = (payload) =>{
    return {
        type:'AUTH_UPDATE_USER_BANK',
        payload
    }
}

