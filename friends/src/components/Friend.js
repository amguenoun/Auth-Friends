import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const Friend = ({ friend, handleFriendListUpdate }) => {
    const [edit, setEdit] = useState(friend)
    const [isEditing, setIsEditing] = useState(false);

    const deleteFriend = () => {
        axiosWithAuth().delete(`/friends/${friend.id}`)
            .then(res => handleFriendListUpdate(res.data))
            .catch(err => console.log('Error: ', err));
    }

    const editFriend = () => {
        setIsEditing(true);
    }

    const handleEditChange = (e) => {
        setEdit({
            ...edit,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth().put(`/friends/${friend.id}`, edit)
            .then(res => handleFriendListUpdate(res.data))
            .catch(err => console.log('Error: ', err));
        setIsEditing(false);
    }

    return (
        <div className='friend-card'>
            {!isEditing ?
                <>
                    <h3>{friend.name}</h3>
                    <h4>{friend.email}</h4>
                    <p>{friend.age}</p>
                    <button onClick={deleteFriend} className='friend-btn'>Delete</button>
                    <button onClick={editFriend} className='friend-btn'>Edit</button>
                </> : <form onSubmit={handleSubmit} className='edit-form'>
                    <input type='text' name='name' placeholder='name' value={edit.name} onChange={handleEditChange} />
                    <input type='text' name='age' placeholder='age' value={edit.age} onChange={handleEditChange} />
                    <input type='text' name='email' placeholder='email' value={edit.email} onChange={handleEditChange} />
                    <button type='submit'>Complete Edit</button>
                </form>}
        </div>
    );
}

export default Friend;