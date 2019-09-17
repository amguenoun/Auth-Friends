import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const LoginForm = (props) => {
    const [user, setUser] = useState({ username: '', password: '' });
    const [isLoading, setIsLoading] = useState(false);

    const handleUserChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        axiosWithAuth().post('/login', user)
            .then(res => localStorage.setItem('token', res.data.payload))
            .catch(err => console.log('Error', err));
        setUser({ username: '', password: '' });
        props.history.push('/friends');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="username" placeholder="username" value={user.username} onChange={handleUserChange} />
                <input type="password" name="password" placeholder="password" value={user.password} onChange={handleUserChange} />
                <button type='submit'>{isLoading ? 'Loading' : 'Log In'}</button>
            </form>
        </div>
    )
}

export default LoginForm;