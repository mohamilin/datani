import { REGISTER, LOGIN, SET_ERROR } from "../actions/user.actions";

const token = localStorage.getItem('token');

const initialState = token
  ? {
      isLogged: true,
      data: [],
    }
  : {
      isLogged: false,
      data: [],
      registerUser: [],
    };

    const user = (state =  initialState, action) => {
        switch (action.type) {
            case REGISTER:
                return {
                    registerUser: action.payload
                }
            case LOGIN:
                return {
                    data: action.payload
                }
            case SET_ERROR:
                return {
                    error : action.error
                }
            default:
                return state;
        }
    }

    export default user;