import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const LoginForm = (props) => {
    const [user, setUser] = useState({});

    const handleUserChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth().post('/login', user)
            .then(res => localStorage.setItem('token', res.data.payload))
            .catch(err => console.log('Error', err));
        props.history.push('/friends');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="username" placeholder="username" value={user.username} onChange={handleUserChange} />
                <input name="password" placeholder="password" value={user.password} onChange={handleUserChange} />
                <button type='submit'>Log In</button>
            </form>
        </div>
    )
}

export default LoginForm;