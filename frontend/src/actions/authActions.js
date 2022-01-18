
export const signUp = (userDetails) => async(dispatch) =>{
    fetch('http://localhost:8080/auth/signup',{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify({
            name: userDetails.name,
            email:userDetails.email,
            password: userDetails.password
        })
    }).then(res => res.json()).then(resData =>{
        dispatch({
            type:'SIGN_UP',
            payload: resData
        })
    }).catch(err =>{
        dispatch({
            type: 'AUTH_ERROR',
            payload: err
        })
    }) 

    
}

export const login = (userDetails) => async(dispatch) =>{
    await fetch('http://localhost:8080/auth/login',{
        method:'POST',
        headers:{'Content-Type' : 'application/json'},
        body:JSON.stringify({
            email: userDetails.email,
            password: userDetails.password
        })
    }).then(res => res.json()).then(data =>{
       dispatch({
           type:'LOGIN_USER',
           payload: data
       })
       localStorage.setItem('token', data.token);
       localStorage.setItem('userId', data.userId);
       
    }).catch(err =>{
        dispatch({
            type:'AUTH_ERROR',
            payload:err
        })
    })
}

export const checkUser = () => (dispatch) =>{
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    if(token && userId){
        dispatch({
            type:'LOGIN_USER',
            payload: {token: token, userId: userId}
        })
    }
}

export const logout =() =>{
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    return({
        type:'LOGOUT_USER'
    })
}