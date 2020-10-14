import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setRegisterAction} from '../redux/actions/user.actions';
import {useHistory} from 'react-router-dom';


function Register() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [register, setRegister] = useState({
        fullname: "",
        email: "",
        password: "",
        gender: "",
        alamat:"",
        profesi: ""
    })

    const isLogged = useSelector((state) => state.user)
    console.log('isloged', isLogged);
    console.log('register', register)

    const handleChange =(event) => {
        // console.log('evenet', event)
        setRegister({
            ...register,
            [event.target.name]: event.target.value,
        });
    }
 
    return (
        <>
            <div>
                <h1>Halaman Register</h1>

                <form 
                onSubmit= {(event) => {
                        dispatch(setRegisterAction(register, event, history))
                    }}
                >
                    <input
                    type = "text"
                    name = "fullname"
                    value = {register.fullname}
                    placeholder = "masukkan nama"
                    onChange = {(event) => handleChange(event)}
                    />
                     <input
                    type = "email"
                    name = "email"
                    value = {register.email}
                    placeholder = "masukkan nama"
                    onChange = {(event) => handleChange(event)}
                    />
                     <input
                    type = "password"
                    name = "password"
                    value = {register.password}
                    placeholder = "masukkan nama"
                    onChange = {(event) => handleChange(event)}
                    />
                     <input
                    type = "text"
                    name = "gender"
                    value = {register.gender}
                    placeholder = "masukkan nama"
                    onChange = {(event) => handleChange(event)}
                    />
                     <input
                    type = "text"
                    name = "alamat"
                    value = {register.alamat}
                    placeholder = "masukkan nama"
                    onChange = {(event) => handleChange(event)}
                    />
                     <input
                    type = "text"
                    name = "profesi"
                    value = {register.profesi}
                    placeholder = "masukkan nama"
                    onChange = {(event) => handleChange(event)}
                    />

                    <button>register</button>
                </form>
            </div>
        </>
    )
}

export default Register
