import React from 'react';


const Review = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <h3>{props.rating}</h3>
            <p>{props.message}</p>
            <h3>{props.user.name}</h3>
        </div>
    )
};

export default Review