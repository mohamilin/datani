import Axios from 'axios';

export const REGISTER = "REGISTER";
export const LOGIN = "REGISTER";
export const SET_ERROR = "SET_ERROR"


export const setUserRegister = (data) => {
    return {
        type : REGISTER,
        payload: data,
    }
}

export const setUserLogin = (data) => {
    return {
        type: LOGIN,
        payload: data,
    }
}

export const setError = error => {
    return {
        type: SET_ERROR,
        error,
    }
}

export const setRegisterAction = (values, event, history) => (dispatch) =>  {
    event.preventDefault();
    return Axios
    .post('https://server-datani.herokuapp.com/add-user', values)
    .then((response) => {
        console.log('data', response)
        dispatch(setUserRegister(response.data.user))
        // localStorage.setItem("token", response.data.token)
        history.push('/login');
    }).catch(error => {
        console.log(error);
    })
}

export const setLoginAction = (values, event, history) => {
    return (dispatch) => {
        event.preventDefault();
        return Axios
        .post('https://server-datani.herokuapp.com/login', values)
        .then ((response) => {
            console.log('response', response)
            console.log('detail res', response.data)
            dispatch(setUserLogin(response.data))
            history.push('/')
        }).catch((error) => {
            dispatch(setError(error))
        })
    }
}