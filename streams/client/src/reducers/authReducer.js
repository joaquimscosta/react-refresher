const INITIAL_STATE={
    authenticated:false
}

export default (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case 'SIGN_IN':
            return {...state, authenticated:true}
        case 'SIGN_OUT':
            return {...state, authenticated:false}
        default:
            return state;
    }
}