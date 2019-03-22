import React from 'react';
import './CharacterAttribute.css';

export default (props) => {

    return (
        <li className="character-attributes">
            <strong className="attribute-name">
                { props.attribute[0].replace('_', ' ') }: &nbsp;
            </strong>
            <span className="attribute-value">
                { props.attribute[1] }
            </span>
        </li>
    )
}