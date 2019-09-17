import React, { useState, useEffect } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth';

import Friend from './Friend';

const FriendList = () => {
    const [friendList, setFriendList] = useState([]);
    const [friend, setFriend] = useState({ name: '', age: '', email: '', id: '' })

    useEffect(() => {
        axiosWithAuth().get('/friends')
            .then(res => setFriendList(res.data))
            .catch(err => console.log('Error: ', err));
    }, [])

    const handleFriendChange = (e) => {
        setFriend({
            ...friend,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth().post('/friends', { ...friend, id: Date.now() })
            .then(res => setFriendList(res.data))
            .catch(err => console.log('Error: ', err));
        setFriend({ name: '', age: '', email: '', id: '' })
    }

    const handleFriendListUpdate = (list) => {
        setFriendList(list);
    }


    console.log(friendList);
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='name' placeholder='name' value={friend.name} onChange={handleFriendChange} />
                <input type='text' name='age' placeholder='age' value={friend.age} onChange={handleFriendChange} />
                <input type='text' name='email' placeholder='email' value={friend.email} onChange={handleFriendChange} />
                <button type='submit'>Add Friend</button>
            </form>
            {friendList.map(friend => <Friend key={friend.id} friend={friend} handleFriendListUpdate={handleFriendListUpdate} />)}
        </div>
    );
}

export default FriendList;