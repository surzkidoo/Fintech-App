const LoadingReducer = (state={loading:false},action) =>{

    switch(action.type){
        case 'start_loading':
            return {loading:false}
        case 'stop_loding':
            return {loading:false}
        default:
            return {...state};
    }
}

export default LoadingReducer;