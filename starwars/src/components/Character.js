import React from 'react';
import './Character.css';

export default (props) => {
    return (
        <div className="character">
            <h1 className="name">{props.char.name}</h1>
        </div>
    )
}