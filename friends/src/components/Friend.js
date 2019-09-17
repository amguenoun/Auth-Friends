import React from 'react';

const Friend = ({ friend }) => {
    return (
        <div>
            <h3>{friend.name}</h3>
            <h4>{friend.email}</h4>
            <p>{friend.age}</p>
        </div>
    );
}

export default Friend;