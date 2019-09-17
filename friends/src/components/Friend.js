import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const Friend = ({ friend, handleFriendListUpdate }) => {

    const deleteFriend = () => {
        axiosWithAuth().delete(`/friends/${friend.id}`)
            .then(res => handleFriendListUpdate(res.data))
            .catch(err => console.log('Error: ', err));
    }

    return (
        <div>
            <h3>{friend.name}</h3>
            <h4>{friend.email}</h4>
            <p>{friend.age}</p>
            <button onClick={deleteFriend}>Delete</button>
        </div>
    );
}

export default Friend;