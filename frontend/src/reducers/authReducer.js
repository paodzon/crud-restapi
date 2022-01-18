const INITIAL_STATE = {
    userDetails:[],
    newUser:[],
    error:[]
}

const authReducer = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case 'SIGN_UP':
            return {...state, newUser:action.payload}
        case 'LOGIN_USER':
            return {...state, userDetails:action.payload}
        case 'LOGOUT_USER':
            return {...state, userDetails:[]}
        case 'AUTH_ERROR':
            return {...state, error:action.payload}
        default:
            return state
    }
}

export default authReducer

