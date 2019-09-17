import React, { useState, useEffect } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth';
import Friend from './Friend';

const FriendList = () => {
    const [friendList, setFriendList] = useState([]);

    useEffect(() => {
        axiosWithAuth().get('/friends')
            .then(res => setFriendList(res.data))
            .catch(err => console.log('Error: ', err));
    }, [])

    return (
        <div>
            {friendList.map(friend => <Friend key={friend.id} friend={friend} />)}
        </div>
    );
}

export default FriendList;