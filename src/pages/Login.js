import React, {useState} from 'react';
import {setLoginAction} from '../redux/actions/user.actions';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';


function Login() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [login, setLogin] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        setLogin ({
            ...login,
            [event.target.name] : event.target.value
        });
    }

    return (
        <div>
            <h1>Halaman Login</h1>
            <form 
            onSubmit= {(event) => {
                dispatch(setLoginAction(login, event, history))
            }}
            >
                <input 
                type ="email"
                name ="email"
                value= {login.email}
                placeholder="masukkan email"
                onChange= {(event) => handleChange(event)}
                />
                 <input 
                type ="password"
                name ="password"
                value= {login.password}
                placeholder="masukkan password"
                onChange= {(event) => handleChange(event)}
                />

                <button>Login</button>
            </form>
        </div>
    )
}

export default Login
