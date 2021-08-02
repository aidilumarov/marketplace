import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { clientContext } from '../../contexts/ClientContext';

const SignUp = () => {

    const {registerUser} =useContext(clientContext)
    const [newUser, setNewUser] = useState({
        email: '',
        password: ''
    })

    const handleInput = (e) => {
        let obj = {
            ...newUser,
            [e.target.name]: e.target.value
        }
        setNewUser(obj)
    }

    const handleClick = () => {
        registerUser(newUser)
    }

    return (
        <div>
            <input onChange={handleInput} name='email' type="text"/>
            <input onChange={handleInput} name='password' type="password"/>
            <button onClick={handleClick}>Zaregistrirovatsya</button>
        </div>
    );
};

export default SignUp;