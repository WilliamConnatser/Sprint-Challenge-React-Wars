import React from 'react';
import './Character.css';
import CharacterAttribute from './CharacterAttribute';

export default (props) => {
    const attributes = Object.entries(props.char);
    
    const sanitizedAttributes = attributes.filter(function(att) {
        if(att[1] instanceof Array) return false;
        switch(att[0]) {
            case "name":
                return false;
            case "homeworld":
                return false;
            case "url":
                return false;
            case "created":
                return false;
            case "edited":
                return false;
            default:
                return true;
        }
    });

    const attributeElements = sanitizedAttributes.map(function(att, index) {
        return <CharacterAttribute attribute={att} key={index}/>
    });

    return (
        <div className="character">
            <h1 className="name">{props.char.name}</h1>
            <ul className="character-attribute-list">
               { attributeElements }
            </ul>
            
        </div>
    )
}