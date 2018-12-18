import {SIGN_IN,SIGN_OUT} from '../actions/types'
const INITIAL_STATE={
    authenticated:false,
    userId:null
}

export default (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case SIGN_IN:
            return {...state, authenticated:true, userId:action.payload}
        case SIGN_OUT:
            return {...state, authenticated:false, userId:null}
        default:
            return state;
    }
}